using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;
using TeamLoadManagement.Services.FacebookModels;
using TeamLoadManagement.Services.Helpers;

namespace TeamLoadManagement.Services
{
    public class ExternalAuthService : IExternalAuthService
    {
        private readonly IJwtFactory jwtFactory;
        private readonly JwtIssuerOptions jwtOptions;
        private readonly FacebookAuthSettings fbAuthSettings;
        private readonly UserManager<AppUser> userManager;
        private readonly ApplicationDbContext appDbContext;
        private static readonly HttpClient Client = new HttpClient();

        public ExternalAuthService(
            IJwtFactory jwtFactory,
            IOptions<JwtIssuerOptions> jwtOptions,
            IOptions<FacebookAuthSettings> fbAuthSettingsAccessor,
            UserManager<AppUser> userManager,
            ApplicationDbContext appDbContext)
        {
            this.jwtFactory = jwtFactory;
            this.jwtOptions = jwtOptions.Value;
            this.fbAuthSettings = fbAuthSettingsAccessor.Value;
            this.userManager = userManager;
            this.appDbContext = appDbContext;
        }

        public async Task<string> ExternalLoginOrRegister(string accessToken)
        {
            FacebookUserData userInfo = await this.GetFacebookUserData(accessToken);

            if (userInfo == null)
            {
                return null;
            }

            AppUser user = await this.userManager.FindByEmailAsync(userInfo.Email);

            if (user == null)
            {
                var appUser = new AppUser
                {
                    FirstName = userInfo.FirstName,
                    LastName = userInfo.LastName,
                    FacebookId = userInfo.Id,
                    Email = userInfo.Email,
                    UserName = userInfo.Email,
                    PictureUrl = userInfo.Picture.Data.Url
                };

                var result = await this.userManager.CreateAsync(appUser, Convert.ToBase64String(Guid.NewGuid().ToByteArray()).Substring(0, 8));

                if (result.Succeeded)
                {
                    await this.appDbContext.SaveChangesAsync();
                }
            }

            AppUser localUser = await this.userManager.FindByNameAsync(userInfo.Email);

            if (localUser == null)
            {
                return null;
            }

            return await TokenGenerator.GenerateTokenAsync(
                this.jwtFactory.GenerateClaimsIdentity(localUser.UserName, localUser.Id),
                this.jwtFactory, localUser.UserName, this.jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
        }

        private async Task<FacebookUserData> GetFacebookUserData(string accessToken)
        {
            // 1.generate an app access token
            string appAccessTokenResponse
                = await Client.GetStringAsync($"https://graph.facebook.com/oauth/access_token?client_id={this.fbAuthSettings.AppId}&client_secret={this.fbAuthSettings.AppSecret}&grant_type=client_credentials");
            FacebookAppAccessToken appAccessToken = JsonConvert.DeserializeObject<FacebookAppAccessToken>(appAccessTokenResponse);

            // 2. validate the user access token
            string userAccessTokenValidationResponse
                = await Client.GetStringAsync($"https://graph.facebook.com/debug_token?input_token={accessToken}&access_token={appAccessToken.AccessToken}");
            FacebookUserAccessTokenValidation userAccessTokenValidation
                = JsonConvert.DeserializeObject<FacebookUserAccessTokenValidation>(userAccessTokenValidationResponse);

            if (!userAccessTokenValidation.Data.IsValid)
            {
                return null;
            }

            // 3. we've got a valid token so we can request user data from fb
            string userInfoResponse = await Client.GetStringAsync($"https://graph.facebook.com/v2.8/me?fields=id,email,first_name,last_name,name,gender,locale,birthday,picture&access_token={accessToken}");
            return JsonConvert.DeserializeObject<FacebookUserData>(userInfoResponse);
        }
    }
}

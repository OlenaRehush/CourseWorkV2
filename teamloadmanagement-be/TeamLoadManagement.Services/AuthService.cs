using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;
using TeamLoadManagement.Services.Helpers;

namespace TeamLoadManagement.Services
{
    public class AuthService : IAuthService
    {
        private readonly JwtIssuerOptions jwtOptions;
        private readonly UserManager<AppUser> userManager;
        private readonly IJwtFactory jwtFactory;

        public AuthService(
            IOptions<JwtIssuerOptions> jwtOptions,
            UserManager<AppUser> userManager,
            IJwtFactory jwtFactory)
        {
            this.jwtOptions = jwtOptions.Value;
            this.userManager = userManager;
            this.jwtFactory = jwtFactory;
        }

        public async Task<string> LoginAsync(string userName, string password)
        {
            var identity = await this.GetClaimsIdentity(userName, password);

            if (identity == null)
            {
                return null;
            }

            return await TokenGenerator.GenerateTokenAsync(
                identity,
                this.jwtFactory,
                userName,
                this.jwtOptions,
                new JsonSerializerSettings { Formatting = Formatting.Indented });
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            ClaimsIdentity claimsIdentity = null;

            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
            {
                return claimsIdentity;
            }

            var userToVerify = await this.userManager.FindByNameAsync(userName);

            if (userToVerify == null)
            {
                return claimsIdentity;
            }

            if (await this.userManager.CheckPasswordAsync(userToVerify, password))
            {
                claimsIdentity = this.jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id);
            }

            return claimsIdentity;
        }
    }
}

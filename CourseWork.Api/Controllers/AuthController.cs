using System.Security.Claims;
using System.Threading.Tasks;
using CourseWork.Api.Auth;
using CourseWork.Api.Helpers;
using CourseWork.Api.Models;
using CourseWork.Api.Models.Entities;
using CourseWork.Api.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace CourseWork.Api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<AppUser> userManager;
        private readonly IJwtFactory jwtFactory;
        private readonly JwtIssuerOptions jwtOptions;

        public AuthController(UserManager<AppUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {
            this.userManager = userManager;
            this.jwtFactory = jwtFactory;
            this.jwtOptions = jwtOptions.Value;
        }

        // POST api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var identity = await this.GetClaimsIdentity(credentials.UserName, credentials.Password);
            if (identity == null)
            {
                return this.BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", this.ModelState));
            }

            var jwt = await Tokens.GenerateJwt(identity, this.jwtFactory, credentials.UserName, this.jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
            return new OkObjectResult(jwt);
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
            {
                return await Task.FromResult<ClaimsIdentity>(null);
            }

            // get the user to verifty
            var userToVerify = await this.userManager.FindByNameAsync(userName);

            if (userToVerify == null)
            {
                return await Task.FromResult<ClaimsIdentity>(null);
            }

            // check the credentials
            if (await this.userManager.CheckPasswordAsync(userToVerify, password))
            {
                return await Task.FromResult(this.jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }
    }
}

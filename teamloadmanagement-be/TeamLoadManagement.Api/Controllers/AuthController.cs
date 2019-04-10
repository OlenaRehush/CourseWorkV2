using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Api.Requests;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService authService;

        public AuthController(
            IAuthService authService)
        {
            this.authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]CredentialsRequest credentials)
        {
            string token = await this.authService.LoginAsync(credentials.UserName, credentials.Password);

            if (token == null)
            {
                this.ModelState.TryAddModelError("login_failure", "Invalid username or password.");
                return this.BadRequest(this.ModelState);
            }

            return this.Ok(token);
        }
    }
}

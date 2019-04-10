using System.Threading.Tasks;
using CourseWork.Api.Requests;
using CourseWork.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ExternalAuthController : Controller
    {
        private readonly IExternalAuthService externalAuthService;

        public ExternalAuthController(
            IExternalAuthService externalAuthService)
        {
            this.externalAuthService = externalAuthService;
        }

        [HttpPost]
        public async Task<IActionResult> Facebook([FromBody]FacebookAuthRequest model)
        {
            string token = await this.externalAuthService.ExternalLoginOrRegister(model.AccessToken);

            if (token == null)
            {
                this.ModelState.TryAddModelError("external_auth_failure", "Failed to create local user account.");
                return this.BadRequest(this.ModelState);
            }

            return this.Ok(token);
        }
    }
}

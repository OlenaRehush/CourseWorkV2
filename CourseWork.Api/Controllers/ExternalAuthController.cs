using System.Threading.Tasks;
using CourseWork.Api.ViewModels;
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
        public async Task<IActionResult> Facebook([FromBody]FacebookAuthViewModel model)
        {
            string token = await this.externalAuthService.ExternalLoginOrRegister(model.AccessToken);

            if (token == null)
            {
                this.ModelState.TryAddModelError("login_failure", "Failed to create local user account.");
                return this.BadRequest(this.ModelState);
            }

            return new OkObjectResult(token);
        }
    }
}

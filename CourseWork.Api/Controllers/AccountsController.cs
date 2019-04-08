using System.Threading.Tasks;
using AutoMapper;
using CourseWork.Api.Helpers;
using CourseWork.Api.ViewModels;
using CourseWork.DataAccess.Entities;
using CourseWork.Services.Abstractions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IMapper mapper;
        private readonly IAccountsService accountsService;

        public AccountsController(
            IMapper mapper,
            IAccountsService accountsService)
        {
            this.mapper = mapper;
            this.accountsService = accountsService;
        }
        
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegistrationViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            AppUser userIdentity = this.mapper.Map<AppUser>(model);

            IdentityResult result = await this.accountsService.RegisterUserAsync(userIdentity, model.Password);

            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, this.ModelState));
            }

            return new OkObjectResult("Account created");
        }
    }
}

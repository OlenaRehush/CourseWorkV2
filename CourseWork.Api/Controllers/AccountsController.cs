using System.Threading.Tasks;
using CourseWork.Api.Data;
using CourseWork.Api.Helpers;
using CourseWork.Api.Models.Entities;
using CourseWork.Api.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly ApplicationDbContext appDbContext;
        private readonly UserManager<AppUser> userManager;
        private readonly IMapper mapper;

        public AccountsController(UserManager<AppUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            this.appDbContext = appDbContext;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var userIdentity = this.mapper.Map<AppUser>(model);

            var result = await this.userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, this.ModelState));
            }

            await this.appDbContext.Customers.AddAsync(new Customer { IdentityId = userIdentity.Id });
            await this.appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}

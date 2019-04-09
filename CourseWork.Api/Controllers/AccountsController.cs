using System.Threading.Tasks;
using AutoMapper;
using CourseWork.Api.Requests;
using CourseWork.DataAccess.Entities;
using CourseWork.Services.Abstractions;
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
        public async Task<IActionResult> Register([FromBody]RegistrationRequest model)
        {
            AppUser userIdentity = this.mapper.Map<AppUser>(model);

            bool succeeded = await this.accountsService.TryRegisterUserAsync(userIdentity, model.Password);

            if (!succeeded)
            {
                return this.BadRequest("Registration failed. Please try again later.");
            }

            return this.Ok("Account created");
        }
    }
}

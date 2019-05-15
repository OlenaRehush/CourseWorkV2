using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Api.Requests;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
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
            var userIdentity = this.mapper.Map<AppUser>(model);

            var succeeded = await this.accountsService.TryRegisterUserAsync(userIdentity, model.Password);

            if (!succeeded)
            {
                this.ModelState.TryAddModelError("registration_failure", "Registration failed. Please try again later.");
                return this.BadRequest(this.ModelState);
            }

            return this.Ok();
        }
    }
}

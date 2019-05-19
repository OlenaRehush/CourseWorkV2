using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Api.Requests;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await this.usersService.GetAll();

            return this.Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var user = await this.usersService.GetById(id);

            return this.Ok(user);
        }
        
        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdateUserRequest request)
        {
            var user = this.usersService.Update(request.Id, request.FirstName, request.LastName);

            return this.Ok(user);
        }
    }
}

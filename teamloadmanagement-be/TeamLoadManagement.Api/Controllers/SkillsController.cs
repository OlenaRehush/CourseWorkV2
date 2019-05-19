using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Api.Requests;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class SkillsController : Controller
    {
        private readonly ISkillsService skillsService;

        public SkillsController(ISkillsService skillsService)
        {
            this.skillsService = skillsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var skills = await this.skillsService.GetAll();

            return this.Ok(skills);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var skill = await this.skillsService.GetById(id);

            return this.Ok(skill);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateSkillRequest request)
        {
            var skill = await this.skillsService.Create(request.Description, request.Title);

            return this.StatusCode(StatusCodes.Status201Created, skill);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateSkillsRequest request)
        {
            var skill = await this.skillsService.Update(request.Id, request.Description, request.Title);

            return this.Ok(skill);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await this.skillsService.Delete(id);

            return this.NoContent();
        }
    }
}

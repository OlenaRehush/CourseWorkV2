using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Services.Abstractions;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Api.Controllers
{
    [Route("api/[controller]/[action]")]
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
        public async Task<IActionResult> Create(Skill userSkill)
        {
            var skill = await this.skillsService.Create(userSkill);

            return this.StatusCode(StatusCodes.Status201Created, skill);
        }

        [HttpPut]
        public async Task<IActionResult> Update(Skill userSkill)
        {
            var skill = await this.skillsService.Update(userSkill);

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

using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    }
}

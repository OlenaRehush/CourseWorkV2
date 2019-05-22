using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Api.Requests;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly ITasksService tasksService;

        public TasksController(ITasksService tasksService)
        {
            this.tasksService = tasksService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tasks = await this.tasksService.GetAll();

            return this.Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var task = await this.tasksService.GetById(id);

            return this.Ok(task);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateTaskRequest request)
        {
             await this.tasksService.Create(
                request.Description,
                request.Title,
                request.Estimate,
                request.UserId);

            return this.StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdateTaskRequest request)
        {
            await this.tasksService.Update(
                request.Id,
                request.Description,
                request.Title,
                request.Estimate,
                request.Status,
                request.UserId);

            return this.NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await this.tasksService.Delete(id);

            return this.NoContent();
        }

        [HttpPut("{id}/logtime")]
        public async Task<IActionResult> LogTime(int id, [FromBody] double time)
        {
            await this.tasksService.LogTime(id, time);

            return this.NoContent();
        }
    }
}

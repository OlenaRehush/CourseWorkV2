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
    public class EpicsController : Controller
    {
        private readonly IEpicsService epicsService;

        public EpicsController(IEpicsService epicsService)
        {
            this.epicsService = epicsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var epics = await this.epicsService.GetAll();

            return this.Ok(epics);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var epic = await this.epicsService.GetById(id);

            return this.Ok(epic);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateEpicRequest request)
        {
            await this.epicsService.Create(request.Name, request.Description, request.Deadline, request.TaskIds);

            return this.StatusCode((int)HttpStatusCode.Created);
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateEpicRequest request)
        {
            await this.epicsService.Update(request.Id, request.Name, request.Description, request.Deadline,
                request.TaskIds);

            return this.NoContent();
        }
    }
}

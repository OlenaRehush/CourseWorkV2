using System.Threading.Tasks;
using CourseWork.Dto;
using CourseWork.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly IDashboardService dashboardService;

        public DashboardController(IDashboardService dashboardService)
        {
            this.dashboardService = dashboardService;
        }

        [HttpGet]
        public async Task<IActionResult> Home()
        {
            CustomerDto customer = await this.dashboardService.GetData();

            if (customer == null)
            {
                return this.NotFound();
            }

            return this.Ok(customer);
        }
    }
}

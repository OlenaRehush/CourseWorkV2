using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Api.Controllers
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
            var user = await this.dashboardService.GetData();

            if (user == null)
            {
                return this.NotFound();
            }

            return this.Ok(user);
        }
    }
}

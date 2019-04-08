using System.Security.Claims;
using System.Threading.Tasks;
using CourseWork.DataAccess;
using CourseWork.DataAccess.Entities;
using CourseWork.Dto;
using CourseWork.Services.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace CourseWork.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly ClaimsPrincipal claimsPrincipal;
        private readonly ApplicationDbContext appDbContext;
        private readonly IMapper mapper;

        public DashboardService(
            ApplicationDbContext appDbContext,
            IHttpContextAccessor httpContextAccessor,
            IMapper mapper)
        {
            this.appDbContext = appDbContext;
            this.claimsPrincipal = httpContextAccessor.HttpContext.User;
            this.mapper = mapper;
        }

        public async Task<CustomerDto> GetData()
        {
            string userId = this.claimsPrincipal.FindFirstValue("id");
            Customer customer = await this.appDbContext.Customers.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == userId);
            CustomerDto customerDto = this.mapper.Map<CustomerDto>(customer);

            return customerDto;
        }
    }
}

using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Dto;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
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

        public async Task<UserDto> GetData()
        {
            string userId = this.claimsPrincipal.FindFirstValue("id");
            UserEntity user = await this.appDbContext.Users.SingleAsync(c => c.Id == userId);
            UserDto userDto = this.mapper.Map<UserDto>(user);

            return userDto;
        }
    }
}

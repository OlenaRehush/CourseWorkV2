using System.Threading.Tasks;
using TeamLoadManagement.Dto;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IDashboardService
    {
        Task<UserDto> GetData();
    }
}

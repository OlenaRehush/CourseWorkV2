using System.Threading.Tasks;
using CourseWork.Dto;

namespace CourseWork.Services.Abstractions
{
    public interface IDashboardService
    {
        Task<CustomerDto> GetData();
    }
}

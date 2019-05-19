using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.Dto;
using TaskStatus = TeamLoadManagement.Dto.TaskStatus;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ITasksService
    {
        Task<IEnumerable<TaskDto>> GetAll();

        Task<TaskDto> GetById(int id);

        Task Create(string description, string title, double estimate, string userId);

        Task Update(int id, string description, string title, double estimate, TaskStatus status, string userId);

        Task Delete(int id);

        Task LogTime(int id, double time);
    }
}

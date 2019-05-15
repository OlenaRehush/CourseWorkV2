using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ITasksService
    {
        Task<IEnumerable<UserTask>> GetAll();

        Task<UserTask> GetById(int id);

        Task<UserTask> Create(UserTask task);

        Task<UserTask> Update(UserTask task);

        Task Delete(int id);
    }
}

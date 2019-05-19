using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ITasksService
    {
        Task<IEnumerable<TaskEntity>> GetAll();

        Task<TaskEntity> GetById(int id);

        Task<TaskEntity> Create(string description, string title, TimeSpan estimate, string status);

        Task<TaskEntity> Update(int id, string description, string title, TimeSpan estimate, string status);

        Task Delete(int id);
    }
}

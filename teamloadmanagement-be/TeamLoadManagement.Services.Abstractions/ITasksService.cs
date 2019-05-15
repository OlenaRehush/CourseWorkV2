using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ITasksService
    {
        Task<IEnumerable<UserTask>> GetAll();

        Task<UserTask> GetById(int id);

        Task<UserTask> Create(string description, string title, TimeSpan estimate, string status);

        Task<UserTask> Update(int id, string description, string title, TimeSpan estimate, string status);

        Task Delete(int id);
    }
}

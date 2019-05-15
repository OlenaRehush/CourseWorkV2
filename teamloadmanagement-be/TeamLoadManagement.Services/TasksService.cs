using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
{
    public class TasksService : ITasksService
    {
        private readonly ApplicationDbContext dbContext;

        public TasksService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<UserTask> Create(UserTask task)
        {
            this.dbContext.UserTasks.Add(task);

            await this.dbContext.SaveChangesAsync();

            return task;
        }

        public async Task Delete(int id)
        {
            var task = await this.dbContext.UserTasks.FirstOrDefaultAsync(x => x.Id == id);

            this.dbContext.Remove(task);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<UserTask>> GetAll()
        {
            var tasks = await this.dbContext.UserTasks.AsNoTracking().ToListAsync();

            return tasks;
        }

        public async Task<UserTask> GetById(int id)
        {
            var task = await this.dbContext.UserTasks.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return task;
        }

        public async Task<UserTask> Update(UserTask task)
        {
            this.dbContext.UserTasks.Update(task);

            await this.dbContext.SaveChangesAsync();

            return task;
        }
    }
}

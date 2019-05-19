using System;
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

        public async Task<TaskEntity> Create(string description, string title, TimeSpan estimate, string status, string userId)
        {
            var task = new TaskEntity
            {
                Description = description,
                Title = title,
                Estimate = estimate,
                Status = status,
                UserId = userId
            };

            this.dbContext.Tasks.Add(task);

            await this.dbContext.SaveChangesAsync();

            return task;
        }

        public async Task Delete(int id)
        {
            var task = await this.dbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

            this.dbContext.Remove(task);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<TaskEntity>> GetAll()
        {
            var tasks = await this.dbContext.Tasks.AsNoTracking().ToListAsync();

            return tasks;
        }

        public async Task<TaskEntity> GetById(int id)
        {
            var task = await this.dbContext.Tasks.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return task;
        }

        public async Task<TaskEntity> Update(int id, string description, string title, TimeSpan estimate, string status, string userId)
        {
            var task = await this.dbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

            task.Description = description;
            task.Title = title;
            task.Estimate = estimate;
            task.Status = status;
            task.UserId = userId;

            this.dbContext.Tasks.Update(task);

            await this.dbContext.SaveChangesAsync();

            return task;
        }
    }
}

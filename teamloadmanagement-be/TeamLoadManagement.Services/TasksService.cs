using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Dto;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
{
    public class TasksService : ITasksService
    {
        private readonly ApplicationDbContext dbContext;

        private readonly Expression<Func<TaskEntity, TaskDto>> expression = x => new TaskDto
        {
            Title = x.Title,
            Description = x.Description,
            Remaining = x.Remaining,
            Status = x.Status,
            Estimate = x.Estimate,
            Id = x.Id,
            UserName = x.User.FirstName + " " + x.User.LastName
        };

        public TasksService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task Create(string description, string title, double estimate, string status, string userId)
        {
            var task = new TaskEntity
            {
                Description = description,
                Title = title,
                Estimate = estimate,
                Remaining = estimate,
                Status = status,
                UserId = userId
            };

            this.dbContext.Tasks.Add(task);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var task = await this.dbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

            this.dbContext.Remove(task);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<TaskDto>> GetAll()
        {
            return await this.dbContext.Tasks
                .AsNoTracking()
                .Select(this.expression)
                .ToListAsync();
        }

        public async Task<TaskDto> GetById(int id)
        {
            return await this.dbContext.Tasks
                .AsNoTracking()
                .Select(this.expression)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task Update(int id, string description, string title, double estimate, string status, string userId)
        {
            var task = await this.dbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);

            task.Description = description;
            task.Title = title;
            task.Estimate = estimate;
            task.Status = status;
            task.UserId = userId;

            this.dbContext.Tasks.Update(task);

            await this.dbContext.SaveChangesAsync();
        }
    }
}

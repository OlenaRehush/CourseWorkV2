using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
{
    public class EpicsService : IEpicsService
    {
        private readonly ApplicationDbContext dbContext;

        public EpicsService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<EpicEntity>> GetAll()
        {
            return await this.dbContext.Epics.AsNoTracking().ToListAsync();
        }

        public async Task<EpicEntity> GetById(int id)
        {
            return await this.dbContext.Epics.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task Create(string name, string description, DateTime deadline, List<int> taskIds)
        {
            var epic = new EpicEntity
            {
                Deadline = deadline,
                Description = description,
                Name = name
            };

            taskIds.ForEach(x => epic.Tasks.Add(new TaskEntity { Id = x }));

            this.dbContext.Epics.Add(epic);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task Update(int id, string name, string description, DateTime deadline, List<int> taskIds)
        {
            var epic = await this.dbContext.Epics.FirstOrDefaultAsync(x => x.Id == id);

            epic.Deadline = deadline;
            epic.Description = description;
            epic.Name = name;
            epic.Tasks.Clear();
            taskIds.ForEach(x => epic.Tasks.Add(new TaskEntity { Id = x }));

            this.dbContext.Epics.Update(epic);

            await this.dbContext.SaveChangesAsync();
        }
    }
}

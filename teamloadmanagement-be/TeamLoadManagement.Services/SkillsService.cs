using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
{
    public class SkillsService : ISkillsService
    {
        private readonly ApplicationDbContext dbContext;

        public SkillsService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Skill> Create(Skill skill)
        {
            this.dbContext.Skills.Add(skill);

            await this.dbContext.SaveChangesAsync();

            return skill;
        }

        public async Task Delete(int id)
        {
            var skill = await this.dbContext.Skills.FirstOrDefaultAsync(x => x.Id == id);

            this.dbContext.Skills.Remove(skill);

            await this.dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Skill>> GetAll()
        {
            var skills = await this.dbContext.Skills.AsNoTracking().ToListAsync();

            return skills;
        }

        public async Task<Skill> GetById(int id)
        {
            var skill = await this.dbContext.Skills.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return skill;
        }

        public async Task<Skill> Update(Skill skill)
        {
            this.dbContext.Skills.Update(skill);

            await this.dbContext.SaveChangesAsync();

            return skill;
        }
    }
}

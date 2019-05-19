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

        public async Task<IEnumerable<SkillEntity>> GetAll()
        {
            var skills = await this.dbContext.Skills.AsNoTracking().ToListAsync();

            return skills;
        }
    }
}

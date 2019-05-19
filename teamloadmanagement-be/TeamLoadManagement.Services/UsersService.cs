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
    public class UsersService : IUsersService
    {
        private readonly ApplicationDbContext dbContext;

        private readonly Expression<Func<UserEntity, UserDto>> expression = x => new UserDto
        {
            FirstName = x.FirstName,
            Description = x.Description,
            LastName = x.LastName,
            Id = x.Id,
            Skills = x.UserSkills.Select(s => s.Skill.Title),
            Tasks = x.Tasks.Select(t => new TaskDto
            {
                Title = t.Title,
                Description = t.Description,
                Remaining = t.Remaining,
                Status = t.Status,
                Estimate = t.Estimate,
                Id = t.Id,
                UserName = t.User.FirstName + " " + t.User.LastName
            })
        };

        public UsersService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<UserDto>> GetAll()
        {
            return await this.dbContext.Users.Select(this.expression).AsNoTracking().ToListAsync();
        }

        public async Task<UserDto> GetById(string id)
        {
            return await this.dbContext.Users.Select(this.expression).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task Update(string id, string firstName, string lastName, string description, List<string> skills)
        {
            skills = skills.Where(x => !string.IsNullOrWhiteSpace(x)).Distinct().ToList();
            var user = await this.dbContext.Users
                .Include(x => x.UserSkills)
                .ThenInclude(x => x.Skill)
                .FirstOrDefaultAsync(x => x.Id == id);

            user.FirstName = firstName;
            user.LastName = lastName;
            user.Description = description;
            if (skills.Any())
            {
                var userSkills = new List<UserSkillEntity>();

                user.UserSkills.Clear();

                var existingSkills = await this.dbContext.Skills
                    .AsNoTracking()
                    .Where(x => skills.Contains(x.Title))
                    .Select(x => new { x.Title, x.Id }).ToDictionaryAsync(x => x.Title);

                foreach (var skill in skills)
                {
                    var skillId = existingSkills.ContainsKey(skill) ? existingSkills[skill].Id : 0;
                    userSkills.Add(new UserSkillEntity
                    {
                        SkillId = skillId,
                        UserId = user.Id,
                        Skill = new SkillEntity { Title = skill, Id = skillId }
                    });
                }

                user.UserSkills = userSkills;
            }

            this.dbContext.Users.Update(user);

            await this.dbContext.SaveChangesAsync();
        }
    }
}

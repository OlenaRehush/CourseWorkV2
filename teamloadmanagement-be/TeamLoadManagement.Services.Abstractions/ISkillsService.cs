using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ISkillsService
    {
        Task<IEnumerable<Skill>> GetAll();

        Task<Skill> GetById(int id);

        Task<Skill> Create(Skill skill);

        Task<Skill> Update(Skill skill);

        Task Delete(int id);
    }
}

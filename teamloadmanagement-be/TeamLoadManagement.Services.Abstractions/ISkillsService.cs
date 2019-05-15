using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ISkillsService
    {
        Task<IEnumerable<Skill>> GetAll();

        Task<Skill> GetById(int id);

        Task<Skill> Create(string description, string title);

        Task<Skill> Update(int id, string description, string title);

        Task Delete(int id);
    }
}

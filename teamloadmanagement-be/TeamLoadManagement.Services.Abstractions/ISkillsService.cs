using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ISkillsService
    {
        Task<IEnumerable<SkillEntity>> GetAll();

        Task<SkillEntity> GetById(int id);

        Task<SkillEntity> Create(string description, string title);

        Task<SkillEntity> Update(int id, string description, string title);

        Task Delete(int id);
    }
}

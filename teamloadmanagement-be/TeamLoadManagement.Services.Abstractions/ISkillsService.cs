using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface ISkillsService
    {
        Task<IEnumerable<SkillEntity>> GetAll();
    }
}

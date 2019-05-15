using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IUsersService
    {
        Task<IEnumerable<AppUser>> GetAll();

        Task<AppUser> GetById(string id);

        Task<AppUser> Update(string id, string firstName, string lastName);
    }
}

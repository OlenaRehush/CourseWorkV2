using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IUsersService
    {
        Task<IEnumerable<UserEntity>> GetAll();

        Task<UserEntity> GetById(string id);

        Task<UserEntity> Update(string id, string firstName, string lastName);
    }
}

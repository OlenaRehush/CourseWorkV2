using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.Dto;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IUsersService
    {
        Task<IEnumerable<UserDto>> GetAll();

        Task<UserDto> GetById(string id);

        Task Update(string id, string firstName, string lastName, string description, List<string> skills);
    }
}

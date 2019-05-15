using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IUsersService
    {
        Task<IEnumerable<Customer>> GetAll();

        Task<Customer> GetById(int id);

        Task<Customer> Update(Customer customer);
    }
}

using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IAccountsService
    {
        Task<bool> TryRegisterUserAsync(UserEntity userIdentity, string password);
    }
}

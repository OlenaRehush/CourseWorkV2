using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IAccountsService
    {
        Task<bool> TryRegisterUserAsync(AppUser userIdentity, string password);
    }
}

using System.Threading.Tasks;
using CourseWork.DataAccess.Entities;

namespace CourseWork.Services.Abstractions
{
    public interface IAccountsService
    {
        Task<bool> TryRegisterUserAsync(AppUser userIdentity, string password);
    }
}

using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using CourseWork.DataAccess.Entities;

namespace CourseWork.Services.Abstractions
{
    public interface IAccountsService
    {
        Task<IdentityResult> RegisterUserAsync(AppUser userIdentity, string password);
    }
}

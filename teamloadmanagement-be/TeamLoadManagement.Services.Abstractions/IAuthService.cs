using System.Threading.Tasks;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IAuthService
    {
        Task<string> LoginAsync(string userName, string password);
    }
}

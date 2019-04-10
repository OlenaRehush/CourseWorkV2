using System.Threading.Tasks;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IExternalAuthService
    {
        Task<string> ExternalLoginOrRegister(string accessToken);
    }
}

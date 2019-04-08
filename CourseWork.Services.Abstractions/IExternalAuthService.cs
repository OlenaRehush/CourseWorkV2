using System.Threading.Tasks;

namespace CourseWork.Services.Abstractions
{
    public interface IExternalAuthService
    {
        Task<string> ExternalLoginOrRegister(string accessToken);
    }
}

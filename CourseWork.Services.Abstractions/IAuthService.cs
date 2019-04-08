using System.Threading.Tasks;

namespace CourseWork.Services.Abstractions
{
    public interface IAuthService
    {
        Task<string> LoginAsync(string userName, string password);
    }
}

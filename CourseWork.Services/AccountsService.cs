using System.Threading.Tasks;
using CourseWork.DataAccess;
using CourseWork.DataAccess.Entities;
using CourseWork.Services.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace CourseWork.Services
{
    public class AccountsService : IAccountsService
    {
        private readonly ApplicationDbContext appDbContext;
        private readonly UserManager<AppUser> userManager;

        public AccountsService(ApplicationDbContext appDbContext, UserManager<AppUser> userManager)
        {
            this.appDbContext = appDbContext;
            this.userManager = userManager;
        }

        public async Task<IdentityResult> RegisterUserAsync(AppUser userIdentity, string password)
        {
            IdentityResult result = await this.userManager.CreateAsync(userIdentity, password);

            if (result.Succeeded)
            {
                await this.appDbContext.Customers.AddAsync(new Customer { IdentityId = userIdentity.Id });
                await this.appDbContext.SaveChangesAsync();
            }

            return result;
        }
    }
}

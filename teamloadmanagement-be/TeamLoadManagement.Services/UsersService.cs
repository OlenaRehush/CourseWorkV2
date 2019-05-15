using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services
{
    public class UsersService : IUsersService
    {
        private readonly ApplicationDbContext dbContext;

        public UsersService(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<AppUser>> GetAll()
        {
            var users = await this.dbContext.Users.AsNoTracking().ToListAsync();

            return users;
        }

        public async Task<AppUser> GetById(string id)
        {
            var user = await this.dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return user;
        }

        public async Task<AppUser> Update(AppUser customer)
        {
            this.dbContext.Users.Update(customer);

            await this.dbContext.SaveChangesAsync();

            return customer;
        }
    }
}

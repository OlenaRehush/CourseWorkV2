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

        public async Task<IEnumerable<UserEntity>> GetAll()
        {
            var users = await this.dbContext.Users.AsNoTracking().ToListAsync();

            return users;
        }

        public async Task<UserEntity> GetById(string id)
        {
            var user = await this.dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return user;
        }

        public async Task<UserEntity> Update(string id, string firstName, string lastName)
        {
            var user = await this.dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            user.FirstName = firstName;
            user.LastName = lastName;
            this.dbContext.Users.Update(user);

            await this.dbContext.SaveChangesAsync();

            return user;
        }
    }
}

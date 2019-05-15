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

        public async Task<IEnumerable<Customer>> GetAll()
        {
            var users = await this.dbContext.Customers.Include(x => x.Identity).AsNoTracking().ToListAsync();

            return users;
        }

        public async Task<Customer> GetById(int id)
        {
            var user = await this.dbContext.Customers.Include(x => x.Identity).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

            return user;
        }

        public async Task<Customer> Update(Customer customer)
        {
            this.dbContext.Customers.Update(customer);

            await this.dbContext.SaveChangesAsync();

            return customer;
        }
    }
}

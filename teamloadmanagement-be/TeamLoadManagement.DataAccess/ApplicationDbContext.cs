using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Skill> Skills { get; set; }

        public DbSet<UserTask> UserTasks { get; set; }
    }
}

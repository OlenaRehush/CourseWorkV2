using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess
{
    public class ApplicationDbContext : IdentityDbContext<UserEntity>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<SkillEntity> Skills { get; set; }

        public DbSet<TaskEntity> Tasks { get; set; }

        public DbSet<UserSkillEntity> UserSkills { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);

            base.OnModelCreating(builder);
        }
    }
}

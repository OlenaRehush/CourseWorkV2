using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess.Mappings
{
    public class UserMapping : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasMany(x => x.UserSkills)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId);

            builder.HasMany(x => x.Tasks)
                .WithOne(x => x.User)
                .HasForeignKey(x => x.UserId);
        }
    }
}

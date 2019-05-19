using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess.Mappings
{
    public class UserSkillMapping : IEntityTypeConfiguration<UserSkillEntity>
    {
        public void Configure(EntityTypeBuilder<UserSkillEntity> builder)
        {
            builder.HasKey(x => new { x.UserId, x.SkillId });

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserSkills)
                .HasForeignKey(x => x.UserId);

            builder.HasOne(x => x.Skill)
                .WithMany(x => x.UserSkills)
                .HasForeignKey(x => x.SkillId);
        }
    }
}

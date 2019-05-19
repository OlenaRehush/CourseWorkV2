using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess.Mappings
{
    public class SkillMapping : IEntityTypeConfiguration<SkillEntity>
    {
        public void Configure(EntityTypeBuilder<SkillEntity> builder)
        {
            builder.HasMany(x => x.UserSkills)
                .WithOne(x => x.Skill)
                .HasForeignKey(x => x.SkillId);
        }
    }
}

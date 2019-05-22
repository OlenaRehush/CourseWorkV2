using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.DataAccess.Mappings
{
    public class EpicMapping : IEntityTypeConfiguration<EpicEntity>
    {
        public void Configure(EntityTypeBuilder<EpicEntity> builder)
        {
            builder.HasMany(x => x.Tasks)
                .WithOne(x => x.Epic)
                .HasForeignKey(x => x.EpicId);
        }
    }
}

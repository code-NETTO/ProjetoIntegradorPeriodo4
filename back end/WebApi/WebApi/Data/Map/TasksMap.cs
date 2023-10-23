using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApi.Models;

namespace WebApi.Data.Map
{
    public class TasksMap : IEntityTypeConfiguration<Tasks>
    {
        public void Configure(EntityTypeBuilder<Tasks> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Status).IsRequired().HasMaxLength(255);
            builder.Property(x => x.taskDay).IsRequired();
            builder.Property(x => x.taskBeggin).IsRequired();
            builder.Property(x => x.taskEnd).IsRequired();
            builder.Property(x => x.Priority).IsRequired();
            builder.Property(x => x.Category).IsRequired();
            builder.Property(x => x.UserId).IsRequired();

        }

    }
}

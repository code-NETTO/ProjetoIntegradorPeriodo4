using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data

{
    public class TaskDBContext : DbContext
    {
        public TaskDBContext(DbContextOptions<TaskDBContext> options)
            : base(options)
        {
            
        }

        public DbSet<Tasks> Tasks { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

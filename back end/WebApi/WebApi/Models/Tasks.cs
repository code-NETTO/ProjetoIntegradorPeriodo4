namespace WebApi.Models
{
    public class Tasks
    {
        public int  Id { get; set; }

        public int UserId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Priority { get; set; }

        public string Category { get; set; }

        public DateTime taskDay { get; set; }

        public DateTime taskBeggin { get; set; }

        public DateTime taskEnd { get; set; }

        public TaskStatus Status { get; set; }


    }
}

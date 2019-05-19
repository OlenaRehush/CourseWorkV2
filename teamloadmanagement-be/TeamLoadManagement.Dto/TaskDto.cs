namespace TeamLoadManagement.Dto
{
    public class TaskDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double Estimate { get; set; }

        public double Remaining { get; set; }

        // replace with enum 
        public string Status { get; set; }

        public string UserName { get; set; }
    }
}

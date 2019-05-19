namespace TeamLoadManagement.Api.Requests
{
    public class CreateTaskRequest
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public double Estimate { get; set; }

        // replace with enum 
        public string Status { get; set; }

        public string UserId { get; set; }
    }
}

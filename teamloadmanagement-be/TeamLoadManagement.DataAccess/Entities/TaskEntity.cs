using System;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class TaskEntity
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public TimeSpan Estimate { get; set; }

        // replace with enum 
        public string Status { get; set; }

        public UserEntity User { get; set; }
    }
}

using System;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class UserTask
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public TimeSpan Estimate { get; set; }

        // replace with enum 
        public string Status { get; set; }

        // public IEnumerable<Customer> Customers { get; set; }
    }
}

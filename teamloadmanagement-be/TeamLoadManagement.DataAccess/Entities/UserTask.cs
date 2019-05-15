using System;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class UserTask
    {
        public int Id { get; set; }

        public TimeSpan Estimate { get; set; }

        // public IEnumerable<Customer> Customers { get; set; }
    }
}

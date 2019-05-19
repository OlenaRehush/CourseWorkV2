using System.Collections.Generic;

namespace TeamLoadManagement.Api.Requests
{
    public class UpdateUserRequest
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }

        public List<string> Skills { get; set; }
    }
}

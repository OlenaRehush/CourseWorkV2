using System;
using System.Collections.Generic;

namespace TeamLoadManagement.Api.Requests
{
    public class UpdateEpicRequest
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Deadline { get; set; }

        public List<int> TaskIds { get; set; }
    }
}

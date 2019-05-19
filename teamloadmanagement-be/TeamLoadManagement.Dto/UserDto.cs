using System.Collections.Generic;

namespace TeamLoadManagement.Dto
{
    public class UserDto
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }

        public IEnumerable<string> Skills { get; set; }

        public IEnumerable<TaskDto> Tasks { get; set; }
    }
}

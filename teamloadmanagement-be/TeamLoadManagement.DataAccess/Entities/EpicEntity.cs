using System;
using System.Collections.Generic;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class EpicEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Deadline { get; set; }

        public ICollection<TaskEntity> Tasks { get; set; }
    }
}

using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class UserEntity : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public long? FacebookId { get; set; }

        public string Description { get; set; }

        public string PictureUrl { get; set; }

        public IEnumerable<TaskEntity> Tasks { get; set; }

        public IEnumerable<UserSkillEntity> UserSkills { get; set; }
    }
}

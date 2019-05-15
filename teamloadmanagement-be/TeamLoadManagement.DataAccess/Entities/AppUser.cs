using Microsoft.AspNetCore.Identity;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public long? FacebookId { get; set; }

        public string PictureUrl { get; set; }

        // public IEnumerable<UserTask> Tasks { get; set; }

        // public IEnumerable<Skill> Skills { get; set; }
    }
}

using System.Collections.Generic;

namespace TeamLoadManagement.DataAccess.Entities
{
    public class SkillEntity
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public IEnumerable<UserSkillEntity> UserSkills { get; set; }
    }
}

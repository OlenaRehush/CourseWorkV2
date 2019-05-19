namespace TeamLoadManagement.DataAccess.Entities
{
    public class UserSkillEntity
    {
        public string UserId { get; set; }

        public int SkillId { get; set; }

        public UserEntity User { get; set; }

        public SkillEntity Skill { get; set; }
    }
}

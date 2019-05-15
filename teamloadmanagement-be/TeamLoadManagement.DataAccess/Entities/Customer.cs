namespace TeamLoadManagement.DataAccess.Entities
{
    public class Customer
    {
        public int Id { get; set; }

        public string IdentityId { get; set; }

        public string Locale { get; set; }

        public string Gender { get; set; }

        public AppUser Identity { get; set; }

        // public IEnumerable<UserTask> Tasks { get; set; }
           
        // public IEnumerable<Skill> Skills { get; set; }
    }
}

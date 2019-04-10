namespace TeamLoadManagement.DataAccess.Entities
{
    public class Customer
    {
        public int Id { get; set; }

        public string IdentityId { get; set; }

        public string Locale { get; set; }

        public string Gender { get; set; }

        public AppUser Identity { get; set; }
    }
}

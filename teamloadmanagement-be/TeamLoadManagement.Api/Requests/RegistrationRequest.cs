namespace TeamLoadManagement.Api.Requests
{
    public class RegistrationRequest
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Description { get; set; }
    }
}

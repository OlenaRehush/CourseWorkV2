using FluentValidation.Attributes;
using TeamLoadManagement.Api.Requests.Validations;

namespace TeamLoadManagement.Api.Requests
{
    [Validator(typeof(CredentialsRequestValidator))]
    public class CredentialsRequest
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}

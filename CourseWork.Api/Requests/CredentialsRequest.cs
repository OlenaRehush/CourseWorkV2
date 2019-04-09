using CourseWork.Api.Requests.Validations;
using FluentValidation.Attributes;

namespace CourseWork.Api.Requests
{
    [Validator(typeof(CredentialsRequestValidator))]
    public class CredentialsRequest
    {
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}

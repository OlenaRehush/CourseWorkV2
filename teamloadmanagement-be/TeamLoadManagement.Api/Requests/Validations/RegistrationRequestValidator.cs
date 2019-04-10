using FluentValidation;

namespace TeamLoadManagement.Api.Requests.Validations
{
    public class RegistrationRequestValidator : AbstractValidator<RegistrationRequest>
    {
        public RegistrationRequestValidator()
        {
            this.RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty");
            this.RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            this.RuleFor(vm => vm.FirstName).NotEmpty().WithMessage("FirstName cannot be empty");
            this.RuleFor(vm => vm.LastName).NotEmpty().WithMessage("LastName cannot be empty");
        }
    }
}

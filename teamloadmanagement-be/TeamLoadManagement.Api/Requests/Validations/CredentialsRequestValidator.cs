using FluentValidation;

namespace TeamLoadManagement.Api.Requests.Validations
{
    public class CredentialsRequestValidator : AbstractValidator<CredentialsRequest>
    {
        public CredentialsRequestValidator()
        {
            this.RuleFor(vm => vm.UserName).NotEmpty().WithMessage("Username cannot be empty");
            this.RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            this.RuleFor(vm => vm.Password).Length(6, 12).WithMessage("Password must be between 6 and 12 characters");
        }
    }
}

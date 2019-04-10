using Autofac;
using TeamLoadManagement.Services.Abstractions;

namespace TeamLoadManagement.Services.Di
{
    public sealed class DependenciesContainer : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<AccountsService>()
                .As<IAccountsService>();

            builder.RegisterType<AuthService>()
                .As<IAuthService>();

            builder.RegisterType<ExternalAuthService>()
                .As<IExternalAuthService>();
            
            builder.RegisterType<DashboardService>()
                .As<IDashboardService>();

            builder.RegisterType<JwtFactory>()
                .As<IJwtFactory>()
                .SingleInstance();
        }
    }
}

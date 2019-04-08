using System;
using System.Linq;
using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyModel;
using Microsoft.AspNetCore.Http;

namespace CourseWork.Api.Extensions
{
    public static class AutofacServiceCollectionExtension
    {
        private const string AutofacModuleAssemblySuffix = ".Di";

        public static IContainer AddAutofacAfter(this IServiceCollection services)
        {
            var builder = new ContainerBuilder();
            builder.Populate(services);

            Assembly[] moduleAssemblies = DependencyContext.Default.GetDefaultAssemblyNames()
                .Where(assembly => assembly.FullName.EndsWith(AutofacModuleAssemblySuffix, StringComparison.InvariantCulture))
                .Select(Assembly.Load)
                .ToArray();

            builder.RegisterAssemblyModules(moduleAssemblies);
            RegisterHttpAccessor(builder);

            IContainer container = builder.Build();

            return container;
        }

        private static void RegisterHttpAccessor(ContainerBuilder builder)
        {
            builder.RegisterType<HttpContextAccessor>()
                .As<IHttpContextAccessor>();
        }
    }
}

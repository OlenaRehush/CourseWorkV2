using AutoMapper;
using TeamLoadManagement.DataAccess.Entities;
using TeamLoadManagement.Dto;

namespace TeamLoadManagement.Api.Requests.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<RegistrationRequest, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

            this.CreateMap<AppUser, UserDto>();
        }
    }
}

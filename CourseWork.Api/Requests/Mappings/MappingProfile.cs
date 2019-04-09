using AutoMapper;
using CourseWork.DataAccess.Entities;
using CourseWork.Dto;

namespace CourseWork.Api.Requests.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<RegistrationRequest, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

            this.CreateMap<Customer, CustomerDto>()
                .ForMember(x => x.FirstName, opt => opt.MapFrom(x => x.Identity.FirstName))
                .ForMember(x => x.LastName, opt => opt.MapFrom(x => x.Identity.LastName))
                .ForMember(x => x.PictureUrl, opt => opt.MapFrom(x => x.Identity.PictureUrl))
                .ForMember(x => x.FacebookId, opt => opt.MapFrom(x => x.Identity.FacebookId));
        }
    }
}

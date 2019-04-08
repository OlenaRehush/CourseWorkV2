using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;

namespace CourseWork.Mapping.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            this.CreateMap<RegistrationViewModel, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}

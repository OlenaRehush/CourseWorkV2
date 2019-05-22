using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeamLoadManagement.DataAccess.Entities;

namespace TeamLoadManagement.Services.Abstractions
{
    public interface IEpicsService
    {
        Task<IEnumerable<EpicEntity>> GetAll();

        Task<EpicEntity> GetById(int id);

        Task Create(string name, string description, DateTime deadline, List<int> taskIds);

        Task Update(int id, string name, string description, DateTime deadline, List<int> taskIds);
    }
}

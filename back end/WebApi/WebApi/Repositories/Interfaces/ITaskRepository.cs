using WebApi.Models;

namespace WebApi.Repositories.Interfaces
{
    public interface ItaskRepository
    {
        Task<List<Tasks>> GetAllTasks();
        Task<Tasks> GetById(int Id);
        Task<Tasks> AddTask(Tasks Tasks);
        Task<Tasks> UpdateTask(Tasks Tasks, int id);
        Task<bool> DeleteTask(int Id);
    }
}

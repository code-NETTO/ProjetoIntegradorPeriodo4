using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;
using WebApi.Repositories.Interfaces;

namespace WebApi.Repositories;

    public class TaskRepository : ItaskRepository
    {
        private readonly TaskDBContext _dbContext;  

        public TaskRepository(TaskDBContext taskDBContext)
        {
            _dbContext = taskDBContext;
        }


        public async Task<Tasks> GetById(int Id)
        {
            return await _dbContext.Tasks.FirstOrDefaultAsync(x => x.Id == Id);
        }


        public async Task<Tasks> AddTask(Tasks Tasks)
        {
           await _dbContext.Tasks.AddAsync(Tasks);
           await _dbContext.SaveChangesAsync();

            return Tasks;
        }


        public async Task<bool> DeleteTask(int id)
        {
            Tasks TasksById = await GetById(id);

            if (TasksById == null)
            {
                throw new Exception($"Usuario para o Id: {id} não foi encontrado no banco de dados");
            }
            _dbContext.Tasks.Remove(TasksById);
            await _dbContext.SaveChangesAsync();

            return true;
        }


        public async Task<List<Tasks>> GetAllTasks()
        {
            return await _dbContext.Tasks.ToListAsync();
        }


        public async Task<Tasks> UpdateTask(Tasks Tasks, int id)
        {
            Tasks TasksById = await GetById(id);

            if (TasksById == null)
            {
                throw new Exception($"Usuario para o Id: {id} não foi encontrado no banco de dados");
            }
            TasksById.Category = Tasks.Category;
            TasksById.Priority = Tasks.Priority;
            TasksById.Description = Tasks.Description;
            TasksById.Name = Tasks.Name;
            TasksById.taskDay = Tasks.taskDay;
            TasksById.taskBeggin = Tasks.taskBeggin;
            TasksById.taskEnd = Tasks.taskEnd;

            _dbContext.Tasks.Update(TasksById);
            await _dbContext.SaveChangesAsync();

            return TasksById;
        }

    }

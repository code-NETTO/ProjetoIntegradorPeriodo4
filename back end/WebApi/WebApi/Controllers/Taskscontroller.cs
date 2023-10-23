using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Taskscontroller : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Task>> GetAllTasks() {

            return Ok();
        }
    }
}

using System.ComponentModel;

namespace WebApi.Enums
{
    public enum TaskStatus
    {
        [Description("A fazer")]
        ToDo = 1,
        [Description("Em Andamento")]
        Working = 2,
        [Description("Feito")]
        Done = 3
    }
}

import TaskService from "../services/TaskService.js";
import elements from "../scripts/others/elements.js";

export default class Home{
    constructor(){
        this.TaskService = new TaskService();
    }

    loadData(){
        const cards = document.getElementsByClassName("card");

        this.TaskService.getAll().then(tasks =>{
            for (let i = 0; i < cards.length; i++) {                
                const tasksOfCard = tasks.filter((task) => task.TaskDay == "05/11/2023");
                elements.updateTaskList(cards[i],tasksOfCard)
            }
        })
    }
}
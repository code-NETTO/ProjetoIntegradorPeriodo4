import TaskService from "../services/TaskService.js";
import elements from "../scripts/others/elements.js";

export default class Home{


    constructor(){
        this.TaskService = new TaskService();
        this._currentDate = new Date(2023, 10, 1);
        this._cards = elements.getCards();
    }

    _nextDays(){
        this._currentDate = new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), this._currentDate.getDate()+3);
        this._loadDates(this._currentDate);
    }

    _previousDays(){
        this._currentDate = new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), this._currentDate.getDate()-3);
        this._loadDates(this._currentDate);
    }
    
    _inicializeButtons(){
        elements.getPreviousDaysButton().addEventListener("click", () => this._previousDays());
        elements.getNextDaysButton().addEventListener("click", () => this._nextDays());
    }

    _loadDates(date){
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

        elements.getMonth().innerHTML = months[date.getMonth()];

        this._cards[0].querySelector("h4").innerHTML = date.getDate();
        this._cards[1].querySelector("h4").innerHTML = new Date( date.getFullYear(), date.getMonth(), date.getDate()+1).getDate();
        this._cards[2].querySelector("h4").innerHTML = new Date( date.getFullYear(), date.getMonth(), date.getDate()+2).getDate();
    }

    _loadTasks(){
        this.TaskService.getAll().then(tasks =>{
            for (let i = 0; i < this._cards.length; i++) {                
                const tasksOfCard = tasks.filter((task) => task.TaskDay == "05/11/2023");
                elements.updateTaskList( this._cards[i],tasksOfCard)
            }
        })
    }

    start(){
        this._inicializeButtons();
        this._loadDates(this._currentDate);
        this._loadTasks();
    }
}
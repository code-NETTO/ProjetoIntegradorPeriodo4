import { URL} from "../config/config.js";

export default class TaskService {
    constructor (){
        this.URL = URL
    }

    async getAll(params) {
        try{
            const response = await fetch(`${URL}/tarefas/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();
            console.log( result);
            return result;

        }catch (error){
            console.error(error);
        }
    }

    async get(params) {
        try{
        const response = await fetch(`${URL}/tarefas/${params.Id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();
            console.log( result);
            return result;

        }catch (error){
            console.error(error);
        }
    }

    async post(params) {
        try{
            let _data = {
                "UserId": 1,
                "Id": 4,
                "Category": "2",
                "Priority": "1",
                "Status": 0,
                "Name": "Tarefa 4",
                "Descripition": "Tarefa 4",
                "TaskDay": "06/11/2023",
                "taskBeggin": "11.15.00",
                "taskEnd": "13.30.00"
              }
              
              fetch(`${URL}/tarefas/`, {
                method: "POST",
                body: JSON.stringify(_data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json()) 
              .then(json => console.log(json))
              .catch(err => console.log(err));              

        }catch (error){
            console.error(error);
        }
    }

    async put(params) {
        try{
            let _data = {
                "UserId": 1,
                "Id": 4,
                "Category": "2",
                "Priority": "1",
                "Status": 0,
                "Name": "Tarefa 5",
                "Descripition": "Tarefa 5",
                "TaskDay": "06/11/2023",
                "taskBeggin": "11.15.00",
                "taskEnd": "13.30.00"
              }
              
              fetch(`${URL}/tarefas/`, {
                method: "PUT",
                body: JSON.stringify(_data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              .then(response => response.json()) 
              .then(json => console.log(json))
              .catch(err => console.log(err));              

        }catch (error){
            console.error(error);
        }
    }
}
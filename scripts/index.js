const dadosTeste = [
    [
        {
            "nome": "Comprar leite",
            "assunto": "Leite",
            "categoria": "pessoal",
            "prioridade": 2,
            "tempoInicio": "14:00",
            "tempoFim": "14:30",
            "notaAdicional": "",
            "status": ""
        },
        {
            "nome": "Comprar pão",
            "assunto": "Pão",
            "categoria": "pessoal",
            "prioridade": 2,
            "tempoInicio": "08:00",
            "tempoFim": "08:15",
            "notaAdicional": "Pão doce",
            "status": ""
        },
        {
            "nome": "Estudar para prova",
            "assunto": "Estudar",
            "categoria": "academico",
            "prioridade": 1,
            "tempoInicio": "09:00",
            "tempoFim": "11:00",
            "notaAdicional": "Estudar funções",
            "status": ""
        },
    ],

    [        
        {
            "nome": "CCCC",
            "assunto": "CCCC",
            "categoria": "trabalho",
            "prioridade": 1,
            "tempoInicio": "09:00",
            "tempoFim": "11:00",
            "notaAdicional": "Estudar funções",
            "status": ""
        },
        {
            "nome": "BBBB",
            "assunto": "BBBB",
            "categoria": "academico",
            "prioridade": 1,
            "tempoInicio": "09:00",
            "tempoFim": "11:00",
            "notaAdicional": "Estudar funções",
            "status": ""
        },
        {
            "nome": "AAAAAA",
            "assunto": "AAAAA",
            "categoria": "academico",
            "prioridade": 1,
            "tempoInicio": "09:00",
            "tempoFim": "11:00",
            "notaAdicional": "Estudar funções",
            "status": ""
        }
    ]
    
]

const tablesData = document.getElementsByTagName("td");
const tableDays = document.getElementById("days");

const btnWeekLeft = document.getElementsByTagName("button")[3];
const btnWeekRight = document.getElementsByTagName("button")[4];

const Week = {
    date: new Date(),

    curent(){
        date =  new Date();

        return date;
    },

    next(){
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
        
        for(let i = 0; i < 7; i++){
            tablesData[0].parentNode.removeChild(tablesData[0]);
        }

        Week.update();
    },

    last(){
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);
        
        for(let i = 0; i < 7; i++){
            tablesData[0].parentNode.removeChild(tablesData[0]);
        }

        Week.update();
    },

    update(){
        const month = document.getElementById("month");
        const year = document.getElementById("year");
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

        month.innerHTML = months[date.getMonth()];
        year.innerHTML = date.getFullYear();
            
        for(let i= 0; i < 7; i++){ 
            const row = document.createElement("tr");
            tableDays.appendChild(row);
            const data = document.createElement("td");

            let nextDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+i);
            data.innerHTML = nextDate.getDate();
            row.appendChild(data)
        }
    },
};


const btnHoursLeft = document.getElementsByTagName("button")[5];
const btnHoursRight = document.getElementsByTagName("button")[6];
const headersTasks = document.getElementsByTagName("thead")[1];
const tableTasks = document.getElementById("tableTasks");

const TaskList = {
    next(){
        console.log("Próximas tarefas");
    },

    last(){
        console.log("Tarefas anteriores");
    },

    creatTaskHTML(task){
        const subject = document.createElement("p");
        subject.innerHTML= task.assunto;

        const time = document.createElement("p");
        time.innerHTML= task.tempoInicio;
        const content = document.createElement("div");
        content.appendChild(subject);
        content.appendChild(time);

        const icon = document.createElement("div");
        if(task.categoria == "academico"){
            icon.innerHTML = "A";
        }else if(task.categoria == "trabalho"){
            icon.innerHTML = "T";
        }else{
            icon.innerHTML = "P";
        }

        const taskGrup = document.createElement("td");
        taskGrup.appendChild(icon);
        taskGrup.appendChild(content);

        return taskGrup;
    },

    tasksDay(day){
        return dadosTeste[day];
    },

    update(){
        console.log("atualiza tarefas");
        const headers = document.createElement("tr");
        headersTasks.appendChild(headers);

        for(let i = 0; i < dadosTeste.length; i++){
            const row = document.createElement("tr");
            tableTasks.appendChild(row);

            let tasks = this.tasksDay(i);

            for(let j= 0; j < tasks.length; j++){
                const header = document.createElement("th");
                header.innerHTML = "Tarefa " + (j+1).toString();
                headers.appendChild(header);
            

                row.appendChild(this.creatTaskHTML(tasks[j]))
            }
        }
    }
}

Week.update(Week.curent());

btnWeekLeft.addEventListener("click", Week.last);
btnWeekRight.addEventListener("click", Week.next);

TaskList.update();

btnHoursLeft.addEventListener("click", TaskList.last);
btnHoursRight.addEventListener("click", TaskList.next);
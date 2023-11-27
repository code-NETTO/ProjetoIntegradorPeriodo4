function _createTaskHTML(task){
    const subject = document.createElement("p");
    subject.innerHTML= task.Description;
    subject.classList.add("my-0");

    const time = document.createElement("p");
    time.innerHTML= (task.taskBeggin + "h");
    time.classList.add("my-0");

    const content = document.createElement("div");
    content.appendChild(subject);
    content.appendChild(time);
    content.classList.add("align-items-center");

    const icon = document.createElement("i");
    icon.classList.add("fs-4");
    if(task.Category == "1"){
        icon.classList.add("uil", "uil-bag");
    }else if(task.Category == "2"){
        icon.classList.add("uil", "uil-smile");
    }else{
        icon.classList.add("uil", "uil-book-open");
    }

    const taskGrup = document.createElement("li");
    taskGrup.appendChild(icon);
    taskGrup.appendChild(content);
    taskGrup.classList.add("list-group-item", "list-group-item-action", "list-group-item-info", "d-flex", "align-items-center", "p-1");

    return taskGrup;
}

function _clearTaskList(taskList){
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
}

function updateTaskList(card, tasks){
    const taskList = card.querySelector("ul");
    _clearTaskList(taskList);
    for(let i = 0; i < tasks.length; i ++){
        const task = _createTaskHTML(tasks[i]);
        taskList.appendChild(task);
    }
}

function getPreviousDaysButton(){
    return document.getElementById("previousDays");
    
}

function getNextDaysButton(){
    return document.getElementById("nextDays");    
}

function getCards(){
    return document.getElementsByClassName("card");
}

function getCardTitle(card){
    return card.querySelector("h4");
}

function getMonth(){
    return document.getElementById("month");
}

export default{
    updateTaskList,
    getPreviousDaysButton,
    getNextDaysButton,
    getCards,
    getCardTitle,
    getMonth
}
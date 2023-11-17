function createTaskHTML(task){
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

function updateTaskList(card, tasks){
    const taskList = card.querySelector("ul");
    for(let i = 0; i < tasks.length; i ++){
        const task = createTaskHTML(tasks[i]);
        taskList.appendChild(task);
    }
}

export default{
    updateTaskList
}
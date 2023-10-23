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
        console.log("Próxima semana");
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
        
        for(let i = 0; i < 7; i++){
            tablesData[0].parentNode.removeChild(tablesData[0]);
        }

        Week.update();
    },

    last(){
        console.log("Semana anterior");
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
        const finalDay= date.getDate() + 7;

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

const Hours = {
    next(){
        console.log("Próximas horas");
    },

    last(){
        console.log("Horas anteriores");
    }
}

Week.update(Week.curent());

btnWeekLeft.addEventListener("click", Week.last);
btnWeekRight.addEventListener("click", Week.next);

btnHoursLeft.addEventListener("click", Hours.last);
btnHoursRight.addEventListener("click", Hours.next);
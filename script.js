let thirdcounter = document.querySelectorAll('.thirdcounter');
let thirdraid = new Audio("thirdraid.mp3");
let lasttensec = new Audio("lasttensec.m4a");
let time = document.querySelector("#time");
let miniute = document.querySelector(".miniute");
let second = document.querySelector(".second");
let stopTimer = document.querySelector("#stopTimer");
let startTimer = document.querySelector("#startTimer");
let raidTiming = document.querySelector("#raidTiming");
let timerReset = document.querySelector("#timerReset");
let teamOneScore = document.querySelector("#teamOneScore");
let teamTwoScore = document.querySelector("#teamTwoScore");
let teamOneName = document.querySelector("#teamOneName");
let teamTwoName = document.querySelector("#teamTwoName");

let raidtime = 30
let initialScoreTeamOne = 0;
let initialScoreTeamTwo = 0;

teamOneName.addEventListener("click",()=>{
    let teamone = prompt("team first name")
    teamOneName.innerText = teamone
})

teamTwoName.addEventListener("click",()=>{
    let teamtwo = prompt("team second name")
    teamTwoName.innerText = teamtwo
})

function decTeamOne(){
    initialScoreTeamOne--;
    teamOneScore.innerText = initialScoreTeamOne;
}

function incTeamOne(){
    initialScoreTeamOne++;
    teamOneScore.innerText = initialScoreTeamOne;
}

function decTeamTwo(){
    initialScoreTeamTwo--;
    teamTwoScore.innerText = initialScoreTeamTwo;
}

function incTeamTwo(){
    initialScoreTeamTwo++;
    teamTwoScore.innerText = initialScoreTeamTwo;
}


raidTiming.addEventListener("click",()=>{
    lasttensec.play()
    let raidTimerStart = setInterval(()=>{
        raidtime--;
        if(raidtime < 10){
            raidTiming.style.color = "red";            
            lasttensec.play()
        }
        if(raidtime == 0){
            clearInterval(raidTimerStart)
            raidtime = 30;
            raidTiming.style.color = "black";
        }
        raidTiming.innerText = raidtime;

        raidTiming.addEventListener("dblclick",()=>{
           
        })

        timerReset.addEventListener("click",()=>{
            raidtime = 30;
            raidTiming.innerText = "30";
            clearInterval(raidTimerStart)
            
        })

    },1000)
})


let miniutes = Number(prompt("enter match time")) - 1;
let seconds = 59;


thirdcounter.forEach((val) => {
    val.addEventListener("click", () => {
        val.classList.toggle("active")
    })
})

thirdcounter[2].addEventListener("click", () => {
    
    thirdraid.play()
    for (let i = 0; i < 3; i++) {
        thirdcounter[i].classList.remove('active');
    }
})

thirdcounter[5].addEventListener("click", () => {
    
    thirdraid.play()
    for (let i = 3; i < 6; i++) {
        thirdcounter[i].classList.remove('active');
    }
})

startTimer.addEventListener("click",()=>{

    startTimer = setInterval(()=>{
        miniute.innerText = miniutes;
        second.innerText = seconds;
        seconds--;
        if(seconds < 1){
            seconds = 59;
            miniutes--
        }

        if(seconds <10){
            second.innerText = "0" + seconds; 
        }
        if(miniutes <10){
            miniute.innerText = "0" + miniutes;
        }

        if(seconds == 0 && miniutes==0){
            clearInterval(startTimer)
        }
    },1000)
})

stopTimer.addEventListener("click",()=>{
    clearInterval(startTimer)

})

function displaycontent(data){

   console.log(this)
    let content = document.getElementById('content');
    thirdraid.play()
    content.style.display = "block";
    content.innerText = data;
    setTimeout(()=>{
        content.style.display = "none";
    },3000)
}
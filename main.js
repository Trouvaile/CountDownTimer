const time = document.getElementById("clock")
const day = document.getElementById("days")
const hour = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")
var modal = document.getElementById("myModal")

function CalTime() {
    let run = setInterval(function () {  
        let targetTime = new Date(time.value) 
        let currTime = new Date()
        let totalsec = Math.floor((targetTime - currTime) / 1000)
        console.log(totalsec)
        if (totalsec < 0) {
            showErr()
            clearInterval(run)
        } else if(totalsec==0) {
            day.innerHTML = '0'
            hour.innerHTML = '0'
            min.innerHTML = '0'
            sec.innerHTML = '0'
            showComplete()
            clearInterval(run)
        }else {
            let d = Math.floor(totalsec / 3600 / 24)
            let h = Math.floor(totalsec / 3600) % 24
            let m = Math.floor(totalsec / 60) % 60
            let s = Math.floor(totalsec) % 60
            day.innerHTML = d
            hour.innerHTML = formatTime(m)
            min.innerHTML = formatTime(h)
            sec.innerHTML = formatTime(s)
        }
    }, 1000)
}

function showErr() {
    let modalBody = document.getElementById("content")
    modalBody.innerHTML = "TIME ERROR! CHOOSE ANOTHER DAY"
    modal.style.display = "block";
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    time.value = ""
}

function showComplete(){
    let modalBody = document.getElementById("content")
    modalBody.innerHTML = "ITS TIME BOY"
    modalBody.style.color = "blue"
    modal.style.display = "block";
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    time.value = ""
}

function formatTime(time){
    if (time < 10){
        return `0${time}`
    } else{
        return time
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
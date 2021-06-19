const time = document.getElementById("clock")
const day = document.getElementById("days")
const hour = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")
var modal = document.getElementById("myModal")

function CalTime() {
    const targetTime = new Date(time.value)
    let run = setInterval(function () {   
        let currTime = new Date()
        let totalsec = (targetTime - currTime) / 1000
        if (totalsec <= 0) {
            showErr()
            clearInterval(run)
        } else {
            let d = Math.floor(totalsec / 3600 / 24)
            let h = Math.floor(totalsec / 3600) % 24
            let m = Math.floor(totalsec / 60) % 60
            let s = Math.floor(totalsec) % 60
            console.log(d,h,m,s)
            day.innerHTML = d
            hour.innerHTML = h
            min.innerHTML = m
            sec.innerHTML = s
        }
    }, 1000)
}

function showErr() {
    let modalBody = document.getElementById("err-content")
    modalBody.innerHTML = "TIME ERROR! CHOOSE ANOTHER DAY"
    modal.style.display = "block";
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    time.value = ""
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
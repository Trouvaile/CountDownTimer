const time = document.getElementById("clock")
const day = document.getElementById("days")
const hour = document.getElementById("hours")
const min = document.getElementById("minutes")
const sec = document.getElementById("seconds")

function CalTime(){
    let targetTime = new Date(time.value)
    let currTime = new Date()

    let totalsec = (targetTime - currTime) / 1000
    if (totalsec <= 0){
        console.log("Time err")
    } else{
        let d = Math.floor(totalsec / 3600 / 24)
        let h = Math.floor(totalsec / 3600) % 24
        let m = Math.floor(totalsec / 60) % 60
        let s = Math.floor(totalsec) % 60
        console.log(d,h,m,s)
    }
}
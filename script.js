const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
const backgroundsound = new Audio("./assets/clock.wav")
const button = document.getElementById("button")


var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
// On button click hide the button and start the timer
button.addEventListener("click", () => {
    button.style.display = "none";

    // configure and start the time
    const clock = setInterval(function time() {
        backgroundsound.play()

        let today = new Date()
        let d = today.getDate()
        let m = today.getMonth()
        let y = today.getFullYear()
        let h = today.getHours()
        let min = today.getMinutes()

        let sec = today.getSeconds()

        day.innerHTML = `${d} ${monthName[m]} ${y}`

        hour.textContent = h
        minute.innerText = min
        second.innerText = sec
    })
})
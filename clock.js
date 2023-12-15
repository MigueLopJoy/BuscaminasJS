const d = document,
    clock = d.querySelector(".side-bar .clock"),
    startBtn = d.querySelector(".start-game-btn")

const timeHandler = (mins, segs) => {
    let seg = segs || 59,
        min = mins || Number(clock.querySelector(".mins").textContent) - 1

    setTimeout(() => {
        clock.querySelector(".mins").textContent = `0${min}`
    }, 1000)

    let makeTimeRun = setInterval(() => {
        if (seg >= 0) {
            if (seg < 10) {
                clock.querySelector(".segs").textContent = `0${seg}`
            } else clock.querySelector(".segs").textContent = seg
            seg--
        } else {
            if (min > 0) {
                min--
                seg = 59
                clock.querySelector(".mins").textContent = min >= 10 ? min : `0${min}`
                clock.querySelector(".segs").textContent = seg
            } else {
                createWarning()
                const warning = d.getElementById("warning")
                warning.style.animation = "warning-appear 3s forwards 0.5s"
            }
        }
    }, 1000)

    return makeTimeRun

}

const toggleTimer = () => {
    let makeTimeRun = timeHandler(),
        min,
        seg

    console.log("ARRANCAMOS MANIN")

    min = clock.querySelector(".mins").textContent.slice(1)
    if (Number(clock.querySelector(".segs").textContent) < 10) {
        seg = clock.querySelector(".segs").textContent.slice(1)
    } else {
        seg = clock.querySelector(".segs").textContent
    }

    clearInterval(makeTimeRun)
    pause.style.display = "none"
    startBtn.style.display = "inline-block"
}

export { toggleTimer }
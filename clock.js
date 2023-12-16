import { toggleBannerRenderization } from "./layers.js"

const d = document,
    warningBanner = d.querySelector(".warning-banner"),
    startBtn = d.querySelector(".start-game-btn"),
    pauseBtn = d.querySelector(".pause-game-btn")

let timeInterval

const timeHandler = (mins, segs) => {
    let minsText = d.querySelector(".time.mins"),
        segsText = d.querySelector(".time.segs")

    return setInterval(() => {
        if (segs > 0) {
            segs--
            segsText.textContent = segs < 10 ? `0${segs}` : segs
        } else {
            if (mins > 0) {
                mins--
                segs = 59
                minsText.textContent = mins >= 10 ? mins : `0${mins}`
                segsText.textContent = segs
            } else {
                toggleBannerRenderization(warningBanner)
                warningBanner.style.animation = "warning-appear 3s forwards 0.5s"
                clearInterval(timeInterval)
            }
        }
    }, 1000)
}

const enableTimerToggling = () => {
    d.addEventListener("click", e => {
        if (e.target === startBtn || e.target === pauseBtn) {
            toggleTimer()
        }
    })
    d.addEventListener("keyup", e => {
        if (e.key === "Enter") toggleTimer()
    })
}

const toggleTimer = () => {
    let mins = Number(d.querySelector(".time.mins").textContent),
        segs = Number(d.querySelector(".time.segs").textContent)

    if (startBtn.classList.contains("d-none")) {
        timeInterval = timeHandler(mins, segs)
    } else if (pauseBtn.classList.contains("d-none")) {
        clearInterval(timeInterval)
    }
}

export {
    toggleTimer,
    enableTimerToggling
}
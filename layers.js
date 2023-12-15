import { handleBoxClick } from "./game.js"

const d = document,
    gameContainer = d.querySelector(".game-container"),
    startBtn = d.querySelector(".start-game-btn"),
    pauseBtn = d.querySelector(".pause-game-btn")

const selectDifficulty = diffBtn => {
    d.querySelector(".clock .mins").textContent = diffBtn.getAttribute("minutes")
    createBoxes(diffBtn.getAttribute("boxes-number"))
}

const createBoxes = n => {
    const fragment = d.createDocumentFragment()

    let boxesNumber = 1
    for (let y = 0; y < n; y++) {
        for (let x = 1; x <= n; x++) {
            const box = d.createElement("DIV")
            box.classList.add("box")
            box.classList.add(`box-${boxesNumber}`)
            fragment.appendChild(box)
            boxesNumber++
        }
    }
    gameContainer.appendChild(fragment)
    gameContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`
}

const prepareGameBoard = () => {
    placeMines()
    identifySideColumnsBoxes()
    setBoxesListeners()
}

const placeMines = () => {
    let boxes = d.querySelectorAll(".box"),
        boxesNumber = boxes.length,
        minesNumber = Math.floor(Math.random() * ((boxesNumber / 5) - (boxesNumber / 10))) + (boxesNumber / 10)

    for (let i = 0; i < minesNumber; i++) {
        let boxNumber, box
        do {
            boxNumber = Math.floor(Math.random() * boxesNumber) + 1
            box = d.querySelector(`.box-${boxNumber}`)
            if (!box.classList.contains("box-bomb")) {
                box.classList.add("box-bomb")
            }
        } while (!box.classList.contains("box-bomb"))
    }
}

const identifySideColumnsBoxes = () => {
    let boxes = d.querySelectorAll(".box"),
        boxesNumber = boxes.length,
        classNumber = 0,
        sideBoxesNumber = Math.sqrt(boxesNumber)

    while (classNumber < boxesNumber) {
        boxes[classNumber].classList.add("column1")
        classNumber += (sideBoxesNumber - 1)
        boxes[classNumber].classList.add("column2")
        classNumber += 1
    }
}

const setBoxesListeners = () => {
    let boxes = d.querySelectorAll(".box"),
        boxesNumber = boxes.length

    for (let i = 0; i < boxesNumber; i++) {
        boxes[i].addEventListener("click", e => {
            handleBoxClick(e.target)
        })
    }
}

const toggleBannerRenderization = banner => {
    if (banner.classList.contains("d-none")) {
        banner.classList.remove("d-none")
        banner.style.animation = "warning-appear 1s forwards"
    } else {
        banner.classList.add("d-none")
        banner.style.animation = "reload 2s forwards"
    }
}

const activeStartAndPauseBtnsToggler = () => {
    d.addEventListener("click", e => {
        if (e.target === startBtn || e.target === pauseBtn) {
            startBtn.classList.toggle("d-none")
            pauseBtn.classList.toggle("d-none")
        }
    })
}

export {
    toggleBannerRenderization,
    selectDifficulty,
    activeStartAndPauseBtnsToggler,
    prepareGameBoard
}
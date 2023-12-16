import {
    toggleBannerRenderization,
    selectDifficulty
} from "./layers.js"

import {
    toggleTimer,
    enableTimerToggling
} from "./clock.js"

import {
    activateStartAndPauseBtnsToggler,
    prepareGameBoard
} from "./layers.js"

const d = document,
    gameContainer = d.querySelector(".game-container"),
    diffSelectionBanner = d.querySelector(".difficulty-selection-banner"),
    warningBanner = d.querySelector(".warning-banner"),
    winningBanner = d.querySelector(".win-alert-banner"),
    diffBtns = d.querySelectorAll(".diff-btn"),
    startBtn = d.querySelector(".start-game-btn"),
    overlay = d.querySelector(".overlay")

d.addEventListener("DOMContentLoaded", () => {
    toggleBannerRenderization(diffSelectionBanner)
    activateDifficultySelectionBtns()
})

const handleKeyUpGameStart = e => {
    if (e.key === "Enter") {
        prepareGameStart()
    }
}

const activateDifficultySelectionBtns = () => {
    for (let i = 0; i < diffBtns.length; i++) {
        diffBtns[i].addEventListener("click", e => {
            selectDifficulty(e.target)
            toggleBannerRenderization(diffSelectionBanner)
            activateStartAndPauseBtnsToggler()
            startBtn.addEventListener("click", prepareGameStart)
            d.addEventListener("keyup", handleKeyUpGameStart)
        })
    }
}

const prepareGameStart = () => {
    startBtn.removeEventListener("click", prepareGameStart)
    d.removeEventListener("keyup", handleKeyUpGameStart)
    toggleTimer()
    enableTimerToggling()
    prepareGameBoard()
    dragAndDrop()
    enableGameReload()
}

const handleBoxClick = target => {
    let boxes = d.querySelectorAll(".box"),
        boxesNumber = boxes.length

    if (!(target.hasChildNodes())) {

        if (target.classList.contains("box-bomb")) {

            target.style.animation = "appear 1s forwards"
            target.style.backgroundImage = "url('Mina.jpg')"
            target.style.backgroundRepeat = "no-repeat)"
            target.style.backgroundSize = "cover"
            target.style.backgroundPosition = "center"
            target.style.boxShadow = "none"

            toggleBannerRenderization(warningBanner)
            gameContainer.style.backgroundColor = "red"
            gameContainer.style.animation = "flash 0.2s forwards"
            warningBanner.style.animation = "warning-appear 3s forwards 0.5s"
            overlay.style.animation = "capa-appear 4s forwards 1s"
            toggleTimer()

        } else {

            let contador = 0
            let y = Math.sqrt(boxesNumber)
            let targetBoxNumber
            let targetBoxClasses = target.getAttribute("class")

            if (targetBoxClasses.slice(8).length > 3) {
                if (targetBoxClasses.slice(8).length === 9) {
                    targetBoxNumber = Number(targetBoxClasses.slice(8, 9))
                } else if (targetBoxClasses.slice(8).length === 10) {
                    targetBoxNumber = Number(targetBoxClasses.slice(8, 10))
                } else if (targetBoxClasses.slice(8).length === 11) {
                    targetBoxNumber = Number(targetBoxClasses.slice(8, 11))
                }
            } else targetBoxNumber = Number(targetBoxClasses.slice(8))

            for (let i = 0; i < boxesNumber; i++) {
                let boxNumber
                let children = boxes[i]
                let childrenBoxNumber = children.getAttribute("class")

                if (childrenBoxNumber.slice(8).length > 3) {
                    if ((children.classList.contains("column1")) &&
                        (!(children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("column2")) &&
                        (!(children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("flagged")) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("box-bomb")) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 10) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 12) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 17) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 18) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 17) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 18) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column2")))) {
                        if (childrenBoxNumber.slice(8).length === 26) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 27) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 28) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1")))) {
                        if (childrenBoxNumber.slice(8).length === 26) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 27) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 28) {
                            boxNumber = Number(childrenBoxNumber.slice(8, 11))
                        }
                    }
                } else boxNumber = Number(childrenBoxNumber.slice(8))

                if (((boxNumber === (targetBoxNumber - y - 1)) &&
                    (!(target.classList.contains("column1")))) ||
                    (boxNumber === (targetBoxNumber - y)) ||
                    ((boxNumber === (targetBoxNumber - y + 1)) &&
                        (!(target.classList.contains("column2"))) &&
                        (boxNumber !== 1)) ||
                    ((boxNumber === (targetBoxNumber - 1)) &&
                        (!(target.classList.contains("column1")))) ||
                    ((boxNumber === (targetBoxNumber + 1)) &&
                        (!(target.classList.contains("column2")))) ||
                    ((boxNumber === (targetBoxNumber + y - 1)) &&
                        (!(target.classList.contains("column1")))) ||
                    (boxNumber === (targetBoxNumber + y)) ||
                    ((boxNumber === (targetBoxNumber + y + 1)) &&
                        (!(target.classList.contains("column2"))))
                ) {
                    if (boxes[i].classList.contains("box-bomb")) {
                        contador++
                    }
                }
            }

            if (contador === 0) {
                target.style.boxShadow = "none"
            } else {
                target.style.boxShadow = "none"
                const span = document.createElement("SPAN")
                span.textContent = contador.toString()
                target.appendChild(span)
            }
        }
    }
}

const dragAndDrop = () => {
    const boxes = d.querySelectorAll(".box")

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("dragover", e => e.preventDefault())
        boxes[i].addEventListener("drop", e => {
            if (!(boxes[i].getAttribute("style") === "box-shadow: none;") &&
                !(boxes[i].hasChildNodes())) {
                let data = e.dataTransfer.getData("text")
                const newFlag = d.createElement("IMG")
                newFlag.setAttribute("draggable", false)
                newFlag.setAttribute("src", `${data}`)
                newFlag.style.width = "50%"
                e.target.appendChild(newFlag)
                if (e.target.classList.contains("box-bomb")) {
                    e.target.classList.add("flagged")
                }
                hasUserWinned()
            }
        })
    }
}

const hasUserWinned = () => {
    const bombs = gameContainer.querySelectorAll(".box-bomb"),
        flaggeds = gameContainer.querySelectorAll(".flagged")

    if (bombs.length === flaggeds.length) {
        toggleBannerRenderization(winningBanner)
        winningBanner.style.animation = "warning-appear 3s forwards 0.5s"
    }
}

const enableGameReload = () => {
    d.addEventListener("click", e => {
        if (e.target.matches(".reload-btn")) {
            d.body.style.animation = "reload 2s forwards"
            setTimeout(() => {
                location.reload()
            }, 2000)
        }
    })
}

export {
    handleBoxClick
}
import {
    toggleBannerRenderization,
    selectDifficulty
} from "./layers.js"

import { toggleTimer } from "./clock.js"

import {
    activeStartAndPauseBtnsToggler,
    prepareGameBoard
} from "./layers.js"

const d = document,
    gameContainer = d.querySelector("game-container"),
    diffSelectionBanner = d.querySelector(".difficulty-selection-banner"),
    diffBtns = d.querySelectorAll(".diff-btn"),
    startBtn = d.querySelector(".start-game-btn"),
    pauseBtn = d.querySelector(".pause-game-btn"),
    overlay = d.querySelector(".overlay")

d.addEventListener("DOMContentLoaded", () => {
    toggleBannerRenderization(diffSelectionBanner)
    activateDifficultySelectionBtns()
})

const activateDifficultySelectionBtns = () => {
    for (let i = 0; i < diffBtns.length; i++) {
        diffBtns[i].addEventListener("click", e => {
            selectDifficulty(e.target)
            toggleBannerRenderization(diffSelectionBanner)
            startBtn.addEventListener("click", prepareGameStart)
        })
    }
}

const prepareGameStart = () => {
    startBtn.removeEventListener("click", prepareGameStart)
    startBtn.addEventListener("click", toggleTimer)
    pauseBtn.addEventListener("click", toggleTimer)
    activeStartAndPauseBtnsToggler()
    prepareGameBoard()
    dragAndDrop()
}

const handleBoxClick = target => {

    if (!(target.hasChildNodes())) {

        if (target.classList.contains("box-bomb")) {

            target.style.animation = "appear 1s forwards"
            target.style.backgroundImage = "url('Mina.jpg')"
            target.style.backgroundRepeat = "no-repeat)"
            target.style.backgroundSize = "cover"
            target.style.backgroundPosition = "center"
            target.style.boxShadow = "none"

            createWarning()

            const warning = d.getElementById("warning")

            gameContainer.style.backgroundColor = "red"
            gameContainer.style.animation = "flash 0.2s forwards"
            warning.style.animation = "warning-appear 3s forwards 0.5s"
            overlay.style.animation = "overlay-appear 4s forwards 1s"

        } else {

            let contador = 0
            let y = Math.sqrt(gameContainer.children.length)
            let x
            let targetBoxNumber = target.getAttribute("class")

            if (targetBoxNumber.slice(8).length > 3) {
                if (targetBoxNumber.slice(8).length === 9) {
                    x = Number(targetBoxNumber.slice(8, 9))
                } else if (targetBoxNumber.slice(8).length === 10) {
                    x = Number(targetBoxNumber.slice(8, 10))
                } else if (targetBoxNumber.slice(8).length === 11) {
                    x = Number(targetBoxNumber.slice(8, 11))
                }
            } else x = Number(targetBoxNumber.slice(8))

            for (let i = 0; i < gameContainer.children.length; i++) {

                let z
                let children = gameContainer.children[i]
                let childrenBoxNumber = children.getAttribute("class")

                if (childrenBoxNumber.slice(8).length > 3) {
                    if ((children.classList.contains("column1")) &&
                        (!(children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("column2")) &&
                        (!(children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("flagged")) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 9) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 10) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if ((children.classList.contains("box-bomb")) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 10) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 11) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 12) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 17) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 18) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("flagged"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("box-bomb")))) {
                        if (childrenBoxNumber.slice(8).length === 17) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 18) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column2"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("flagged")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1"))) &&
                        (!(children.classList.contains("column2")))) {
                        if (childrenBoxNumber.slice(8).length === 18) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 19) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 20) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column1")) &&
                        (children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column2")))) {
                        if (childrenBoxNumber.slice(8).length === 26) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 27) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 28) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    } else if (((children.classList.contains("column2")) &&
                        (children.classList.contains("flagged")) &&
                        (children.classList.contains("box-bomb"))) &&
                        (!(children.classList.contains("column1")))) {
                        if (childrenBoxNumber.slice(8).length === 26) {
                            z = Number(childrenBoxNumber.slice(8, 9))
                        } else if (childrenBoxNumber.slice(8).length === 27) {
                            z = Number(childrenBoxNumber.slice(8, 10))
                        } else if (childrenBoxNumber.slice(8).length === 28) {
                            z = Number(childrenBoxNumber.slice(8, 11))
                        }
                    }
                } else z = Number(childrenBoxNumber.slice(8))

                if (((z === (x - y - 1)) &&
                    (!(target.classList.contains("column1")))) ||
                    (z === (x - y)) ||
                    ((z === (x - y + 1)) &&
                        (!(target.classList.contains("column2"))) &&
                        (z !== 1)) ||
                    ((z === (x - 1)) &&
                        (!(target.classList.contains("column1")))) ||
                    ((z === (x + 1)) &&
                        (!(target.classList.contains("column2")))) ||
                    ((z === (x + y - 1)) &&
                        (!(target.classList.contains("column1")))) ||
                    (z === (x + y)) ||
                    ((z === (x + y + 1)) &&
                        (!(target.classList.contains("column2"))))
                ) {
                    if (gameContainer.children[i].classList.contains("box-bomb")) {
                        contador++
                    }
                } else continue
            }

            if (contador === 0) {
                target.style.boxShadow = "none"
            } else {
                target.style.boxShadow = "none"
                const span = d.createElement("SPAN")
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
        createWinAlert()
        const winAlert = d.getElementById("win-alert")
        winAlert.style.animation = "warning-appear 3s forwards 0.5s"
    }
}

const reload = () => {
    d.body.style.animation = "reload 2s forwards"
    setTimeout(() => {
        location.reload()
    }, 2000)
}

export {
    reload,
    handleBoxClick
}
import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

    sounds.buttonPress.play()
}
export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPress.play()
}
export function toggleMusicOn() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.storeFront.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.pause()
        sounds.cloudySnowing.pause()
        sounds.bgAudio.play()
        return
    }
        //sounds.bgAudio.pause()
}

export function toggleMusicOff() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.pause()
        sounds.storeFront.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.pause()
        sounds.cloudySnowing.pause()
        return
    }
        //sounds.bgAudio.pause()
}

export function toggleForest() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.pause()
        sounds.storeFront.pause()
        sounds.cloudySnowing.pause()
        sounds.localFireDepartment.pause()
        sounds.nature.play()
        return
    }
    state.isMute = document.documentElement.classList.remove('music-on')
    sounds.nature.pause()
}

export function toggleFire() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if(state.isMute) {
        sounds.bgAudio.pause()
        sounds.storeFront.pause()
        sounds.cloudySnowing.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.play()
        return
    }
        sounds.localFireDepartment.pause()
}

export function toggleRain() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.pause()
        sounds.storeFront.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.pause()
        sounds.cloudySnowing.play()
        return
    }
        sounds.cloudySnowing.pause()
}

export function toggleCoffee() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.pause()
        sounds.cloudySnowing.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.pause()
        sounds.storeFront.play()
        return
    }
        sounds.storeFront.pause()
}
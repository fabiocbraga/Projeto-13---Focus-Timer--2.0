import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import * as sounds from "./sounds.js"

export function countdown() {
    
    clearTimeout(state.countdownID)
    
    if(!state.isRunning) {
        return
    }    
    
    
    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--
    
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    
    if(minutes < 0){
        reset()
        sounds.storeFront.pause()
        sounds.nature.pause()
        sounds.localFireDepartment.pause()
        sounds.cloudySnowing.pause()
        sounds.bgAudio.pause()
        sounds.kitchenTimer.play()
        return
    }
    state.countdownID = setTimeout(() => countdown(), 1000)
    
    updateDisplay(minutes,seconds)
}

export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")

}
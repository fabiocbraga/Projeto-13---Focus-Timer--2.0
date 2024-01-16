import state from "./state.js";
import { controls } from "./elements.js";
import { cards } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";

export function RegisterControls(){
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        console.log(action)
    if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })

    cards.addEventListener('click', (event) => {
        const action = event.target.dataset.action
         console.log(action)
    if (typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}
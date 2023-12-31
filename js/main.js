import{ Modal} from "./modal.js"
import{AlertError} from "./alert-error.js"

//variaveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal .title button')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message

    Modal.open()
}

//utilitarias

function notANumber(value) {
    return isNaN(value) || value == ""
}


function calculateIMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}


// refatoração

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
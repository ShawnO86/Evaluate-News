import { checkLanguage } from "./callLanguage";

let type;

function checkType() {
    const radioButtons = document.querySelectorAll('input[name="type"]');
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            type = radioButton.value;
            break;
        }
    }
}

function checkURL() {
    const regex = new RegExp()
}

const callAPI = async () => {
    const userText = document.getElementById('userText');
    const resultNotify = document.getElementById('resultNotify');
    //added the http://localhost:3000/route so I can run dev mode and express server 
    const req = await fetch("http://localhost:3000/apiKey");
    try {
        const key = await req.json()
        //check if type is selected
        if (type) {
            //check if user has input
            if (userText.value) {
                checkLanguage(type, userText, key)
                resultNotify.innerHTML = "<strong>&#8595 Evaluation Complete! &#8595</strong>"
            }
            else {
                console.log("No text entered.")
                alert("Please enter text to check.")
            }
        } else {
            console.log("No type selected.")
            alert("Please select an input type.")
        }
    } catch (error) {
        console.log("error", error)
        alert("error", error)
    }
}

export { callAPI, checkType }

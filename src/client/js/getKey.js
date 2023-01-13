import { checkLanguage } from "./callLanguage";

const userText = document.getElementById('userText');
const radioButtons = document.querySelectorAll('input[name="type"]');
let type;

function checkType() {
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            type = radioButton.value;
            break;
        }
    }
}

const callAPI = async () => {
    //added the http://localhost:3000/route so I can run dev mode and express server 
    const req = await fetch("http://localhost:3000/apiKey");
    try {
        const key = await req.json()
        //check if type is selected
        if (type) {
            //check if user has input
            if (userText.value) {
                checkLanguage(type, userText, key)
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
    }
}

export { callAPI, checkType }

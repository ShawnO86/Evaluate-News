import { checkLanguage } from "./callLanguage";

const userText = document.getElementById('userText');
const radioButtons = document.querySelectorAll('input[name="type"]');
let type;

function checkType() {
    for(let radioButton of radioButtons) {
      if(radioButton.checked){
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
        if (userText.value) {
            checkLanguage(type, userText.value, key)
        } else {
            alert("Please enter text to check.")
        }

    } catch (error) {
        console.log("error", error)
    }
}

export { callAPI, checkType }

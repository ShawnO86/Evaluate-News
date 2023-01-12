import { checkLanguage } from "./callLanguage";

const userText = document.getElementById('userText');

const callAPI = async () => {
    const req = await fetch("http://localhost:3000/apiKey");
    try {
        const key = await req.json()
        if(userText.value) {
            checkLanguage(userText.value, key)
        } else {
            alert("Please enter text to check.")
        }

    } catch(error) {
        console.log("error", error)
    }
}

export { callAPI }

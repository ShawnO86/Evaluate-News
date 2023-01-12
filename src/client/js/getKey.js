import { checkLanguage } from "./callLanguage";

const callAPI = async () => {
    const req = await fetch("http://localhost:3000/apiKey");
    try {
        const key = await req.json()
        checkLanguage(userText.value, key)
    } catch(error) {
        console.log("error", error)
    }
}

export { callAPI }

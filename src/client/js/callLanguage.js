import { postData } from "./postData";
import { updateUI } from "./uiUpdate";

async function checkLanguage(text, apiKey) {
  const req = await fetch(`https://api.meaningcloud.com/sentiment-2.1?lang=en&txt=${text}&key=${apiKey}`, {
    method: 'GET'
  });
  try {
    const data = await req.json()
    console.log("Data from API:", data)

    //added the http://localhost:3000/route so I can run dev mode and express server 
    postData('http://localhost:3000/addData', { 
      text: userText.value,
      agreement: data.agreement,
      confidence: data.confidence,
      irony: data.irony,
      subjectivity: data.subjectivity
    });

    updateUI()
} catch (e) {
    console.log("error", e)
}
};

export {checkLanguage};
import { postData } from "./postData";
import { updateUI } from "./uiUpdate";


async function checkLanguage(type, text, apiKey) {
  let req = await fetch(`https://api.meaningcloud.com/sentiment-2.1?lang=en&${type}=${text}&key=${apiKey}`, {
    method: 'GET'
  });

  try {
    const data = await req.json()
    console.log("All data from API:", data)
    //added the http://localhost:3000/route so I can run dev mode and express server 
    postData('/addData', {
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

export { checkLanguage };
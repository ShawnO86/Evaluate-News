import { postData } from "./postData";
import { getData } from "./getData";

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

const updateUI = async () => {
  //added the http://localhost:3000/route so I can run dev mode and express server 
  const currentData = await getData('http://localhost:3000/getData');
  const display = document.getElementById('results');
  try {
      display.innerHTML = `<ul>
      <li>Text: ${currentData.text}</li>
      <li>Agreement: ${currentData.agreement}</li>
      <li>Confidence: ${currentData.confidence}</li>
      <li>Irony: ${currentData.irony}</li>
      <li>Subjectivity: ${currentData.subjectivity}</li>
      </ul>`;
  } catch (e) {
      console.log("error", e)
  }
};

export {checkLanguage};

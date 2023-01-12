import { postData } from "./postData";
import { getData } from "./getData";

async function checkLanguage(text, apiKey) {
  const req = await fetch(`https://api.meaningcloud.com/sentiment-2.1?lang=en&txt=${text}&key=${apiKey}`, {
    method: 'GET'
  });
  try {
    const data = await req.json()
    console.log("Data from API:", data)
    postData('/addData', { subjectivity: data.subjectivity, confidence: data.confidence});
    updateUI()
    return data
} catch (e) {
    console.log("error", e)
}
};

const updateUI = async () => {
  const currentData = await getData('/getData');
  const display = document.getElementById('results');
  try {
      display.innerHTML = "Subjectivity: " + currentData.subjectivity;
  } catch (e) {
      console.log("error", e)
  }
};

export {checkLanguage};

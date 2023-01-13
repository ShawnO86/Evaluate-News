import { getData } from "./getData";

const updateUI = async () => {
    //added the http://localhost:3000/route so I can run dev mode and express server 
    const currentData = await getData('http://localhost:3000/getData');
    const display = document.getElementById('results');
    try {
        //printing results from express server projectData object
        display.innerHTML = `<ul>
        <li>Text/URL: ${currentData.text}</li>
        <li>Agreement: ${currentData.agreement}</li>
        <li>Confidence: ${currentData.confidence}</li>
        <li>Irony: ${currentData.irony}</li>
        <li>Subjectivity: ${currentData.subjectivity}</li>
        </ul>`;
    } catch (e) {
        console.log("error", e)
    }
};

export { updateUI }
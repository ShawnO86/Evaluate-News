import { getData } from "./getData";

const updateUI = async () => {
    //added the http://localhost:3000/route so I can run dev mode and express server 
    const currentData = await getData('http://localhost:3000/getData');
    const display = document.getElementById('results');
    try {
        //printing results from express server projectData object
        display.innerHTML = `<ul>
        <li>Text/URL: <strong>${currentData.text}</strong></li>
        <li>Agreement: <strong>${currentData.agreement}</strong></li>
        <li>Confidence: <strong>${currentData.confidence}</strong></li>
        <li>Irony: <strong>${currentData.irony}</strong></li>
        <li>Subjectivity: <strong>${currentData.subjectivity}</strong></li>
        </ul>`;
    } catch (e) {
        console.log("error", e)
    }
};

export { updateUI }
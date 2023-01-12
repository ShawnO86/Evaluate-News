import { callAPI } from "./js/getKey";

const userText = document.getElementById('userText');

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    callAPI()
})
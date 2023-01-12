import { callAPI } from "./js/getKey";

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    callAPI();
})
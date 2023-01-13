import { callAPI, checkType } from "./js/getKey";

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    checkType()
    callAPI();
})
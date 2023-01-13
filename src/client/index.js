import { callAPI, checkType } from "./js/getKey";
import './styles/main.scss'

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    checkType()
    callAPI();
})
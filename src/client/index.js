import { callAPI, checkType } from "./js/getKey";
import './styles/main.scss'
import './styles/form.scss'

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    checkType()
    callAPI();
})
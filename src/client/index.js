import { callAPI, checkType } from "./js/getKey";
import './styles/main.scss'
import './styles/form.scss'
import './styles/output.scss'

document.getElementById('formSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    checkType()
    callAPI();
})
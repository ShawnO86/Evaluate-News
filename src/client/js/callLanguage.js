import { postData } from "./postData";

function checkLanguage(text, apiKey) {
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
      body: response.json()
    }))
    .then((body) => postData('/addData', body))//add specific data i want to send to server here...
    .catch(error => console.log('error', error));
};

export {checkLanguage};

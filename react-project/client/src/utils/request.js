import axios from 'axios';

export default function(method, url, data = []) {
    let configData = {};
    let type = method === 'get' ? 'params' : 'data';
    configData.method = method;
    configData.url = url;
    configData[type] = data;
    if (!localStorage.getItem('token')) {
        configData.headers = {
            usertoken: '',
        };
    } else {
        configData.headers = {
            usertoken: localStorage.getItem('token'),
        };
    }

    console.log();

    return axios(configData).catch(error => {
        if (error.response.status === 401) {
            alert(error.response.data.msg);
            window.location.href = '/login';
        }
    });
}

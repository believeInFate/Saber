import axios from 'axios';

export default function(method, url, data = []) {
    let configData = {};
    let type = method === 'get' ? 'params' : 'data';
    configData.method = method;
    configData.url = url;
    configData[type] = data;
    configData.headers = {
        usertoken: localStorage.getItem('token'),
    };
    return axios(configData).catch(error => {
        if (error.response.status === 401) {
            alert(error.response.data.msg);
        }
    });
}

import axios from 'axios';

export default function(method, url, data = []) {
    let configData = {};
    let type = method === 'get' ? 'params' : 'data';
    configData.method = method;
    configData.url = url;
    configData[type] = data;
    configData.headers = {
        authorToken: localStorage.getItem('token'),
    };
    return axios(configData).catch(error => {
        if (error.response.status === 404) return alert('接口找不到');
        if (error.response.status === 500) return alert('服务器错误');
        if (error.response.status === 401) return alert(error.response.data.message);
    });
}

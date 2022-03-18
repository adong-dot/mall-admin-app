import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

// http request 请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  console.log(config);
  return config;
}, (error) => Promise.reject(error));
// 对请求错误做些什么

// http response 响应拦截器
instance.interceptors.response.use((response) => {
  //   console.log(response);
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;

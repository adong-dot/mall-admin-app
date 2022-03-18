import axios from '@/axios';

export default {
  login(data) {
    return axios.post('/passport/login', data);
  },
};

// export default function loginApi(data) {
//   return axios({
//     url: '/api/admin/login',
//     method: 'post',
//     data,
//   });
// }

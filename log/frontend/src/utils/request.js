import axios from 'axios';
import { host } from '../config';
import Swal from 'sweetalert2';
const service = axios.create({ baseURL: host });
service.interceptors.response.use(
    (res) => res.data,
    (err) => {
        if (err.response) {
            const message = err.response.data.message;
            const code = err.response.data.code;
            if (code) Swal.fire(message, `오류코드 : ${code}`, 'error');
            else Swal.fire(message, '', 'error');
        } else Swal.fire('네트워크에러', '서버와의 연결에 실패했습니다. 네트워크를 확인해 주세요!', 'error');
        return null;
    },
);

export default service;

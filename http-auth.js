import axios from "axios";

export default axios.create({
    // springBoot 접속할 주소(ip, port)를 정의
    // baseURL: "http://192.168.0.166:8000/api/auth"
    baseURL: "http://localhost:8000/api/auth"
})

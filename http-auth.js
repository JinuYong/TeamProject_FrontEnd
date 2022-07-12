import axios from "axios";

export default axios.create({
    // springBoot 접속할 주소(ip, port)를 정의
    baseURL: "http://localhost:8000/api/auth"
})
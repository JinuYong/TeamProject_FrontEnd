import axios from "axios";

export default axios.create({
    // http://localhost:8000/api : 백엔드의 포트번호 지정
    // baseURL: "http://192.168.0.166:8000/api",
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});

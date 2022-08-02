import axios from "axios";

export default axios.create({
   // baseURL: "http://192.168.0.166:8000/api",
   baseURL: "http://localhost:8000/api",
   headers: {
       "Content-type": "application/json"
   }
});

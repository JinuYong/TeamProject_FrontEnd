import http from "../http-common";

class CancelDataService {
  getAll() {
    return http.get("/mypage");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  // create(data) {
  //   return http.post("/mypageupdate", data);
  // }

  update(no) {
    return http.put(`/mypage/update/${no}`);
  }

  delete(no) {
    return http.put(`/mypage/deletion/${no}`);
  }

//   deleteAll() {
//     return http.put(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new CancelDataService();

import http from "../http-common";

class ReviewDataService {
  // getAll() {
  //   return http.get("/mypageupdate");
  // }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    return http.post("/mypage", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

  // delete(no) {
  //   return http.put(`/mypageupdate/deletion/${no}`);
  // }

//   deleteAll() {
//     return http.put(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new ReviewDataService();

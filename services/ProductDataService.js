import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/mypageupdate");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

  delete(id) {
    return http.put(`/tutorials/deletion/${id}`);
  }

//   deleteAll() {
//     return http.put(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new ProductDataService();

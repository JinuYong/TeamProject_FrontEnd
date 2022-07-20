import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class IndexDataService {

    getItemAll() {
        return http.get(`/items`);
    }

}

export default new IndexDataService()








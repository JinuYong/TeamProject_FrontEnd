import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class ReviewDataService {

    getReview(itemIdx) {
        return http.get(`/review/${itemIdx}`)
    }

}

export default new ReviewDataService()








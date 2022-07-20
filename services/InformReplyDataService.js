import http from "../http-common";

class InformReplyDataService {
    // 리뷰 전체 조회
    get(idx) {
        return http.get(`/inform/detail/reply/${idx}`);
    }

    // 리뷰 생성
    create(data) {
        return http.post(`/inform/detail/reply/write`, data);
    }

    // 리뷰 수정
    update(idx, data) {
        return http.put(`/inform/detail/reply/update/${idx}`, data);
    }

    // 리뷰 삭제
    delete(idx) {
        return http.put(`/inform/detail/reply/deletion/${idx}`);
    }
}

export default new InformReplyDataService();

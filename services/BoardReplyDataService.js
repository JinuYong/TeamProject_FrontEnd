import http from "../http-common";

class BoardReplyDataService {
    // 리뷰 전체 조회
    get(idx) {
        return http.get(`/board/detail/reply/${idx}`);
    }

    // 리뷰 생성
    create(data) {
        return http.post(`/board/detail/reply/write`, data);
    }

    // 리뷰 수정
    update(idx, data) {
        return http.put(`/board/detail/reply/update/${idx}`, data);
    }

    // 리뷰 삭제
    delete(idx) {
        return http.put(`/board/detail/reply/deletion/${idx}`);
    }
}

export default new BoardReplyDataService();

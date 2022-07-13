import http from "../http-common";

// springboot 연결하기 위한 메소드 정의
class BoardDataService {
    // 모든 회원 조회
    getAll(params) {
        return http.get("/board/list", { params });
    }

    // 제목으로 회원 조회
    get(title) {
        return http.get(`/board/list/${title}`);
    }

    // 작성자로 회원 조회
    get(id) {
        return http.get(`/board/list/${id}`);
    }

    // idx로 조회
    get(idx) {
        return http.get(`/board/list/${idx}`);
    }

    // 게시판 글쓰기 (insert 문 호출)
    create(data) {
        return http.post("/board/write", data);
    }

    // 회원 데이터를 삭제 요청(update 문 호출)
    delete(idx) {
        return http.put(`/board/deletion/${idx}`);
    }

    // 상세 게시판
    detail(idx) {
        return http.get(`/board/detail/${idx}`);
    }

    // 게시판 수정 요청 (update 문 호출)
    update(idx, data) {
        return http.put(`/board/detail/update/${idx}`, data);
    }
}

export default new BoardDataService();

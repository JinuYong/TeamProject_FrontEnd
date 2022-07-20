import http from "../http-common";

class BoardUploadService {
    // upload를 위한 메소드
    // springboot 서버로 insert문 호출
    upload(boardTitle, content, userIdx, file, onUploadProgress) {
        // 자바스크립트 제공 클래스
        // <form> 태그로 이미지 전송을 해야함 : json 형태 x
        // <form> == FormData()
        let formData = new FormData();

        // vue에서 선택한 파일을 form 데이터로 담기
        formData.append("boardTitle", boardTitle);
        formData.append("content", content);
        formData.append("userIdx", userIdx);
        formData.append("file", file);

        return http.post("/upload", formData, {
            headers: {
                // 이미지 전송 형태 : json 안됨
                "Content-Type": "multipart/form-data",
            },
            // 이미지 처리 결과를 화면에 프로그래스바로
            //  보여주기 위해 실행(함수)
            onUploadProgress,
        });
    }

    getReplyCount(idx) {
        return http.get(`/board/detail/replyCount/${idx}`);
    }

    // 이미지를 서버에서 다운로드 받음
    getFiles(fileId) {
        return http.get(`/files/${fileId}`);
    }

    // todo: 상세 이미지 정보 조회
    getDetailFile(idx) {
        return http.get(`/files/detail/${idx}`);
    }

    // 모든 회원 조회
    getAll(params) {
        return http.get("/board/list", { params });
    }

    // 제목으로 회원 조회
    get(boardTitle) {
        return http.get(`/board/list/${boardTitle}`);
    }

    // 작성자로 회원 조회
    get(id) {
        return http.get(`/board/list/id/${id}`);
    }

    // idx로 조회
    get(idx) {
        return http.get(`/board/list/idx/${idx}`);
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

// 외부 파일(js, vue)에서 사용할 수 있게 아래 이름으로 export
export default new BoardUploadService();

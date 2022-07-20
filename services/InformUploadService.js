import http from "../http-common";

class InformUploadService {
    // upload를 위한 메소드
    // springboot 서버로 insert문 호출
    upload(title, content, userIdx, file, onUploadProgress) {
        // 자바스크립트 제공 클래스
        // <form> 태그로 이미지 전송을 해야함 : json 형태 x
        // <form> == FormData()
        let formData = new FormData();

        // vue에서 선택한 파일을 form 데이터로 담기
        formData.append("title", title);
        formData.append("content", content);
        formData.append("userIdx", userIdx);
        formData.append("file", file);

        return http.post("/inform/upload", formData, {
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
        return http.get(`/inform/detail/replyCount/${idx}`);
    }

    getAllFiles() {
        return http.get(`/inform/files/all`);
    }

    topThree() {
        return http.get(`/inform/topthree/all`);
    }
    // 이미지를 서버에서 다운로드 받음
    getFiles(fileId) {
        return http.get(`/inform/files/${fileId}`);
    }

    // todo: 상세 이미지 정보 조회
    getDetailFiles(idx) {
        return http.get(`/inform/files/detail/${idx}`);
    }

    getAll() {
        return http.get("/inform/list");
    }

    get(title) {
        return http.get(`/inform/list/${title}`);
    }

    get(idx) {
        return http.get(`/inform/detail/${idx}`);
    }

    create(data) {
        return http.post(`/inform/write`, data);
    }

    update(idx, data) {
        return http.put(`/inform/detail/update/${idx}`, data);
    }

    delete(idx) {
        return http.put(`/inform/deletion/${idx}`);
    }
}

// 외부 파일(js, vue)에서 사용할 수 있게 아래 이름으로 export
export default new InformUploadService();

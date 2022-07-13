import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class UserDataService {

    getUser(userIdx) {
        return http.get(`/users/${userIdx}`)
    }

}

export default new UserDataService()








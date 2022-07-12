// AuthService.js
// login / logout / register(회원가입) 처리
import http from "../../http-auth"

class AuthService {
//    로그인 메소드(함수)
    login(user) {
        // springboot 서버로 로그인 정보(이름, 암호) 확인 요청
        return http.post("/signin", {
                username: user.username,
                password: user.password
            }
        )
    //    성공하면 then 으로 결과가 들어옴
            .then( response => {
                console.log(response.data);
                console.log("accessToken : " + response.data.token);

                // springboot 서버에서 전송한 웹토큰을 받았으면
                // 로컬스토리지에 user 라는 이름으로 저장
                if(response.data.token) {
                    // JSON.stringify : json객체 -> 문자열로 변환
                    // JSON.parse : 문자열 -> json객체로 변환
                    localStorage.setItem("user", JSON.stringify(response.data))
                }

                return response.data;
            })
    }

//     logout
//    JWT(Java Web Token)를 로컬 저장소(localstorage)에서 제거
    logout() {
        localStorage.removeItem("user");
    }

//    POST 방식 : springBoot 서버에 회원 가입 을 요청( insert )
//    영문사이트 : sign up ( 회원 가입 ), sign in ( 로그인 )
    register(user) {
        return http.post("/signup", {
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
}

export default new AuthService();






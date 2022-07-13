// TODO: 페이지 접근

// export default ({ app }) => {
//     // Every time the route changes (fired on initialization too)
//     app.router.beforeEach((to, from, next) => {
//         //  권한관리 : 회원, 비회원
//         //  인증없이[회원, 비회원] 접근 가능한 경로 (화면)
//         const publicPages = ["/login", "/signup", "/", "/qna", "/mypageupdate"];
//         //  인증이 있어야만[회원] 접근가능한 경로(화면)
//         const authRequired = !publicPages.includes(to.path);
//         // 웹 토큰을 가져와서 확인
//         // 웹 토큰 있으면 : 회원
//         // 웹 토큰 없으으면 : 비회원
//         const loggedIn = localStorage.getItem("user");

//         // 비회원 일 경우
//         if (authRequired && !loggedIn) {
//             //  강제로 /login 화면으로 전환
//             next("/login");
//         } else {
//             // 다음 화면으로 이동
//             next();
//         }
//     });
// };

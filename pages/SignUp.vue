<template>
    <div class="signup-container">
        <form class="signup">
            <h3 class="text-center">회원가입</h3>
            <div class="signup-inputs">
                프로필 이미지
                <img :src="profileImg" alt="프로필이미지" class="user-profile" ref="userProfile">
                <label class="profile-label" for="profile-change"></label>
                <input type="file" class="profile-input" id="profile-change" accept="image/*" @change="profileChange()" ref="profile">
            </div>

            <!-- 아이디 -->
            <div class="row">
                <label for="user_id" class="form-label"> 아이디 </label>
                <div class="col-lg-9">
                    <input
                        type="text"
                        class="form-control"
                        id="user_id"
                        placeholder="5~15자 내외로 입력해 주세요."
                        required
                        minlength="5"
                        maxlength="15"
                        v-model="userForm.id"
                    />
                </div>
                <div class="col-auto">
                    <button class="btn btn-md mb-3">중복확인</button>
                </div>
            </div>

            <!-- 비밀번호 -->
            <div class="mb-3">
                <label for="user_password" class="form-label">비밀번호</label>
                <input
                    type="password"
                    class="form-control"
                    id="user_password"
                    placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                    required
                    minlength="8"
                    maxlength="20"
                    v-model="userForm.password"
                />
            </div>

            <!-- 비밀번호 확인 -->
            <div class="mb-3">
                <label for="re_password" class="form-label"
                    >비밀번호 확인</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="re_password"
                    placeholder="입력한 비밀번호를 다시 입력해 주세요."
                    required
                    minlength="8"
                    maxlength="20"
                    v-model="userForm.rePassword"
                />
            </div>

            <!-- 이메일 -->
            <div class="mb-3">
                <label for="user_email" class="form-label">이메일</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_email"
                    placeholder="example12@naver.com"
                    v-model="userForm.eamil"
                />
            </div>
            <!-- 이름 -->
            <div class="mb-3">
                <label for="user_name" class="form-label">이름</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_name"
                    placeholder="공백 없이 입력해 주세요."
                    required
                    maxlength="6"
                    v-model="userForm.name"
                />
            </div>

            <!-- 연락처 -->
            <div class="mb-3">
                <label for="user_phone" class="form-label">연락처</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_phone"
                    placeholder="ex) 010-1111-1111"
                    v-model="phoneNum"
                    @keyup="addHyphen()"
                    required
                    maxlength="13"
                />
            </div>

            <!-- 주소 -->
            <div class="row">
                <label for="user_address" class="form-label">주소</label>
                <div class="col-lg-6">
                    <input
                        type="text"
                        id="postcode"
                        class="form-control postcode-input"
                        disabled
                    />
                </div>
                <div class="col-auto">
                    <button @click="address_search()" class="btn btn-md mb-1">
                        주소검색
                    </button>
                </div>
                <div class="post-box" v-if="postOpen">
                    <VueDaumPostcode @complete="oncomplete" />
                </div>
                <div class="mt-2">
                    <input
                        type="text"
                        class="form-control"
                        disabled
                        id="address"
                        placeholder="우측의 '주소검색' 버튼을 클릭하세요."
                    />
                </div>
                <div class="mt-2">
                    <input
                        type="text"
                        class="form-control mt-2"
                        id="detail_address"
                        placeholder="상세 주소를 입력해 주세요."
                        v-model="userForm.detailAddress"
                    />
                </div>
            </div>
            <div>
                <button
                    class="w-100 mt-5 mb-3 btn btn-md"
                    @click="joinConfirm()"
                >
                    가입하기
                </button>
            </div>
            <hr />
            <div class="logoPic-flex">
                <div>
                    <img
                        src="@/assets/img/omym_logo.png"
                        alt="logoPic"
                        class="logoPic mt-3"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { VueDaumPostcode } from "vue-daum-postcode";

/* eslint-disable */
export default {
    name: "signup",
    data() {
        return {
            profileImg: require("@/assets/img/user.png"),
            profileFile: {},
            postOpen: false,
            phoneNum: "",
            userForm: {
                profile: "",
                id: "",
                password: "",
                rePassword: "",
                email: "",
                name: "",
                postcode: "",
                address: "",
                detailAddress: ""
            },
        };
    },
    components: {
        VueDaumPostcode,
    },
    methods: {
        profileChange() {
            this.profileFile = this.$refs.profile.files[0];
            this.profileImg = URL.createObjectURL(this.profileFile);
        },
        addHyphen() {
            this.phoneNum = this.phoneNum.replace(/[^0-9]/g, "");
            if (this.phoneNum.length < 4) {
                return
            } else if(this.phoneNum.length < 8) {
                this.phoneNum = this.phoneNum.substr(0,3) + "-" + this.phoneNum.substr(3);
            } else if(this.phoneNum.length < 12) {
                this.phoneNum = this.phoneNum.substr(0,3) + "-" + this.phoneNum.substr(3,4) + "-" + this.phoneNum.substr(7);
            }
        },
        address_search() {
            this.postOpen = true;
        },
        oncomplete(data) {
            var addr = ""; // 주소 변수
            var extraAddr = ""; // 참고항목 변수

            if (data.userSelectedType === "R") {
                // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else {
                // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            if (data.userSelectedType === "R") {
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraAddr +=
                        extraAddr !== ""
                            ? ", " + data.buildingName
                            : data.buildingName;
                }
                if (extraAddr !== "") {
                    extraAddr = " (" + extraAddr + ")";
                }
                document.getElementById("address").value =
                    addr + " " + extraAddr;
            } else {
                document.getElementById("address").value = addr;
            }
            document.getElementById("postcode").value = data.zonecode;
            document.getElementById("detail_address").focus();
            this.userForm.postcode = data.zonecode;
            this.userForm.address = addr;

            this.postOpen = false;
        },
        async joinConfirm() {
            // e.preventDefault();
            //공백
            const pattern_blank = /[\s]/g;
            //한글만
            const patten_kor = /^[가-힣]+$/;
            //ID
            const patten_id = /^[a-z0-9]{5,20}$/;
            //숫자포함
            const patten_include_num = /[0-9]/;
            //영어포함
            const patten_include_eng = /[a-zA-Z]/;
            //특수문자
            const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
            //email
            const pattern_email =
                /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;

            // let validate_result = true

            var id = this.$el.querySelector("#user_id").value;
            var name = this.$el.querySelector("#user_name").value;
            var password = this.$el.querySelector("#user_password").value;
            var re_password = this.$el.querySelector("#re_password").value;
            var phone = this.$el.querySelector("#user_phone").value;
            // var phone2 = document.querySelector("#phone2").value;
            // var phone3 = document.querySelector("#phone3").value;

            if (
                id == "" ||
                !password ||
                !re_password ||
                !name ||
                !phone
            ) {
                alert("모든 값을 입력해 주세요");
                return;
            }
            //아이디 소문자, 숫자만 사용
            console.log(!patten_id);
            if (!patten_id.test(id)) {
                alert("아이디를 확인해 주세요");
                return;
            }
            //이름 체크. 한글만
            console.log(!patten_kor.test(name));
            if (!patten_kor.test(name)) {
                alert("이름을 확인해 주세요");
                return;
            }
            //비밀번호 체크
            console.log(
                pattern_spc.test(password) || patten_kor.test(password)
            );
            if (pattern_spc.test(password) || patten_kor.test(password)) {
                alert("비밀번호를 확인해 주세요");
                return;
            }
            //비밀번호 재확인 비교
            if (password != re_password) {
                alert("비밀번호 재확인을 확인해 주세요");
                return;
            }

            //최종확인!
            console.log(!validate_result);
            if (!validate_result) {
                alert("인풋을 재확인 해주세요");
                return
            }
            
            try {
                let user = this.saveUser;
                let res = await this.$axios.post('/api/signup', user);
                console.log(user);
                console.log(res);
                
            } catch(e) {

            }
        },
        saveUser() {
            let user = {
                profile: this.profileFile,
                id: this.userForm.id,
                password: this.userForm.password,
                rePassword: this.userForm.rePassword,
                email: this.userForm.email,
                name: this.userForm.name,
                phone: this.phoneNum,
                postCode: this.userForm.postcode,
                address: this.userForm.address,
                detailAddress: this.userForm.detailAddress
            }
            return user;
        }
    },
};
</script>

<style scoped>
.signup-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 599px;
}

.signup {
    min-width: 500px;
    width: 550px;
    margin-top: 50px;
    border: 5px solid #a30000;
    border-radius: 10px;
    padding: 40px;
}

.signup input {
    border-radius: 0;
}
.signup-inputs {
    display: flex;
    align-items: center;
}

.user-profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 20px 0 20px 30px
}
.profile-label {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    transform: translateX(-80px);
}
.profile-input {
    display: none;
}


.adds {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.btn {
    background: #a30000;
    color: white;
}

.logoPic {
    width: 150px;
    height: 40px;
}

.logoPic-flex {
    display: flex;
    justify-content: center;
}

.form-control {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.form-control:focus {
    box-shadow: none;
    border-color: #a30000;
}

.row {
    justify-content: space-between;
}
.postcode-input {
    width: 100px;
}
</style>

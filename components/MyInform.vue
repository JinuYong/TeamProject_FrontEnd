<template>
    <div class="signup-container">
        <form class="signup inform-inputs">
            <!-- <h3 class="text-center">내 정보</h3> -->
            <div class="signup-inputs form-label">
                프로필 이미지
                <!-- <img :src="profileImg" alt="프로필이미지" class="user-profile" ref="userProfile"> -->
                <img v-if="profileUrl" :src="'http://localhost:8000/image/' + profileUrl" alt="프로필이미지" class="user-profile" ref="userProfile">
                <label class="profile-label" :class="{cursordisable:!editStatus}" for="profile-change"></label>
                <input type="file" class="profile-input" id="profile-change" accept="image/*" @change="profileChange" ref="profile" disabled>
            </div>

            <!-- 아이디 -->
            <div class="mb-3">
                <label for="user_id" class="form-label"> 아이디 </label>
                <input
                    type="text"
                    class="form-control"
                    id="user_id"
                    :class="{editable:editStatus}"
                    v-model="userForm.id"
                    disabled
                />
                <div class="undeditable-form" :class="{editable:!editStatus}">
                    {{this.userForm.id}}
                </div>
            </div>

            <!-- 비밀번호 -->
            <div class="mb-3">
                <label for="user_password" class="form-label">비밀번호</label>
                <button class="edit-btn" type="button" data-bs-toggle="modal" data-bs-target="#passwordChange">
                    비밀번호 변경
                </button>
            </div>

            <!-- 이메일 -->
            <div class="mb-3">
                <label for="user_email" class="form-label">이메일</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_email"
                    placeholder="example12@naver.com"
                    :class="{editable:editStatus}"
                    v-model="userForm.email"
                />
                <div class="undeditable-form" :class="{editable:!editStatus}">
                    {{this.userForm.email}}
                </div>
            </div>
            <!-- 이름 -->
            <div class="mb-3">
                <label for="user_name" class="form-label">이름</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_name"
                    placeholder="공백 없이 입력해 주세요."
                    maxlength="6"
                    :class="{editable:editStatus}"
                    v-model="userForm.name"
                />
                <div class="undeditable-form" :class="{editable:!editStatus}">
                    {{this.userForm.name}}
                </div>
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
                    maxlength="13"
                    :class="{editable:editStatus}"
                />
                <div class="undeditable-form" :class="{editable:!editStatus}">
                    {{this.phoneNum}}
                </div>
            </div>

            <!-- 주소 -->
            <div class="row">
                <label for="user_address" class="form-label">주소</label>
                <div class="col-lg-6">
                    <input
                        :class="{editable:editStatus}"
                        type="text"
                        id="postcode"
                        class="form-control postcode-input"
                        disabled
                        v-model="userForm.postcode"
                    />
                    <div class="undeditable-form address-text" :class="{editable:!editStatus}">
                        {{this.userForm.postcode}}
                    </div>
                </div>
                <div class="col-auto">
                    <button @click="address_search" :class="{editable:editStatus}" class="btn btn-md mb-1">
                        주소검색
                    </button>
                </div>
                <div class="post-box" v-if="postOpen">
                    <VueDaumPostcode @complete="oncomplete" />
                </div>
                <div class="mt-2">
                    <input
                        :class="{editable:editStatus}"
                        type="text"
                        class="form-control"
                        disabled
                        id="address"
                        placeholder="우측의 '주소검색' 버튼을 클릭하세요."
                        v-model="userForm.address"
                    />
                    <div class="undeditable-form address-text" :class="{editable:!editStatus}">
                        {{this.userForm.address}}
                    </div>
                </div>
                <div>
                    <input
                        :class="{editable:editStatus}"
                        type="text"
                        class="form-control mt-2"
                        id="detail_address"
                        placeholder="상세 주소를 입력해 주세요."
                        v-model="userForm.detailAddress"
                    />
                    <div class="undeditable-form" :class="{editable:!editStatus}">
                        {{this.userForm.detailAddress}}
                    </div>
                </div>
            </div>

            <div>
                <button v-if="editStatus" class="w-100 mt-5 mb-3 btn btn-md" @click="toggleEditStatus">
                    수정하기
                </button>
                <button v-if="!editStatus" class="w-100 mt-5 mb-3 btn btn-md" @click="updateUser">
                    확인
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

        <!-- Modal -->
        <div class="modal fade" id="passwordChange" data-bs-backdrop="static" tabindex="-1" aria-labelledby="passwordChangeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="passwordChangeLabel">비밀번호 변경</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body inform-inputs modal-inputs">
                        <div v-if="!changeSuccess">
                            <p class="input-title">변경하실 비밀번호를 입력해주세요.</p>
                            <div>
                                <label for="user_password" class="form-label">비밀번호</label>
                                <input
                                    type="password"
                                    placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                                    v-model="newPassword"
                                    class="form-control"
                                />
                                <!-- 비밀번호 확인 -->
                                <label for="re_password" class="form-label"
                                    >비밀번호 확인</label
                                >
                                <input
                                    type="password"
                                    placeholder="입력한 비밀번호를 다시 입력해 주세요."
                                    v-model="userForm.rePassword"
                                    class="form-control"
                                />
                                <p v-if="validateResult" class="validateError">{{validateErrorMsg}}</p>
                            </div>
                        </div>
                        <div v-else class="input-title">
                            <p>{{changeSuccess ? "비밀번호가 변경되었습니다!" : "비밀번호 변경에 실패했습니다. 다시 시도해주세요. "}}</p>
                        </div>
                    </div>
                    <div class="modal-footer inform-inputs">
                        <button type="button" class="btn" data-bs-dismiss="modal" @click="modalReset">{{changeSuccess ? "확인" : "취소"}}</button>
                        <button type="button" class="btn" @click="passwordChange" v-if="!changeSuccess">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { VueDaumPostcode } from "vue-daum-postcode";

/* eslint-disable */
export default {
    name: "MyInform",
    data() {
        return {
            profileImg: require("@/assets/img/user.png"),
            postOpen: false,
            phoneNum: "",
            userForm: {
                id: "",
                password: "",
                rePassword: "",
                email: "",
                name: "",
                postcode: "",
                address: "",
                detailAddress: "",
                profileFile: null
            },
            newPassword: "",
            editStatus: true,
            changeSuccess: false,
            validateResult: false,
            validateErrorMsg: "",
            imgSrc: "",
            profileUrl: "",
            oldProfileFile: null
        };
    },
    components: {
        VueDaumPostcode,
    },
    watch: {
        phoneNum() {
                this.phoneNum = this.phoneNum.replace(/[^0-9]/g, "");
                if (this.phoneNum.length < 4) {
                    return
                } else if(this.phoneNum.length < 8) {
                    this.phoneNum = this.phoneNum.substr(0,3) + "-" + this.phoneNum.substr(3);
                } else if(this.phoneNum.length < 12) {
                    this.phoneNum = this.phoneNum.substr(0,3) + "-" + this.phoneNum.substr(3,4) + "-" + this.phoneNum.substr(7);
                }
        }
    },
    methods: {
        toggleEditStatus(e) {
            e.preventDefault();
            this.editStatus = false;
            console.log(this.$refs.profile);
            this.$refs.profile.disabled="";
            console.log(this.$refs.profile);
        },
        async getUserInform(userId) {
            console.log(userId);
            let res = await this.$axios.post('/api/myinform/get', userId).then(res => {
                console.log(res);
                this.userForm = res.data;
                this.phoneNum = res.data.phone;
                this.profileUrl = res.data.profileUrl;
                // console.log("this.imgSrc = ", this.imgSrc);
            })
        },
        async passwordChange() {
            //비밀번호 체크
            const pattern_blank = /[\s]/g;
            const patten_complete_kor = /[가-힣]/;
            if (pattern_blank.test(this.newPassword) || patten_complete_kor.test(this.newPassword) 
            || this.newPassword.length < 8 || this.newPassword.length > 20) {
                this.validateErrorMsg = "비밀번호는 공백없이 8~20자로 구성해주세요. ";
                this.validateResult = true;
                return;
            }
            if (this.newPassword == this.userForm.rePassword) {
                this.$axios.post('/api/myinform/changepw', {id:this.userForm.id, password:this.newPassword}).then(res => {
                    if (res.data) {
                        this.changeSuccess = true;
                    }
                });
            } else {
                this.validateErrorMsg = "비밀번호가 일치하지 않습니다!";
                this.validateResult = true;
            }
        },
        modalReset() {
            this.$router.go(0);
        },
        profileChange() {
            if (this.$refs.profile.files.length > 0) {
                this.userForm.profileFile = this.$refs.profile.files[0];
                // this.profileImg = URL.createObjectURL(this.$refs.profile.files[0]);
                this.$refs.userProfile.src = URL.createObjectURL(this.$refs.profile.files[0]);
            }
        },
        address_search(e) {
            e.preventDefault();
            this.postOpen = !this.postOpen;
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
        async updateUser(e) {
            e.preventDefault();
            //한글만
            const patten_kor = /^[가-힣]+$/;
            const pattern_email =
                /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
            
            let name = this.userForm.name;
            let phone = this.phoneNum;
            let email = this.userForm.email;

            if (!name || !phone || !email) {
                alert("모든 값을 입력해 주세요");
                return;
            }
            // 이름
            console.log(!patten_kor.test(name));
            if (!patten_kor.test(name)) {
                alert("이름을 확인해 주세요");
                return;
            }
            if (!pattern_email.test(email)) {
                alert("이메일을 확인해 주세요");
                return;
            }
            
            // validation 체크 후 전송
            let userData = new FormData();
            for (const key in this.userForm) {
                userData.append(key, this.userForm[key]);
            }
            userData.delete("rePassword");
            userData.set("phone", this.phoneNum);
            try {
                console.log(userData);
                let res = await this.$axios.post('/api/myinform/updateinform', userData, {
                    headers: {
                        "Content-Type" : "multipart/form-data"
                    }
                });
                console.log(res);
                this.$router.go(0);
            } catch(e) {
                console.log(e);
                alert("회원가입에 실패했습니다. 다시 시도해주세요.");
            }
        }
    },
    mounted() {
        let id = JSON.parse(localStorage.getItem("user")).username;
        console.log(JSON.parse(localStorage.getItem("user")));
        console.log(id);
        this.getUserInform(id);
        console.log(this.userForm);
    },
}
</script>

<style scoped>

    .signup-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 599px;
    }
    .signup-container input {
        height: 40px;
    }
    .signup {
        /* min-width: 500px; */
        width: 480px;
        /* border: 5px solid #a30000; */
        border-radius: 10px;
    }
    .form-label {
        font-weight: 500;
    }
    .label-controll > div > div {
        padding-bottom: 5px;
        height: 20px;
    }
    .signup-inputs {
        display: flex;
        align-items: center;
    }
    .editable {
        display: none;
    }
    .undeditable-form {
        /* display: block; */
        width: 100%;
        padding-bottom: 20px;
        font-weight: 300;
    }
    .address-text {
        padding-bottom: 0px;
    }
    .user-profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 20px 0 20px 30px;
        object-fit: cover;
    }
    .profile-label {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        transform: translateX(-80px);
    }
    .cursordisable {
        cursor: pointer;
    }
    .profile-input {
        display: none;
    }
    .edit-btn {
        width: 100%;
        height: 38px;
        background: white;
        border: #a30000 solid 2px;
        border-radius: 5px;
    }
    .logoPic {
        width: 150px;
        height: 40px;
    }
    .logoPic-flex {
        display: flex;
        justify-content: center;
    }
    .inform-inputs input {
        border-bottom: 2px solid #a30000;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
    .inform-inputs button {
        background: #a30000;
        color: white;
    }
    .modal-inputs {
        padding: 40px 50px 30px 50px;
    }
    .modal-inputs input{
        width: 100%;
        margin-bottom: 30px;
    }
    .validateError {
        text-align: start;
        font-size: 12px;
        font-weight: 300;
        color: #a30000;
        margin-top: -25px;
    }
    .input-title {
        text-align: center;
        padding-bottom: 20px;
        font-size: 17px;
        font-weight: 400;
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
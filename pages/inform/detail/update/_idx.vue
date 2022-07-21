<template>
    <!--    기존 회원이 있을 경우 currentCustomer != null -->
    <div class="container mt-5 pt-5" v-if="inform">
        <div>
            <h5 class="text-center mb-5">여행정보 게시글 수정</h5>
            <br />
        </div>
        <div class="updateTitleInput mb-3">
            <label for="inform-title">제목</label>
            <input
                type="text"
                class="form-control"
                id="inform-title"
                placeholder="제목을 입력해 주세요."
                name="inform-title"
                v-model="inform.title"
            />
        </div>
        <div class="mb-3">
            <label for="text-area">내용</label>
            <div>
                <textarea
                    v-model="inform.content"
                    id="text-area"
                    name="text-area"
                    cols="136"
                    rows="20"
                >
                    내용을 입력해 주세요.
                </textarea>
            </div>
        </div>
        <div class="updateBtn mb-3">
            <button onclick="location.href=`/inform/list`" class="btn">
                취소
            </button>
            <button @click="updateInformDetail" class="btn btn-primary me-3">
                수정
            </button>
        </div>

        <!-- 수정버튼을 클릭후 성공했을때 아래가 보임 -->
        <div class="alert alert-success" role="alert" v-if="message">
            {{ message }}
        </div>
    </div>
</template>

<script>
import InformUploadService from "@/services/InformUploadService";
// 화면 설명 : 회원정보 수정 /삭제 화면

export default {
    name: "edit-inform-detail",
    data() {
        return {
            // 객체 ( 회원정보 )
            inform: null,
            message: "",
        };
    },
    methods: {
        getInform(idx) {
            InformUploadService.get(idx)
                .then((response) => {
                    this.inform = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        updateInformDetail() {
            InformUploadService.update(this.inform.idx, this.inform)
                .then(() => {
                    alert("여행정보 게시글 수정 완료");
                    this.$router.push("/inform/list");
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        this.getInform(this.$route.params.idx);
    },
};
</script>

<style scoped>
.updateTitleInput {
    margin-right: auto;
    width: 100%;
}
.updateBtn {
    display: flex;
    margin-right: auto;
}
.btn {
    background-color: #a30000;
    box-shadow: none;
    color: white;
    border: none;
    font-weight: 300;
    font-size: 14px;
    margin: 2px;
}
</style>

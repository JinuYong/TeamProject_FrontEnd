<template>
    <div>
        <div class="mt-5">
            <h5 class="text-center mb-5">자유게시판 글쓰기</h5>
        </div>

        <div v-if="!submitted">
            <span class="btns">
                <input
                    class="btn"
                    type="button"
                    value="이전"
                    onclick="location.href='/board/list'"
                />
                <button class="btn" @click="upload">등록</button>
            </span>
            <hr />
            <div class="form-group mt-4">
                <label>제목</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="제목을 입력해 주세요."
                    v-model="board.boardTitle"
                />
            </div>
            <div>
                <p>내용</p>
                <textarea
                    cols="147"
                    rows="20"
                    v-model="board.content"
                ></textarea>
            </div>
        </div>

        <div class="container pt-5">
            <h5 class="mb-2">이미지 업로드</h5>
            <h6 class="mb-4">
                ( 파일은 최소 1개 이상 첨부하여야 게시물 등록이 완료됩니다. )
            </h6>
            <!-- row 시작 -->
            <div class="row justify-content-md-left">
                <div class="col-8">
                    <label class="btn btn-default p-0">
                        <!-- 파일 선택상자 -->
                        <input
                            type="file"
                            accept="image/*"
                            ref="file"
                            @change="selectImage"
                        />
                    </label>
                </div>
            </div>
            <!-- row 끝 -->

            <!-- 프로그래스 바 시작-->
            <div v-if="board.currentImage" class="progress">
                <div
                    class="progress-bar progress-bar-info"
                    role="progressbar"
                    :style="{ width: progress + '%' }"
                    :aria-valuenow="progress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {{ progress }}
                </div>
            </div>
            <!-- 프로그래스 바 끝-->

            <!-- 미리보기 이미지 시작-->
            <div v-if="previewImage">
                <div>
                    <img
                        class="preview my-3"
                        :src="previewImage"
                        alt="previewImage"
                    />
                </div>
            </div>
            <!--  미리보기 이미지 끝 -->

            <div v-if="message" class="alert alert-secondary" role="alert">
                {{ message }}
            </div>

            <!-- v-for 시작 -->
            <div
                class="card mt-3"
                v-for="(image, index) in board.imageInfo"
                :key="index"
            >
                <div class="card-header">이미지 번호 : {{ image.fileId }}</div>
                <div class="row">
                    <div class="col-md-5 col-md-offset-0">
                        <figure>
                            <img class="img-thumbnail" :src="image.url" />
                        </figure>
                    </div>
                    <div class="col-md-6 col-md-offset-0 description">
                        <p v-html="image.fileName"></p>
                        <p class="price">{{ image.url }}</p>
                    </div>
                </div>
            </div>
            <!-- v-for 종료 -->
        </div>
    </div>
</template>

<script>
import BoardUploadService from "~/services/BoardUploadService";

/* eslint-disable */
export default {
    name: "write",
    data() {
        return {
            board: {
                idx: null,
                boardTitle: "",
                content: "",
                userIdx: JSON.parse(localStorage.getItem("idx")),
                currentImage: null, // 현재 이미지
                imageInfo: [], // 이미지 정보 객체배열
            },
            submitted: false,
            previewImage: undefined, // 미리보기 이미지
            progress: 0, // 프로그래스바를 위한 변수
            message: "",
        };
    },
    methods: {
        // 이미지를 선택하면 변수에 저장하는 메소드
        selectImage() {
            // 파일선택상자에서 첫번째로 선택한 이미지가 저장됨
            this.board.currentImage = this.$refs.file.files.item(0);
            // 아래는 미리보기 이미지를 위한 주소가 저장됨
            this.previewImage = URL.createObjectURL(this.board.currentImage);
            this.progress = 0;
            this.message = "";
        },
        // 파일 업로드를 위한 메소드
        upload() {
            this.progress = 0;

            // 서버에 이미지 업로드 요청(insert 문 실행)
            BoardUploadService.upload(
                this.board.boardTitle,
                this.board.content,
                JSON.parse(localStorage.getItem("user")).idx,
                this.board.currentImage,
                (event) => {
                    // 파일이 업로드될때 진척상황이 저장됨(%)
                    this.progress = Math.round(
                        (100 * event.loaded) / event.total
                    );
                }
            )
                // 성공하면 then 으로 들어옴(서버에서 응답한 객체)
                .then((response) => {
                    // 서버쪽 응답 메시지 저장
                    // this.message = response.data.message;
                    alert("자유게시판 게시물 작성 완료");
                    this.$router.push("/board/list");
                    // 서버쪽에 insert가 잘되었는지
                    // select문 호출
                    // return UploadService.getFiles();
                    // alert(this.message);
                })
                // 성공하면 then으로 들어옴(서버쪽 객체 받음)
                // .then((image) => {
                //     this.imageInfo = image.data;
                // })
                .catch((err) => {
                    this.progress = 0;
                    this.message = "Could not upload the image!" + err;
                    this.board.currentImage = undefined;
                });
        },
    },
    mounted() {
        console.log(JSON.parse(localStorage.getItem("user")).idx)
    },
    beforeCreate() {
        let userAuth = localStorage.getItem("user");
        console.log(userAuth);
        if (userAuth == null) {
            alert("로그인 후 이용해주세요. ");
            this.$router.push("/login");
        }
    },
};
</script>

<style scoped>
hr {
    background-color: #a30000;
}
.btn {
    border: none;
    background-color: #a30000;
    color: white;
    margin-left: auto;
    /* display: flex; */
}
.btn:active,
.btn:hover .btn:focus {
    background-color: #a30000;
    border: none;
}
.preview {
    max-width: 200px;
}
</style>

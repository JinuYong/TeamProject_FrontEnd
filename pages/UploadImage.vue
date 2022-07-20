<template>
    <div class="container mt-3">
        <!-- TODO: 수정 필요 -->
        <!-- row 시작 -->
        <div class="row justify-content-md-center">
            <div class="col-8">
                <label class="btn btn-default p-0">
                    <!-- id 선택 -->
                    <select v-model:value="itemIdx">
                        <option aria-disabled="true">선택해 주세요</option>
                        <option v-for="item in items" v-show="item.data == null" >
                            {{ item.idx }}
                        </option>
                    </select>
                </label>
                <label class="btn btn-default p-0">
                    <!-- 파일 선택상자 -->
                    <input
                        type="file"
                        accept="image/*"
                        ref="file"
                        @change="selectImage"
                    />
                </label>
                <p v-for="item in items"
                   v-show="itemIdx == item.idx">
                    선택아이템 : {{ item.idx }}, {{ item.title }}
                </p>
            </div>
            <div class="col-4">
                <!-- 서버에 insert 문 호출 -->
                <button
                    class="btn btn-success btn-sm float-right"
                    :disabled="!currentImage"
                    @click="upload"
                >
                    Upload
                </button>
            </div>
        </div>
        <!-- row 끝 -->

        <!-- 프로그래스 바 시작-->
        <div v-if="currentImage" class="progress">
            <div
                class="progress-bar progress-bar-info"
                role="progressbar"
                :style="{ width: progress + '%' }"
                :aria-valuenow="progress"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {{ progress }}%
            </div>
        </div>
        <!-- 프로그래스 바 끝-->

        <!-- 미리보기 이미지 시작-->
        <div v-if="previewImage">
            <div>
                <img class="preview my-3" :src="previewImage" alt=""/>
            </div>
        </div>
        <!--  미리보기 이미지 끝 -->

        <!-- 서버 에러 메세지가 있을경우 아래 출력 -->
        <div v-if="message" class="alert alert-secondary" role="alert">
            {{ message }}
        </div>

        <!-- 쇼핑 카트 형태 디자인 -->
        <!-- v-for 시작 -->
        <div class="card mt-3"
             v-for="(image, index) in imageInfo"
             :key="index"
        >
            <div class="card-header">아이템 번호 : {{ image.itemIdx }}</div>
            <div class="row">
                <div class="col-md-5 col-md-offset-0">
                    <figure>
                        <img class="img-thumbnail" :src="image.url"/>
                    </figure>
                </div>
                <div class="col-md-6 col-md-offset-0 description">
                    <p v-html="image.name"></p>
                    <p class="price">{{ image.url }}</p>
                </div>
            </div>
        </div>
        <!-- v-for 종료 -->

        <!-- list(목록) 이미지 정보를 출력 -->
        <!-- <div class="card mt-3">
          <div class="card-header">List of Image</div>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="(image, index) in imageInfo"
              :key="index"
            >
              <a :href="image.url">{{ image.name }}</a>
            </li>
          </ul>
        </div> -->
    </div>
</template>

<script>

import UploadService from "~/pages/service/UploadFilesService";
import ItemDetailDataService from "~/pages/service/ItemDetailDataService";

export default {
    name: "upload-image",
    data() {
        // 변수 초기화
        return {
            itemIdx: "",
            currentImage: undefined, // 현재이미지
            previewImage: undefined, // 미리보기 이미지
            progress: 0, // 프로그래스바를 위한 변수
            message: "",
            imageInfo: [], // 이미지 정보 객체배열,
            items: [],
            isLoading: false,
        };
    },
    methods: {
        getItemId() {
            this.isLoading = true
          ItemDetailDataService.getItemAll()
              .then(res => {
                  this.items = res.data
                  this.isLoading = false
              })
              .catch(err => {
                  console.log(err)
                  this.isLoading = false
              })
        },
        // 이미지를 선택하면 변수에 저장하는 메소드
        selectImage() {
            // 파일선택상자에서 첫번째로 선택한 이미지가 저장됨
            this.currentImage = this.$refs.file.files.item(0);
            // 아래는 미리보기 이미지를 위한 주소가 저장됨
            this.previewImage = URL.createObjectURL(this.currentImage);
            this.progress = 0;
            this.message = "";
        },
        // 파일 업로드를 위한 메소드
        upload() {
            this.progress = 0;

            // 서버에 이미지 업로드 요청(insert 문 실행)
            UploadService.upload(this.itemIdx, this.currentImage, (event) => {
                // 파일이 업로드될때 진척상황이 저장됨(%)
                this.progress = Math.round((100 * event.loaded) / event.total);
            })
                // 성공하면 then 으로 들어옴(서버에서 응답한 객체)
                .then((response) => {
                    // 서버쪽 응답 메시지 저장
                    this.message = response.data.message;
                    // 서버쪽에 insert가 잘되었는지
                    // select문 호출
                    $nuxt.$router.push('/UploadImage')
                    return UploadService.getFiles();
                })
                // 성공하면 then으로 들어옴(서버쪽 객체 받음)
                .then((image) => {
                    this.imageInfo = image.data;
                })
                // 실패하면 catch으로 들어옴
                // 화면에 실패메세지 출력
                .catch((err) => {
                    this.progress = 0;
                    this.message = "Could not upload the image!" + err;
                    this.currentImage = undefined;
                });

        }
    },
    computed:{

    },
    // 화면이 뜨자마자 실행되는 이벤트
    mounted() {
        this.getItemId();
        // springboot 서버에 이미지파일 요청
        UploadService.getFiles()
            // 성공하면 then에 들어옴(객체, 응답메세지)
            .then((response) => {
                // response.data : 서버쪽에서 전송된 객체
                this.imageInfo = response.data;
            });
    },
};
</script>

<style scoped>
.preview {
    max-width: 200px;
}
</style>

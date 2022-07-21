<template>
    <div class="container">
        <h4 class="page-title">자유 게시판</h4>

        <table class="table table-hover">
            <thead style="text-align: center">
                <tr>
                    <th scope="col" width="5%">번호</th>
                    <th scope="col" width="50%">제목</th>
                    <th scope="col" width="20%" style="text-align: left">
                        작성자
                    </th>
                    <th scope="col" width="15%">날짜</th>
                    <th scope="col" width="10%">조회수</th>
                </tr>
            </thead>
            <tbody v-for="(board, index) in boards" :key="index">
                <tr @click="moveTo(board.idx)">
                    <td style="text-align: center">{{ board.idx }}</td>
                    <td style="text-align: left">{{ board.boardTitle }}</td>
                    <td style="text-align: left">{{ board.id }}</td>
                    <td style="text-align: center">{{ board.insertTime }}</td>
                    <td style="text-align: center">{{ board.count }}</td>
                </tr>
            </tbody>
        </table>

        <div class="writeBtn">
            <input
                class="btn"
                type="button"
                onClick="location.href='/board/write'"
                value="글쓰기"
            />
        </div>

        <hr />
        <div class="handlePages col-md-12">
            <div class="mb-3">
                <select
                    v-model="pageSize"
                    @change="handlePageSizeChange($event)"
                >
                    <option
                        v-for="size in pageSizes"
                        :key="size"
                        :value="pageSize"
                    >
                        {{ size }}
                    </option>
                </select>
                개씩 보기
            </div>
            <!-- page: 현재페이지, count: 총 데이터 건수 -->
            <!-- pageSize: 1페이지 당 개수(건수) -->
            <b-pagination
                class="pagination justify-content-center mt-5 pagingBtn"
                v-model="page"
                :total-rows="count"
                :per-page="pageSize"
                prev-text="이전"
                next-text="다음"
                @change="handlePageChange"
            >
            </b-pagination>
        </div>

        <form class="board-searchbar" role="search">
            <select
                class="form-select form-select-size"
                aria-label="Default select example"
                v-model="selectchanged"
                id="find"
            >
                <option value="1" name="findTitle" id="findTitle">제목</option>
                <option value="2" name="findId" id="findId">작성자</option>
            </select>
            <div class="form-write-size">
                <div v-show="selectchanged == 1">
                    <input
                        type="search"
                        class="form-control .search-input me-2"
                        placeholder="제목검색"
                        v-model="searchTitle"
                    />
                </div>
                <div v-show="selectchanged == 2">
                    <input
                        type="search"
                        class="form-control .search-input me-2"
                        placeholder="작성자검색"
                        v-model="searchId"
                    />
                </div>
            </div>
            <div class="input-group-append">
                <button
                    class="btn form-searchbtn-size"
                    type="button"
                    @click="
                        page = 1;
                        retrieveBoard();
                    "
                >
                    Search
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import BoardUploadService from "../../services/BoardUploadService";

/* eslint-disable */
export default {
    name: "boardlist",
    data() {
        // 변수 초기화
        return {
            selectchanged: 1,
            boards: [],
            // 검색
            searchTitle: "",
            searchId: "",
            // 페이징
            page: 1,
            count: 0,
            pageSize: 10,
            pageSizes: [10, 20, 30],
        };
    },
    methods: {
        moveTo(idx) {
            this.$router.push("/board/detail/" + idx);
        },
        getRequestParams(searchId, searchTitle, page, pageSize) {
            let params = {};

            if (searchId) {
                params["id"] = searchId;
            }
            if (searchTitle) {
                params["boardTitle"] = searchTitle;
            }
            if (page) {
                params["page"] = page - 1;
            }
            if (pageSize) {
                params["size"] = pageSize;
            }
            return params;
        },
        // 모든 회원 조회 서비스 호출
        retrieveBoard() {
            const params = this.getRequestParams(
                this.searchId,
                this.searchTitle,
                this.page,
                this.pageSize
            );
            // axios로 spring에 모든 회원 조회 요청
            BoardUploadService.getAll(params)
                // 성공하면 then으로 서버 데이터 전송
                .then((response) => {
                    console.log("param = ", params);
                    const { boards, totalItems } = response.data;
                    // springboot 받은 객체 정보
                    this.boards = boards;
                    // springboot에서 받은 페이지 총 개수
                    this.count = totalItems;
                })
                // 실패하면 catch로 에러메세지 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        // 역할 : 현재 페이지 번호에 해당하는 데이터 다시 조회
        handlePageChange(value) {
            // 현재 페이지 변경
            this.page = value;
            // 다시 데이터 조회
            this.retrieveBoard();
        },
        // 페이지 사이즈(3,6,9) 변경 시 호출되는 메소드
        handlePageSizeChange(event) {
            this.pageSize = event.target.value; // select박스의 값
            this.page = 1;
            // 재 조회
            this.retrieveBoard();
        },
        SerchValue() {
            if (document.$getElementById("find").value == 1) {
                this.k1 = true;
            } else if (document.$getElementById("find").value == 2) {
                this.k1 = false;
            }
        },
    },
    //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
    mounted() {
        this.retrieveBoard();
        // localStorage.setItem("idx", "141");
        // localStorage.getItem("idx");
    },
};
</script>

<style scoped>
.btn {
    border: none;
    background-color: #a30000;
    color: white;
    /* margin-left: auto; */
    /* display: flex; */
}
.writeBtn {
    margin-left: auto;
}
.pagination-custom {
    margin-top: 80px;
    border-bottom: none;
}
.page-item {
    --bs-pagination-color: #494949;
    --bs-pagination-hover-color: #a30000;
}
.container {
    margin-top: 50px;
}
.page-title {
    text-align: center;
    width: 150px;
    padding-bottom: 10px;
    margin: 0 auto;
    margin-bottom: 80px;
}
th {
    font-weight: 400;
    border-top: 2px solid #959595;
    padding: 15px 10px;
}
tbody {
    font-weight: 300;
    font-size: 16px;
}
td {
    padding: 12px 10px;
}
.board-searchbar {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 400px;
    display: flex;
    position: relative;
}
.form-select-size {
    width: 100px;
    height: 37px;
    margin: 5px;
}
.form-write-size {
    width: 200px;
    margin: 5px;
}
.form-searchbtn-size {
    width: 80px;
    height: 37px;
    margin: 5px;
}
.form-control:focus {
    border-color: lightgray !important;
    box-shadow: none !important;
}
input::placeholder {
    color: #dfdfdf;
    font-weight: 400;
    font-size: 14px;
}
</style>

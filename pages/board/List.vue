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
                    <td style="text-align: left">{{ board.title }}</td>
                    <td style="text-align: left">{{ board.id }}</td>
                    <td style="text-align: center">{{ board.insertTime }}</td>
                </tr>
            </tbody>
        </table>

        <div>
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
                Items per Page:
                <select
                    v-model="pageSize"
                    @change="handlePageSizeChange($event)"
                >
                    <option v-for="size in pageSizes" :key="size" :value="size">
                        {{ size }}
                    </option>
                </select>
            </div>
            <!-- page: 현재페이지, count: 총 데이터 건수 -->
            <!-- pageSize: 1페이지 당 개수(건수) -->
            <b-pagination
                class="pagination justify-content-center mt-5"
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
            <select class="form-select" aria-label="Default select example">
                <option selected>제목/작성자</option>
                <option value="1">제목</option>
                <option value="2">작성자</option>
            </select>
            <input
                type="search"
                class="form-control .search-input me-2"
                placeholder="제목 또는 작성자 입력"
                v-model="searchTitle"
            />
            <input
                type="search"
                class="form-control .search-input me-2"
                placeholder="제목 또는 작성자 입력"
                v-model="searchId"
            />
            <div class="input-group-append">
                <button
                    class="btn"
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
<<<<<<< HEAD
<script>
export default {
    
}
</script>
<style scoped>
    .pagination-custom {
        margin-top: 80px;
        border-bottom: none;
    }
    .page-item {
        --bs-pagination-color: #494949;
        --bs-pagination-hover-color: #A30000;
    }
    .page-link.active {
        background-color: #A30000;
        border-color: #A30000;
    }
    .container {
        padding-top: 50px;
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
    /* table { 
        text-align: center;
    } */
    .board-searchbar {
        margin-left: auto;
        margin-bottom: 10px;
        width: 300px;
        position: relative;
    }
=======
>>>>>>> eaaf329395f3102bd30fda9ad6ae0c865b32e42c

<script>
import BoardDataService from "../../services/BoardDataService";

/* eslint-disable */
export default {
    name: "boardlist",
    data() {
        // 변수 초기화
        return {
            boards: [],
            // 검색
            searchTitle: "",
            searchId: "",
            // 페이징
            page: 1,
            count: 0,
            pageSize: 10,
            pageSizes: [3, 6, 9],
        };
    },
    methods: {
        moveTo(idx) {
            this.$router.push("/board/detail/" + idx);
            console.log(idx);
        },
        getRequestParams(searchId, searchTitle, page, pageSize) {
            let params = {};

            if (searchId) {
                params["id"] = searchId;
            }
            if (searchTitle) {
                params["title"] = searchTitle;
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
            BoardDataService.getAll(params)
                // 성공하면 then으로 서버 데이터 전송
                .then((response) => {
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
    },
    //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
    mounted() {
        this.retrieveBoard();
    },
};
</script>

<style scoped>
.btn {
    border: none;
    background-color: #a30000;
    color: white;
    margin-left: auto;
    display: flex;
}

.pagination-custom {
    margin-top: 80px;
    border-bottom: none;
}
.page-item {
    --bs-pagination-color: #494949;
    --bs-pagination-hover-color: #a30000;
}
.page-link.active {
    background-color: #a30000;
    border-color: #a30000;
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
/* table {
    text-align: center;
} */

.board-searchbar {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 400px;
    display: flex;
    position: relative;
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

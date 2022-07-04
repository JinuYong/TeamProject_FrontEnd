<template>
    <div class="container">
        <h4 class="page-title">자유 게시판</h4>
        <form class="board-searchbar" role="search">
            <input class="form-control .search-input me-2" type="search" placeholder="제목 또는 작성자 입력" aria-label="Search" @keyup="searchKeyword()">
            <img src="@/assets/img/search_icon.png" class="search-icon"/>
        </form>

        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col" width="5%" style="text-align: center;">번호</th>
                <th scope="col" width="50%" style="text-align: center;">제목</th>
                <th scope="col" width="20%" style="text-align: center;">작성자</th>
                <th scope="col" width="15%" style="text-align: center;">날짜</th>
                <th scope="col" width="10%" style="text-align: center;">조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style="text-align: center;">1</td>
                <td>Mark [댓글수]</td>
                <td style="text-align: center;">Otto</td>
                <td style="text-align: center;">2022.06.22</td>
                <td style="text-align: center;">12</td>
                </tr>
                <tr>
                <td style="text-align: center;">2</td>
                <td>Jacob [댓글수]</td>
                <td style="text-align: center;">Thornton</td>
                <td style="text-align: center;">2022.06.22</td>
                <td style="text-align: center;">134</td>
                </tr>
                <tr>
                <td style="text-align: center;">3</td>
                <td>Larry the Bird [댓글수]</td>
                <td style="text-align: center;">Jinu</td>
                <td style="text-align: center;">2022.06.22</td>
                <td style="text-align: center;">231</td>
                </tr>
            </tbody>
        </table>

        <nav aria-label="Page navigation" class="pagination-custom">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link">이전</a>
                </li>
                <li class="page-item"><a class="page-link active" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">다음</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
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

    .form-control:focus {
        border-color:  lightgray !important;
        box-shadow: none !important;
    }
    input::placeholder {
        color: #dfdfdf;
        font-weight: 400;
        font-size: 14px;
    }
</style>
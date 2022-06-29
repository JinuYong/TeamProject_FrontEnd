<template>
    <div class="container">
        <h4>자유 게시판</h4>
        <form class="d-flex board-searchbar" role="search">
            <input class="form-control search-bar me-2" type="search" placeholder="Search" aria-label="Search" @keyup="searchKeyword()">
            <img src="@/assets/img/search_icon.png" class="search-icon"/>
        </form>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">번호</th>
                <th scope="col">제목</th>
                <th scope="col">작성자</th>
                <th scope="col">날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>Jinu</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container {
        margin-top: 50px;
    }
    th {
        font-weight: 400;
    }
    tbody {
        font-weight: 300;
        font-size: 16px;
    }
    .board-searchbar {
        justify-content: end;
        transform: translateX(25px);
        margin-bottom: 10px;
    }
</style>
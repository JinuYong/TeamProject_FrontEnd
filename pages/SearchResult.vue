<template>
    <div class="container">
        <h4 class="page-title">검색 결과</h4>
        <div class="divider-row"></div>

        <div>
            검색결과 리스트
        </div>
        
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
    .divider-row {
        width: 1200px;
        height: 2px;
        background: #959595;
    }
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
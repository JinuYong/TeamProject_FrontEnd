<template>
    <div class="container px-3 my-5 clearfix">
        <!-- Shopping cart table -->
        <div class="card">
            <div class="card-header">
                <h2>장바구니</h2>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered m-0">
                        <thead>
                        <tr>
                            <!-- Set columns width -->
                            <th class="text-center py-3 px-4" style="min-width: 400px;">상품명 &amp; 상품상세</th>
                            <th class="text-right py-3 px-4" style="width: 100px;">가격</th>
                            <th class="text-center py-3 px-4" style="width: 120px;">여행인원</th>
                            <th class="text-right py-3 px-4" style="width: 100px;">총</th>
                            <th class="text-center align-middle py-3 px-0" style="width: 40px;">
                                <a href="#"
                                   class="shop-tooltip float-none text-light"
                                   title=""
                                   data-original-title="Clear cart">
                                <i class="ino ion-md-trash"></i></a></th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td class="p-4">
                                <div class="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                         class="d-block ui-w-40 ui-bordered mr-4" alt="">
                                    <div class="media-body">
                                        <a href="#" class="d-block text-dark">여행상품명을 넣어주세요</a>
                                        <small>
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">355,000원</td>
                            <td class="align-middle py-4 p-2"><input type="text" class="form-control text-center" value="2">
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">3,350,000원</td>
                            <td class="text-center align-middle px-0"><a href="#"
                                                                         class="shop-tooltip close float-none delete-button"
                                                                         title="" data-original-title="Remove">×</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-4">
                                <div class="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                         class="d-block ui-w-40 ui-bordered mr-4" alt="">
                                    <div class="media-body">
                                        <a href="#" class="d-block text-dark">여행상품명을 넣어주세요</a>
                                        <small>
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">355,000원</td>
                            <td class="align-middle py-4 p-2"><input type="text" class="form-control text-center" value="2">
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">3,350,000원</td>
                            <td class="text-center align-middle px-0"><a href="#"
                                                                         class="shop-tooltip close float-none delete-button"
                                                                         title="" data-original-title="Remove">×</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-4">
                                <div class="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                         class="d-block ui-w-40 ui-bordered mr-4" alt="">
                                    <div class="media-body">
                                        <a href="#" class="d-block text-dark">여행상품명을 넣어주세요</a>
                                        <small>
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                            <span class="text-muted">지역: </span> 지역 &nbsp;
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">355,000원</td>
                            <td class="align-middle py-4 p-2"><input type="text" class="form-control text-center" value="2">
                            </td>
                            <td class="text-right font-weight-semibold align-middle py-4 px-1">3,350,000원</td>
                            <td class="text-center align-middle px-0"><a href="#"
                                                                         class="shop-tooltip close float-none delete-button"
                                                                         title="" data-original-title="Remove">×</a>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <!-- / Shopping cart table -->

                <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
                    <div class="mt-4">
                    </div>
                    <div class="d-flex">
                        <div class="text-right mt-4 mr-5">
                            <label class="text-muted font-weight-normal m-0">할인가격</label>
                            <div class="text-large"><strong>455,000원</strong></div>
                        </div>
                        <div class="text-right mt-4">
                            <label class="text-muted font-weight-normal m-0">총 가격</label>
                            <div class="text-large"><strong>3,350,000원</strong></div>
                        </div>
                    </div>
                </div>

                <div class="float-right">
                    <button type="button" class="btn btn-lg btn-hover mt-2 mr-3">쇼핑으로 돌아가기</button>
                    <button type="button" class="btn btn-lg c1 mt-2">결제하기</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingCart"
}
</script>

<style scoped>
body {
    margin-top: 20px;
    background: #eee;
}

.ui-w-40 {
    width: 40px !important;
    height: auto;
}

.card {
    box-shadow: 0 1px 15px 1px rgba(52, 40, 104, .08);
}
.card-header {
    /*color: #A30000;*/
}

.table-bordered {
    border-radius: 3px;
}

/* main color */
.c1 {
    background-color: #A30000;
    color: white;
}
.c2 {
    color: #E5E5E5;
}
.delete-button{
    color: #A30000;
}
</style>

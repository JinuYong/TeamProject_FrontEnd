<template>
    <div class="container px-3 my-5 clearfix">
        <div class="card">
            <div class="card-header">
                <h2>주문/결제</h2>
            </div>
            <div class="card-body">
                <table class="table m-0">
                    <thead>
                    <tr>
                        <!-- Set columns width -->
                        <th class="text-center py-3 px-4" style="min-width: 50%;">상품정보</th>
                        <th class="text-right py-3 px-4" style="width: 15%;">가격</th>
                        <th class="text-center py-3 px-4" style="width: 15%;">여행인원</th>
                        <th class="text-center py-3 px-4" style="width: 20%;">상품금액(할인포함)</th>
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
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                    </small>
                                </div>
                            </div>
                        </td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">400,000원</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">10명</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">
                                <span class="text-decoration-line-through fs-8" style="color:lightgray">
                                    4,000,000원
                                </span>
                            <br>
                            3,350,000원
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
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                    </small>
                                </div>
                            </div>
                        </td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">400,000원</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">10명</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">
                                <span class="text-decoration-line-through fs-8" style="color:lightgray">
                                    4,000,000원
                                </span>
                            <br>
                            3,350,000원
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
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                        <span class="text-muted">content: </span> content &nbsp;
                                    </small>
                                </div>
                            </div>
                        </td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">400,000원</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">10명</td>
                        <td class="text-right font-weight-semibold align-middle py-4 px-1">
                                <span class="text-decoration-line-through fs-8" style="color:lightgray">
                                    4,000,000원
                                </span>
                            <br>
                            3,350,000원
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-md-4 mt-3">
                        <div class="card">
                            <div class="card-header">
                                주문자 정보
                            </div>
                            <div class="card-body" style="height: 205px">
                                <div class="row align-items-center h-100">
                                    <div>
                                        <small>이름입니다</small><br>
                                        <small>010-0000-0000</small><br>
                                        <small>admin@admin.com</small><br>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 mt-3">
                        <div class="card">
                            <div class="card-header">
                                결제상세
                            </div>
                            <div class="card-body">
                                <div class="container">
                                    <small><strong>결제금액 :</strong></small>
                                    <div class="right"><small><strong>3,350,000원</strong></small></div>
                                    <br>
                                    <small style="color: #b6b6b6">ㄴ상품금액</small>
                                    <div class="right" style="color: #b6b6b6"><small>4,000,000원</small></div>
                                    <br>
                                    <small style="color: #b6b6b6">ㄴ할인금액</small>
                                    <div class="right" style="color: #b6b6b6"><small>650,000원</small></div>
                                    <hr>
                                    <small><strong>결제방법 :</strong></small>
                                    <br>
                                    <div class="col-md">
                                        <div class="row">
<!--                                            결제 방법 버튼 -->
                                            <div class="col d-grid gap-2">
                                                <button class="btn c1" type="button">무통장 입금</button>
                                            </div>
                                            <div class="col d-grid gap-2">
                                                <button class="btn gap-2 c1" type="button">무통장 입금</button>
                                            </div>
                                            <div class="col d-grid gap-2">
                                                <button class="btn gap-2 c1" type="button">무통장 입금</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Payment",
    data() {
        return {
            payment: {
                bankBook: false,
                easyPay: false,
                general: false,
            }
        }
    }
}
</script>

<style scoped>

.ui-w-40 {
    width: 60px !important;
    height: auto;
}

.right {
    float: right;
    text-align: right;
}

.c1 {
    border: none;
    background-color: #A30000;
    color: #E5E5E5;
}
.c1:hover{
    background-color: #E5E5E5;
    color: black;
}

.c2 {
    background-color: #E5E5E5;
}
</style>

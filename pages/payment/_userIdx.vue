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
                        <!--                        <th class="text-center py-3" style="min-width: 5%;">-->
                        <!--                            선택-->
                        <!--                        </th>-->
                        <th class="text-center py-3 px-4" style="min-width: 45%;">상품정보</th>
                        <th class="text-center py-3 px-4" style="width: 15%;">가격</th>
                        <th class="text-center py-3 px-4" style="width: 15%;">여행인원</th>
                        <th class="text-center py-3 px-4" style="width: 20%;">상품금액</th>
                    </tr>
                    </thead>
                    <tbody v-for="cart in carts">
                    <tr>
                        <!--                        <td class="px-4 text-center"-->
                        <!--                            style="vertical-align: middle">-->
                        <!--                            <input type="checkbox"-->
                        <!--                            >-->
                        <!--                        </td>-->
                        <td class="p-4">
                            <div class="media align-items-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                     class="d-block ui-w-40 ui-bordered mr-4" alt="">
                                <div class="media-body">
                                    <a href="#" class="d-block text-dark">{{ cart.title }}</a>
                                    <small>
                                        <span class="text-muted">지역: </span>{{ cart.area }}
                                        <span class="text-muted">여행시작: </span>{{ cart.itemDate }}
                                    </small>
                                </div>
                            </div>
                        </td>
                        <td class="text-center font-weight-semibold align-middle py-4 px-1">
                            {{ cart.price * (1 - cart.discountPer / 100)|numberFormat }}원
                            <br>
                            <small class="text-muted">
                                <del>{{ cart.price |numberFormat }}원</del>
                            </small>

                        </td>
                        <td class="text-center font-weight-semibold align-middle py-4 px-1">
                            {{ cart.quntyty }}명
                        </td>
                        <td class="text-center font-weight-semibold align-middle py-4 px-1">
                            {{ cart.price * (1 - cart.discountPer / 100) * cart.quntyty|numberFormat }}원
                            <br>
                            <small class="text-muted">
                                <del>{{ cart.price * cart.quntyty|numberFormat }}원</del>
                            </small>
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
                                        <p>{{ this.user.name }}</p>
                                        <p>{{ this.user.phone }}</p>
                                        <p>{{ this.user.email }}</p>
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
                                    <div class="right h5 mb-0">
                                        <strong>{{ this.totalSalePrice|numberFormat }}원
                                        </strong></div>
                                    <br>
                                    <small style="color: #b6b6b6">ㄴ상품금액</small>
                                    <div class="right" style="color: #b6b6b6">
                                        <small>{{ this.totalPrice|numberFormat }}원</small>
                                    </div>
                                    <br>
                                    <small style="color: #b6b6b6">ㄴ할인금액</small>
                                    <div class="right" style="color: #b6b6b6">
                                        <small>{{ this.totalPricePer|numberFormat }}원</small>
                                    </div>
                                    <hr>
                                    <small><strong>결제 :</strong></small>
                                    <br>
                                    <!--                                    <div class="col-md">-->
                                    <!--                                        <div class="row">-->
                                    <!--                                            &lt;!&ndash;                                            결제 방법 버튼 &ndash;&gt;-->
                                    <!--                                            <div class="col-md-4 text-center">-->
                                    <!--                                                <input type="radio"-->
                                    <!--                                                       v-model="selectPayment"-->
                                    <!--                                                       value="bankBook"-->
                                    <!--                                                       id="bankBook"-->
                                    <!--                                                >-->
                                    <!--                                                <label class="mb-0" for="pay-type">일반결제</label>-->
                                    <!--                                            </div>-->
                                    <!--                                            <div class="col-md-4 text-center">-->
                                    <!--                                                <input type="radio"-->
                                    <!--                                                       v-model="selectPayment"-->
                                    <!--                                                       value="easyPay"-->
                                    <!--                                                       id="easyPay">-->
                                    <!--                                                <label class="mb-0">간편결제</label>-->
                                    <!--                                            </div>-->
                                    <!--                                            <div class="col-md-4 text-center">-->
                                    <!--                                                <input-->
                                    <!--                                                    type="radio"-->
                                    <!--                                                    v-model="selectPayment"-->
                                    <!--                                                    value="generalPay"-->
                                    <!--                                                    id="pay">-->
                                    <!--                                                <label class="mb-0">일반결제</label>-->
                                    <!--                                            </div>-->
                                    <!--                                        </div>-->
                                    <!--                                        <hr>-->
                                    <!--                                        <div class="row">-->
                                    <!--                                            <div class="col" v-show="selectPayment=='bankBook'">-->
                                    <!--                                                <div class="container b">-->
                                    <!--                                                    <button type="button"-->
                                    <!--                                                            class="btn btn-lg main-hover"-->
                                    <!--                                                            @click="requestPayKcp">-->
                                    <!--                                                        결제하기-->
                                    <!--                                                    </button>-->
                                    <!--                                                </div>-->
                                    <!--                                            </div>-->
                                    <!--                                            <div class="col" v-show="selectPayment=='easyPay'">-->
                                    <!--                                                <div class="container b">-->
                                    <!--                                                    <button type="button"-->
                                    <!--                                                            class="btn btn-lg main-hover"-->
                                    <!--                                                            @click="requestPayKakao()">-->
                                    <!--                                                        결제하기-->
                                    <!--                                                    </button>-->
                                    <!--                                                </div>-->
                                    <!--                                            </div>-->
                                    <!--                                            <div class="col" v-show="selectPayment=='generalPay'">일반결제 선택시 보여집니다.</div>-->
                                    <!--                                        </div>-->
                                    <!--                                    </div>-->
                                    <br>
                                    <div class="row">
                                        <div class="col">
                                            <div class="container text-right">
                                                <button type="button"
                                                        class="btn btn-mi w-100 main-hover"
                                                        @click="requestPayKcp">
                                                    결제하기
                                                </button>
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
        <!--        <script>-->
        <!--            IMP.init("imp54677160");-->

        <!--            function requestPayKakao() {-->
        <!--                IMP.request_pay({-->
        <!--                    pg: 'kakaopay',-->
        <!--                    pay_method: 'card',-->
        <!--                    merchant_uid: 'omymTour_' + new Date().getTime(),-->
        <!--                    name: this.payData.name,-->
        <!--                    amount: this.payData.amount,-->
        <!--                    buyer_email: this.user.email,-->
        <!--                    buyer_name: this.user.name,-->
        <!--                    buyer_tel: this.user.phone,-->
        <!--                    buyer_addr: this.user.address,-->
        <!--                    buyer_postcode: this.user.postcode-->
        <!--                }, function (rsp) { // callback-->
        <!--                    if (rsp.success) {-->
        <!--                        console.log(rsp);-->
        <!--                    } else {-->
        <!--                        console.log(rsp);-->
        <!--                    }-->
        <!--                });-->
        <!--            }-->
        <!--        </script>-->
    </div>
</template>

<script>
import ShoppingCartDataService from "~/pages/service/ShoppingCartDataService";
import UserDataService from "~/pages/service/UserDataService";

export default {
    name: "Payment",
    data() {
        return {
            selectPayment: "bankBook",
            carts: [],
            user: [],
            title: "",
            payData: {
                name: "",
                amount: 0
            }
        }
    },
    methods: {
        getUserCart(userIdx) {
            ShoppingCartDataService.getUserCart(userIdx)
                .then(response => {
                    this.carts = response.data;
                    // springboot에서 받은 총 데이터 건수
                    // this.count = totalItems;
                    this.payData.name = this.carts[0].title
                    this.title = this.carts[0].title

                    console.log(this.carts)
                })
                .catch(err => {
                    console.log(err)
                    alert(err)
                })
        },
        getUserData(userIdx) {
            UserDataService.getUser(userIdx)
                .then(response => {
                    this.user = response.data;
                    // springboot에서 받은 총 데이터 건수
                    // this.count = totalItems;
                })
                .catch(err => {
                    console.log(err)
                    alert(err)
                })
        },
        requestPayKcp() {
            console.log(this.title)
            console.log(this.title)
            IMP.request_pay({
                pg: 'html5_inicis',
                pay_method: 'card',
                merchant_uid: 'omymTour_' + new Date().getTime(),
                name: this.payDataName,
                amount: this.totalSalePrice,
                buyer_email: this.user.email,
                buyer_name: this.user.name,
                buyer_tel: this.user.phone,
                buyer_addr: this.user.address,
                buyer_postcode: this.user.postcode,
                m_redirect_url: 'https://example.com/mobile/complete', // 모바일 결제시 사용할 url
                digital: true, // 실제 물품인지 무형의 상품인지(핸드폰 결제에서 필수 파라미터)
                app_scheme: '' // 돌아올 app scheme
            }, function (rsp) { // callback
                if (rsp.success) {
                    console.log(rsp);
                } else {
                    console.log(rsp);
                }
            });
        }
    },
    filters: {
        numberFormat: (value, numFix) => {
            value = parseFloat(value);
            if (!value) return '0';
            return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
    },
    computed: {
        totalPrice() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                const cart = this.carts[i];
                sum += cart.price * cart.quntyty
            }
            return sum;
        },
        totalSalePrice() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                const cart = this.carts[i];
                sum += cart.price * cart.quntyty * (1 - cart.discountPer / 100)
            }
            return sum;
        },
        totalPricePer() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                const cart = this.carts[i];
                sum += cart.price * cart.quntyty * (cart.discountPer / 100)
            }
            return sum;
        },
        // payData에 들어갈 name, amount 변수값 설정
        payDataName() {
            if (this.carts.length > 1) {
                // name 설정
                return this.payData.name + ' 외 ' + (this.carts.length - 1) + '건';
            } else {
                // name 설정
                return this.title + "결제";
            }
        }
    },
    mounted() {
        console.log("userIdx : " + this.$route.params.userIdx)
        // 유저의 카트내역 표시
        this.getUserCart(this.$route.params.userIdx);
        // 유저정보
        this.getUserData(this.$route.params.userIdx);

        // 아임포트 초기화
        IMP.init("imp54677160");
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

.c1:hover {
    background-color: #E5E5E5;
    color: black;
}

.c2 {
    background-color: #E5E5E5;
}

/* .qahead {
    font-size: 50px;
    font-weight: 330;
} */

button {
    border-radius: 0px;
}

button:active {
    outline: none;
}

.main-hover {
    background-color: #A30000;
    color: #ffffff;
}

.main-hover:hover {
    background-color: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: black;
}
</style>

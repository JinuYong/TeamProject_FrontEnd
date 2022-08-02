<template>
    <div class=" px-3 my-5 clearfix">
        <div class="card">
            <div class="card-header">
                <h2>주문/결제</h2>
            </div>
            <div class="card-body">
                <table class="table m-0">
                    <thead>
                    <tr>
                        <th class="text-center py-3 px-4" style="width: 45%;">상품정보</th>
                        <th class="text-center py-3 px-4" style="width: 15%;">가격</th>
                        <th class="text-center py-3 px-4" style="width: 15%;">여행인원</th>
                        <th class="text-center py-3 px-4" style="width: 20%;">상품금액</th>
                    </tr>
                    </thead>
                    <tbody v-show="!carts">
                    <tr>
                        <td class="text-center">선택한 상품이 없습니다.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                    <tbody v-for="cart in carts" v-show="carts">
                    <tr>
                        <!--                        <td class="px-4 text-center"-->
                        <!--                            style="vertical-align: middle">-->
                        <!--                            <input type="checkbox"-->
                        <!--                            >-->
                        <!--                        </td>-->
                        <td class="p-4">
                            <div class="media align-items-center">
                                <img src="@/assets/img/itemDetails/review_1.jpg"
                                     class="d-block ui-w-40 ui-bordered mr-4" alt="">
                                <div class="media-body">
                                    <p href="#" class="d-block text-dark">{{ cart.title }}</p>
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
                                <div class="">
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
                                    <div class="row">
                                        <div class="col">
                                            <div class="container text-right">
                                                <button type="button"
                                                        class="btn btn-mi w-100 main-hover"
                                                        @click="BootPay"
                                                >
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
    </div>
</template>

<script>
import ShoppingCartDataService from "~/pages/service/ShoppingCartDataService";
import UserDataService from "~/pages/service/UserDataService";
import {Bootpay} from '@bootpay/client-js'


export default {

    name: "Payment",
    data() {
        return {
            selectPayment: "bankBook",
            carts: [],
            user: [],
            title: "",
            userIdx: 0,
            cartIdx: 0,
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
                    // if (response.data.length > 1) {
                    //     this.payData.name =
                    //         response.data[0].title + " 외" + response.data.length +"건"
                    // } else {
                    //     this.payData.name = response.data.title
                    // }
                    this.payData.name = response.data[0].title
                    this.title = this.carts[0].title
                    this.cartIdx = this.carts[0].idx

                    console.log(this.carts)
                })
                .catch(err => {
                    console.log(err)
                    alert("결제할 상품이 없습니다.")
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
        BootPay: async function () {
            try {
                const response = await Bootpay.requestPayment({
                    "application_id": "62cb877ee38c3000245afd26",
                    "price": 100,
                    "order_name": this.payDataName,
                    "order_id": 'omymTour_' + new Date().getTime(),
                    "pg": "케이씨피",
                    "method": "카드",
                    "tax_free": 0,
                    "user": {
                        "id": this.user.id,
                        "username": this.user.name,
                        "phone": this.user.phone,
                        "email": this.user.email
                    },
                    "items": [
                        {
                            "id": this.cartIdx,
                            "name": this.payDataName,
                            "qty": 1,
                            "price": 100
                        }
                    ],
                    "extra": {
                        "open_type": "iframe",
                        "card_quota": "0,2,3",
                        "escrow": false
                    }
                })
                if (response.event === 'issued') {// 가상계좌 입금 완료 처리
                } else if (response.event === 'done') {
                    // 결제 완료 처리
                    console.log("response:" + response)
                    this.$router.push({path: ("/CheckPayment")})
                    // 결제 완료 처리
                    // todo: 결제완료 아이템 카트에서 제거

                    ShoppingCartDataService.deleteUserCartAll(this.user.idx)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.log(err + " 1")
                        })
                } else if (response.event === 'confirm') {
                    //payload.extra.separately_confirmed = true; 일 경우 승인 전 해당 이벤트가 호출됨
                    console.log(response.receipt_id);
                    /**
                     * 1. 클라이언트 승인을 하고자 할때
                     * // validationQuantityFromServer(); //예시) 재고확인과 같은 내부 로직을 처리하기 한다.
                     */

                    const confirmedData = await Bootpay.confirm() //결제를 승인한다
                    if (confirmedData.event === 'done') {
                        alert("결제 완료 처리")
                        console.log(response)
                        // 결제 완료 처리
                        // todo: 결제완료 아이템 카트에서 제거

                        ShoppingCartDataService.deleteUserCartAll(this.user.idx)
                            .then(res => {
                                console.log(res)
                                this.$router.push({path: ("/CheckPayment")})
                            })
                            .catch(err => {
                                console.log(err + " 2")
                            })
                    } else if (confirmedData.event === 'error') {
                        //결제 승인 실패
                        console.log(response)
                        alert("오류가 발생하였습니다. 다시 시도해 주세요.")
                        this.$router.push({path: ("/payment/:userIdx?")})
                    }

                    /**
                     * 2. 서버 승인을 하고자 할때
                     * // requestServerConfirm();
                     * //예시) 서버 승인을 할 수 있도록  API를 호출한다. 서버에서는 재고확인과 로직 검증 후 서버승인을 요청한다.
                     * Bootpay.destroy(); //결제창을 닫는다.
                     */
                }
            } catch (e) {
                // 결제 진행중 오류 발생
                // e.error_code - 부트페이 오류 코드
                // e.pg_error_code - PG 오류 코드
                // e.message - 오류 내용
                // console.log(e.message)
                switch (e.event) {
                    case 'cancel':
                        // 사용자가 결제창을 닫을때 호출
                        console.log(e.message);
                        alert(e.message)
                        break
                    case 'error':
                        // 결제 승인 중 오류 발생시 호출
                        console.log(e.error_code);
                        alert(e.error_code)
                        break
                }
            }
        },


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
        // console.log("userIdx : " + this.$route.params.userIdx)
        // 유저의 카트내역 표시
        this.getUserCart(JSON.parse(localStorage.getItem("user")).idx);
        // 유저정보
        this.getUserData(JSON.parse(localStorage.getItem("user")).idx);

    },
    beforeCreate() {
        let userAuth = localStorage.getItem("user");
        console.log(userAuth);
        if (userAuth == null) {
            alert("로그인 후 이용해주세요. ");
            this.$router.push("/login");
        }
    },
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

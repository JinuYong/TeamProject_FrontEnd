<template>
    <div class=" px-3 my-5 clearfix">
        <!-- Shopping cart table -->
        <div class="card">
            <div class="card-header">
                <h2>장바구니</h2>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table m-0">
                        <thead>
                        <tr>
                            <!-- Set columns width -->
                            <th class="text-center py-3 px-4" style="min-width: 350px;">상품명 &amp; 상품상세</th>
                            <th class="text-center py-3 px-4" style="width: 100px;">가격</th>
                            <th class="text-center py-3 px-4" style="width: 120px;">여행인원</th>
                            <th class="text-center py-3 px-4" style="width: 110px;">총</th>
                            <th class="text-center align-middle py-3 px-0" style="width: 40px;">
                                <a href="#"
                                   class="shop-tooltip float-none text-light"
                                   title=""
                                   data-original-title="Clear cart">
                                    <i class="ino ion-md-trash"></i></a></th>
                        </tr>
                        </thead>

                        <tbody v-show="!carts">
                        <tr>
                            <td class="text-center">카트에 상품이 없습니다.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                        <tbody v-for="(cart, index) in carts"
                               :key="index"
                               v-show="carts">
                        <tr>
                            <td class="p-4">
                                <div class="media align-items-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
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
                                {{ cart.price * (1 - cart.discountPer/100)|numberFormat }}원
                                <small class="text-muted">
                                    <del>{{ cart.price |numberFormat }}원</del>
                                </small>

                            </td>
                            <td class="align-middle">
                                <ul class="my-0">
                                    <li>
                                        <div class="input-group input-group-sm">
                                            <button
                                                class="input-group-text input-click"
                                                id="inputGroup-sizing-sm"
                                                @click="itemQuntytyRe(cart)"
                                            >-
                                            </button>
                                            <input type="text" class="input-count"
                                                   aria-label="Sizing example input"
                                                   aria-describedby="inputGroup-sizing-sm"
                                                   size="2"
                                                   :value="cart.quntyty">
                                            <button class="input-group-text input-click"
                                                    id="inputGroup-sizing-sm"
                                                    @click="itemQuntytyAdd(cart)"
                                            >+
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                            <td class="text-center font-weight-semibold align-middle py-4 px-1">
                                {{ cart.price * (1 - cart.discountPer/100) * cart.quntyty|numberFormat }}원
                                <small class="text-muted">
                                    <del>{{ cart.price * cart.quntyty|numberFormat }}원</del>
                                </small>
                            </td>
                            <td class="text-center align-middle px-0">
                                <button
                                    @click="delCartItem(cart.idx)"
                                    class="shop-tooltip close float-none delete-button"
                                    title="" data-original-title="Remove">×
                                </button>
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
                            <div class="text-large h5">
                                <strong>
                                    {{ this.totalPricePer|numberFormat }}
                                </strong>
                            </div>
                        </div>
                        <div class="text-right mt-4">
                            <label class="text-muted font-weight-normal m-0">총 가격</label>
                            <div class="text-large h5">
                                <strong>
                                    {{ this.totalPrice|numberFormat }}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="float-right">
                    <a class="mt-2 mr-3" href="javascript:history.back(-1);">
                        <button type="button" class="btn btn-lg btn-hover">
                            쇼핑으로 돌아가기
                        </button>
                    </a>

                    <router-link :to="'/payment/' + this.userIdx">
                        <button type="button"
                               class="btn btn-lg main-hover">
                        결제하기
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShoppingCartDataService from "~/pages/service/ShoppingCartDataService";

export default {
    name: "ShoppingCart",
    data() {
        return {
            // DB에 자료가 들어갈 빈 배열
            carts: [],
            userIdx: 0,
        }
    },

    methods: {
        // UserCart 불러오기
        retrieveCart(idx) {
            ShoppingCartDataService.getUserCart(idx)
                .then(response => {
                    this.carts = response.data;
                    // springboot에서 받은 총 데이터 건수
                    // this.count = totalItems;
                    this.userIdx = this.carts[0].userIdx;
                })
                .catch(err => {
                    console.log(err)
                })
        },

        // cart item 삭제
        delCartItem(idx) {
            ShoppingCartDataService.deleteUserCart(idx)
                .then(res => {
                    this.carts = res.data
                    this.retrieveCart()
                    this.$router.push({name: "shoppingCart-ShoppingCart"})
                })
                .catch(err => {
                    alert(err)
                })
        },
        // 카트에서 아이템 quntyty -1 후 update
        itemQuntytyRe(cart) {
            if (cart.quntyty > 1)
                cart.quntyty -= 1;

            ShoppingCartDataService.update(cart.idx, cart)
            //     .then(res => {
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         alert("문제가 발생하였습니다." + err)
            //     })
            // console.log(cart)
        },
        // 카트에서 아이템 quntyty +1 후 update
        itemQuntytyAdd(cart) {
            if (cart.quntyty < 99)
                cart.quntyty += 1;

            ShoppingCartDataService.update(cart.idx, cart)
            //     .then(res => {
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         alert("문제가 발생하였습니다." + err)
            //     })
            // console.log(cart)
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
                sum += cart.price * cart.quntyty * (1 - cart.discountPer/100)
            }
            return sum;
        },
        totalPricePer() {
            let sum = 0;
            for (let i = 0; i < this.carts.length; i++) {
                const cart = this.carts[i];
                sum += cart.price * cart.quntyty * (cart.discountPer/100)
            }
            return sum;
        },
    },
    mounted() {
        this.retrieveCart(JSON.parse(localStorage.getItem("user")).idx)
        console.log("userIdx 값 확인", JSON.parse(localStorage.getItem("user")).idx)
        let userAuth = localStorage.getItem("user");
        console.log(userAuth);
        if (userAuth == null) {
            alert("로그인 후 이용해주세요. ");
            this.$router.push("/login");
        }
    }
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

.delete-button {
    color: #A30000;
}

ul {
    padding: 0;
    display: table;
    margin-left: auto;
    margin-right: auto;
}

li {
    list-style: none;
}

.input-count {
    text-align: center;
    border: 1px solid lightgray;
    width: 30px;
}

.btn {
    border-radius: 0px;
}

.btn-hover:active {
    border: none;
}

.btn-hover:hover {
    border: 1px solid #A30000;
    color: #A30000;
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

.input-click {
    cursor: pointer;
}

.stop-dragging {
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>

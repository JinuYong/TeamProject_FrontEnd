<template>
    <!-- Related items section-->
    <div class="py-3">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="h5 mb-4">관련여행상품 추천</div>
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <a href="/tourItemDetails/TourItemDetail">
                        <div class="card h-80 item-card">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute"
                                 style="top: 0.5rem; right: 0.5rem">
                                Sale
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                                 alt="..."/>
                            <!-- Product details-->
                            <div class="card-body p-3">
                                <div class="text-left">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">여행지 입니다</h5>
                                    <p class="fw">여행내용 입니다</p>

                                    <ul style="float: left; margin: 0">
                                        <li>&nbsp;</li>
                                        <li>
                                            <p class="badge rounded-pill bg-c1 m-0">지역</p>
                                        </li>
                                    </ul>
                                    <!-- Product price-->
                                    <ul style="float: right; margin: 0; padding: 0">
                                        <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                        </li>
                                        <li>
                                            <span class="b-sidebar-right">₩175,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                <div class="col mb-5">
                    <div class="card h-80 item-card">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute"
                             style="top: 0.5rem; right: 0.5rem">
                            Sale
                        </div>
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                             alt="..."/>
                        <!-- Product details-->
                        <div class="card-body p-3">
                            <div class="text-left">
                                <!-- Product name-->
                                <h5 class="fw-bolder">여행지 입니다</h5>
                                <p class="fw">여행내용 입니다</p>

                                <ul style="float: left; margin: 0">
                                    <li>&nbsp;</li>
                                    <li>
                                        <p class="badge rounded-pill bg-c1 m-0">지역</p>
                                    </li>
                                </ul>
                                <!-- Product price-->
                                <ul style="float: right; margin: 0; padding: 0">
                                    <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                    </li>
                                    <li>
                                        <span class="b-sidebar-right">₩175,000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-80 item-card">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute"
                             style="top: 0.5rem; right: 0.5rem">
                            Sale
                        </div>
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                             alt="..."/>
                        <!-- Product details-->
                        <div class="card-body p-3">
                            <div class="text-left">
                                <!-- Product name-->
                                <h5 class="fw-bolder">여행지 입니다</h5>
                                <p class="fw">여행내용 입니다</p>

                                <ul style="float: left; margin: 0">
                                    <li>&nbsp;</li>
                                    <li>
                                        <p class="badge rounded-pill bg-c1 m-0">지역</p>
                                    </li>
                                </ul>
                                <!-- Product price-->
                                <ul style="float: right; margin: 0; padding: 0">
                                    <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                    </li>
                                    <li>
                                        <span class="b-sidebar-right">₩175,000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-80 item-card">
                        <!-- Sale badge-->
                        <div class="badge bg-dark text-white position-absolute"
                             style="top: 0.5rem; right: 0.5rem">
                            Sale
                        </div>
                        <!-- Product image-->
                        <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                             alt="..."/>
                        <!-- Product details-->
                        <div class="card-body p-3">
                            <div class="text-left">
                                <!-- Product name-->
                                <h5 class="fw-bolder">여행지 입니다</h5>
                                <p class="fw">여행내용 입니다</p>

                                <ul style="float: left; margin: 0">
                                    <li>&nbsp;</li>
                                    <li>
                                        <p class="badge rounded-pill bg-c1 m-0">지역</p>
                                    </li>
                                </ul>
                                <!-- Product price-->
                                <ul style="float: right; margin: 0; padding: 0">
                                    <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                    </li>
                                    <li>
                                        <span class="b-sidebar-right">₩175,000</span>
                                    </li>
                                </ul>
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
    name: "CardSliderCom"
}
</script>

<style scoped>

/* 공통 */
ul {
    padding: 0;
    display: table;
    margin-left: auto;
    margin-right: auto;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

a.btn-link {
    float: left;
}

.bg-c1 {
    background-color: #A30000;
}

a {
    color: black;
}

.item-card:hover {
    margin-top: -4px;
    -webkit-box-shadow: -4px 9px 40px -12px black;
    -moz-box-shadow: -4px 9px 40px -12px black;
    box-shadow: -4px 9px 40px -12px black;
    transition-duration: 0.5s;
}

.item-card:not(:hover) {
    transition-duration: 0.5s;
}

</style>

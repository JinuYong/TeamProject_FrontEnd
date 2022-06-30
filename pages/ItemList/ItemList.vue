<template>
    <div class="container"> <!-- 부모 div Start -->
        <!--    carousel start-->
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/img/ItemListImage/ItemListImg1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/ItemListImage/ItemListImg2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/ItemListImage/ItemListImg4.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <!--    carousel end-->

        <!--    지역 카테고리 start-->
        <div class="container mt-4 border">
            <div class="col m-4 text-center">
                <div class="button-group">
                    <span class="area-title">지역</span><span class="divider"></span>
                    <button type="button" class="btn btn-outline area-btn">전체</button>
                    <button type="button" class="btn btn-outline area-btn">서울</button>
                    <button type="button" class="btn btn-outline area-btn">부산</button>
                    <button type="button" class="btn btn-outline area-btn">제주</button>
                    <button type="button" class="btn btn-outline area-btn">광주</button>
                    <button type="button" class="btn btn-outline area-btn">포항</button>
                    <button type="button" class="btn btn-outline area-btn">전주</button>
                    <button type="button" class="btn btn-outline area-btn">대구</button>
                    <button type="button" class="btn btn-outline area-btn">기타</button>
                </div>
            </div>
        </div>
        <!--    지역 카테고리 end-->


        <div class="mt-4"> <!-- 조회 | 리뷰 | 가격 Start-->
            <div class="text-right">
                <a href="#" class="link-secondary">조회순 | </a>
                <a href="#" class="link-secondary">리뷰많은순 | </a>
                <a href="#" class="link-secondary">가격낮은순</a>
            </div>
        </div> <!-- 조회 | 리뷰 | 가격 End-->

        <br>

        <div class="mb-4"> <!-- Card start#1 -->
            <div class="row">
                <div class="col"> <!-- 1번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3"> <!-- 카드 크기고정 + img 태그 class= embed-responsive-item -->
                            <img src="@/assets/img/ItemListImage/ItemListImg1.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">서울</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 1번 상품 End -->

                <div class="col"> <!-- 2번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg2.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">부산</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 2번 상품 End -->

                <div class="col"> <!-- 3번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg3.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">대구</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 3번 상품 End -->

                <div class="col"> <!-- 4번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg4.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">울산</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 4번 상품 End -->
            </div>
        </div> <!-- Card end#1 -->

        <div class="mt-4"> <!-- Card start#2-->
            <div class="row">
                <div class="col"> <!-- 5번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg4.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">포항</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 5번 상품 End -->

                <div class="col"> <!-- 6번 상품 Start -->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg3.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">전주</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 6번 상품 End -->

                <div class="col"> <!-- 7번 상품 Start-->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg2.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">광주</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 7번 상품 End-->


                <div class="col"> <!-- 8번 상품 Start-->
                    <div class="card" style="width: 14rem;">
                        <div class="embed-responsive embed-responsive-4by3">
                            <img src="@/assets/img/ItemListImage/ItemListImg1.jpg" class="card-img-top embed-responsive-item" alt="...">
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">Title</h6>
                            <p class="card-text">Content</p>
                            <div class="position-relative">
                                <div class="badge rounded-pill bg-light text-dark">서울</div>
                                <div class="position-absolute bottom-100 end-0 badge bg-dark">Price</div>
                                <div class="position-absolute bottom-0 end-0 badge bg-dark">
                                    Sale Price
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- 8번 상품 End-->
            </div>
        </div> <!-- Card end#2 -->

        <div class="container"> <!--    footer start-->

        </div> <!--    footer end-->
    </div> <!-- 부모 div End -->
</template>

<script>
/*eslint-disable*/

export default {
    name: "item"
}


</script>

<style scoped>

.btn-outline {
    background-color: #A30000;
    color: #ffffff;
}
.button-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-width: 500px;
    gap: 0.5rem;
}
.divider {
    width: 1px;
    height: 30px;
    background: #454545;
    margin: 0 20px;
}
.area-title {
    font-weight: bold;
}
.area-btn {
    margin-right: 35px;
    font-size: 14px;
    border-radius: 30px 30px;
}


/* .btn-outline:hover {
    outline-color: #E5E5E5;
} */
</style>

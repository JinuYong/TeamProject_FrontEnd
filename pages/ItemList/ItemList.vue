<template>
  <div> <!-- 부모 div Start -->
<!--    carousel start-->
    <div id="carouselExampleCaptions" class="container carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="d-block w-100" alt="...">
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

    <!--    content start-->
    <div class="container mt-4">
      <div class="row">
        <div class="row align-items-center btn-group" role="group" aria-label="Basic outlined example">
          <div class="col">
            지역
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">전체</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">서울</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">부산</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">대구</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">울산</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">포항</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">전주</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">광주</button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-primary">기타</button>
          </div>
        </div>
      </div>
    </div>
    <!--    content end-->


    <div class="container mt-5"> <!-- 조회 | 리뷰 | 가격 Start-->
      <div class="btn-group" style="float:right;" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary">조회순</button>
        <button type="button" class="btn btn-outline-primary">리뷰많은순</button>
        <button type="button" class="btn btn-outline-primary">가격낮은순</button>
      </div>
    </div> <!-- 조회 | 리뷰 | 가격 End-->

  <br>

  <div class="container mt-5"> <!-- Card start#1 -->
    <div class="row">
      <div class="col"> <!-- 1번 상품 Start -->
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
        <div class="card" style="width: 18rem;">
          <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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

    <div class="container mt-4"> <!-- Card start#2-->
      <div class="row">
        <div class="col"> <!-- 5번 상품 Start -->
          <div class="card" style="width: 18rem;">
            <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
          <div class="card" style="width: 18rem;">
            <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
          <div class="card" style="width: 18rem;">
            <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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
          <div class="card" style="width: 18rem;">
            <img src="@/assets/img/ItemListImage/Image1.jpg" class="card-img-top" alt="...">
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

</style>

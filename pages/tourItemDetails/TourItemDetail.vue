<template>
  <div>
    <div class="container">
      <hr>
      <div class="card">
        <div class="row">
          <aside class="col-sm-5 border-right">
            <article class="gallery-wrap">
              <div class="img-big-wrap">
                <div> <a href="#"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg"></a></div>
              </div> <!-- slider-product.// -->
              <div class="img-small-wrap">
                <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"> </div>
                <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"> </div>
                <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"> </div>
                <div class="item-gallery"> <img src="https://s9.postimg.org/tupxkvfj3/image.jpg"> </div>
              </div> <!-- slider-nav.// -->
            </article> <!-- gallery-wrap .end// -->
          </aside>
          <aside class="col-sm-7">
            <article class="card-body p-5">
              <h3 class="title mb-3">Original Version of Some product name</h3>

              <p class="price-detail-wrap">
	<span class="price h3 text-warning">
		<span class="currency">US $</span><span class="num">1299</span>
	</span>
                <span>/per kg</span>
              </p> <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>Description</dt>
                <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco </p></dd>
              </dl>
              <dl class="param param-feature">
                <dt>Model#</dt>
                <dd>12345611</dd>
              </dl>  <!-- item-property-hor .// -->
              <dl class="param param-feature">
                <dt>Color</dt>
                <dd>Black and white</dd>
              </dl>  <!-- item-property-hor .// -->
              <dl class="param param-feature">
                <dt>Delivery</dt>
                <dd>Russia, USA, and Europe</dd>
              </dl>  <!-- item-property-hor .// -->

              <hr>
              <div class="row">
                <div class="col-sm-5">
                  <dl class="param param-inline">
                    <dt>Quantity: </dt>
                    <dd>
                      <select class="form-control form-control-sm" style="width:70px;">
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                      </select>
                    </dd>
                  </dl>  <!-- item-property .// -->
                </div> <!-- col.// -->
                <div class="col-sm-7">
                  <dl class="param param-inline">
                    <dt>Size: </dt>
                    <dd>
                      <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <span class="form-check-label">SM</span>
                      </label>
                      <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <span class="form-check-label">MD</span>
                      </label>
                      <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <span class="form-check-label">XXL</span>
                      </label>
                    </dd>
                  </dl>  <!-- item-property .// -->
                </div> <!-- col.// -->
              </div> <!-- row.// -->
              <hr>
              <a href="#" class="btn btn-lg btn-primary text-uppercase"> Buy now </a>
              <a href="#" class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Add to cart </a>
            </article> <!-- card-body.// -->
          </aside> <!-- col.// -->
        </div> <!-- row.// -->
      </div> <!-- card.// -->


    </div>
    <!--container.//-->


    <br><br><br>
    <article class="bg-secondary mb-3">
      <div class="card-body text-center">
        <h4 class="text-white">HTML UI KIT <br> Ready to use Bootstrap 4 components and templates </h4>
        <p class="h5 text-white"> for Ecommerce, marketplace, booking websites
          and product landing pages</p>   <br>
        <p><a class="btn btn-warning" target="_blank" href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com
          <i class="fa fa-window-restore "></i></a></p>
      </div>
      <br><br><br>
    </article>

    <!-- Related items section-->
    <section class="py-5 bg-light">
      <div class="container px-4 px-lg-5 mt-5">
        <h2 class="fw-bolder mb-4">Related products</h2>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Product image-->
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Fancy Product</h5>
                  <!-- Product price-->
                  $40.00 - $80.00
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Sale badge-->
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
              <!-- Product image-->
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Special Item</h5>
                  <!-- Product reviews-->
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <!-- Product price-->
                  <span class="text-muted text-decoration-line-through">$20.00</span>
                  $18.00
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Sale badge-->
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
              <!-- Product image-->
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Sale Item</h5>
                  <!-- Product price-->
                  <span class="text-muted text-decoration-line-through">$50.00</span>
                  $25.00
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <!-- Product image-->
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">Popular Item</h5>
                  <!-- Product reviews-->
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <!-- Product price-->
                  $40.00
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    상품 이미지, 상품명 및 결제 관련  -->
    <div>
      <!--      상품 이미지 -->
      <div>
        <!--      상품 이미지 main -->
        <div><img src="#" alt="item-img-large"/></div>
        <!--      상품 이미지 small -->
        <div><img src="#" alt="item-img-small"/></div>
        <div><img src="#" alt="item-img-small"/></div>
        <div><img src="#" alt="item-img-small"/></div>
      </div>
      <!--      상품명 및 결제 -->
      <div>
        <!--        상품 location(지역) -->
        <div><p>지역</p></div>
        <div>
          <p>상품명</p>
          <p>상품 간략설명</p>
        </div>

        <!--        상품 할인율 및 상품 가격 -->
        <div>
          <p>
            <!--            할인율 -->
            <strong>25%</strong>
            <!--            할인 전 가격 -->
            <span><del>100000원</del></span>
            <!--          할인 후 가격 -->
            <span><strong>75000원</strong></span>
          </p>
        </div>
        <div><p></p></div>
        <!--        quantity value button -->
        <div>
          <label>수량</label>
          <button>-</button>
          <input value="0">
          <button>+</button>
        </div>
        <!--        결제 가격 -->
        <div>
          <strong>75000원</strong>
        </div>
        <!--        장바구니 추가 및 결제 버튼 -->
        <div>
          <button>
            장바구니 추가
          </button>
          <button>
            구매하기
          </button>
        </div>
      </div>
    </div>

    <!--    상품 상세 페이지 -->
    <div>
      <!--      상품 설명, 리뷰 페이지 보이기 -->
      <div>
        <div>
          <div><a href="detail">상품설명</a></div>
          <div><a href="review">리뷰</a></div>
          <div href="detail"><img src="#"/>상품상세 보기 이미지</div>
        </div>
      </div>

      <!--      여행지 한눈에 보기(지도 API) -->
      <div>
        <div>지도 API 예정</div>
      </div>

      <!--      관련 여행 상품 추천 (지역) -->
      <div>
        <div>관련 여행상품 추천</div>
      </div>
      <!--      댓글 -->
      <div href="review">
        <p>상품리뷰</p>
        <div>
          <!--          리뷰내용 -->
          <div>
            <div><img src="#" alt="user-thumbnail"/></div>
            <div>
              <ul>
                <li>rating</li>
                <li>userId | review-insert-time</li>
                <li>대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 중앙선거관리위원회는 법령의 범위안에서 선거관리·국민투표관리 또는 정당사무에
                  관한 규칙을 제정할 수 있으며
                </li>
              </ul>
            </div>
            <div><img src="#" alt="review-image"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourItemDetail"
}
</script>

<style scoped>

/*****************globals*************/
body {
  font-family: 'open sans';
  overflow-x: hidden;
}

img {
  max-width: 100%;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}

.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

.tab-content {
  overflow: hidden;
}

.tab-content img {
  width: 100%;
  -webkit-animation-name: opacity;
  animation-name: opacity;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
}

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
}

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold;
}

.checked, .price span {
  color: #ff9f1a;
}

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px;
}

.product-title {
  margin-top: 0;
}

.size {
  margin-right: 10px;
}

.size:first-of-type {
  margin-left: 40px;
}

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px;
}

.color:first-of-type {
  margin-left: 20px;
}

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
  transition: background .3s ease;
}

.add-to-cart:hover, .like:hover {
  background: #b36800;
  color: #fff;
}

.not-available {
  text-align: center;
  line-height: 2em;
}

.not-available:before {
  font-family: fontawesome;
  content: "\f00d";
  color: #fff;
}

.orange {
  background: #ff9f1a;
}

.green {
  background: #85ad00;
}

.blue {
  background: #0076ad;
}

.tooltip-inner {
  padding: 1.3em;
}

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
    transform: scale(3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

/*# sourceMappingURL=style.css.map */

/* preview pic */
.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

@media screen and (max-width: 996px) {
  .preview {
    margin-bottom: 20px;
  }
}

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
  width: 18%;
  margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
  max-width: 100%;
  display: block;
}

.preview-thumbnail.nav-tabs li a {
  padding: 0;
  margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
  margin-right: 0;
}

</style>
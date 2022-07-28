<template>
    <div class="bg-white b p-4 mb-4 restaurant-detailed-ratings-and-reviews">

        <div class="reviews-members py-4" id="review-start">
            <div class="media">
                <a href="#"><img alt="Generic placeholder image" src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                 class="mr-3 rounded-pill"></a>
                <div class="media-body">
                    <div class="reviews-members-header">
                        <!-- rating -->
                        <b-form-rating class="p-0"
                                       id="rating-no-border"
                                       v-model="value"
                                       no-border
                                       size="md"
                                       inline
                                       variant="warning">
                        </b-form-rating>
                        <h6 class="mb-1"><a class="text-black" href="#">Singh Osahan1</a></h6>
                        <p class="text-gray mb-2">Tue, 20 Mar 2020</p>
                    </div>
                    <div class="reviews-members-body">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years oldrom 45 BC,
                            making it over 2000 years old.</p>
                    </div>
                </div>
                <a href="#"><img alt="Generic placeholder image" src="https://dummyimage.com/150x150/dee2e6/6c757d.jpg"
                                 class="ml-3 image-fluid"></a>
            </div>
        </div>
        <hr>
        <div class="reviews-members pt-4 pb-4">
            <div class="media">
                <a href="#"><img alt="Generic placeholder image" src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                 class="mr-3 rounded-pill"></a>
                <div class="media-body">
                    <div class="reviews-members-header">
                        <!-- rating -->
                        <b-form-rating class="p-0"
                                       id="rating-no-border"
                                       v-model="value"
                                       no-border
                                       size="md"
                                       inline
                                       variant="warning">
                        </b-form-rating>
                        <h6 class="mb-1"><a class="text-black" href="#">Singh Osahan2</a></h6>
                        <p class="text-gray mb-2">Tue, 20 Mar 2020</p>
                    </div>
                    <div class="reviews-members-body">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years oldrom 45 BC,
                            making it over 2000 years old.</p>
                    </div>
                </div>
                <a href="#"><img alt="Generic placeholder image" src="https://dummyimage.com/150x150/dee2e6/6c757d.jpg"
                                 class="ml-3 image-fluid"></a>
            </div>
        </div>
        <hr>

<!--        리뷰 보기 -->
        <div v-show="reviewShow">
            <div class="reviews-members pt-4 pb-4">
                <div class="media">
                    <a href="#"><img alt="Generic placeholder image" src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                     class="mr-3 rounded-pill"></a>
                    <div class="media-body">
                        <div class="reviews-members-header">
                            <!-- rating -->
                            <b-form-rating class="p-0"
                                           id="rating-no-border"
                                           v-model="value"
                                           no-border
                                           size="md"
                                           inline
                                           variant="warning">
                            </b-form-rating>
                            <h6 class="mb-1"><a class="text-black" href="#">Singh Osahan4</a></h6>
                            <p class="text-gray mb-2">Tue, 20 Mar 2020</p>
                        </div>
                        <div class="reviews-members-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it over 2000 years oldrom 45 BC,
                                making it over 2000 years old.</p>
                        </div>
                    </div>
                    <a href="#"><img alt="Generic placeholder image" src="https://dummyimage.com/150x150/dee2e6/6c757d.jpg"
                                     class="ml-3 image-fluid"></a>
                </div>
            </div>
        </div>
        <hr>

        <hr>
        <a class="text-center w-100 d-block mt-4 font-weight-bold review-hover"
           @click="reviewShow = !reviewShow" href="#review-start">
            <p v-show="!reviewShow">모든리뷰 보기</p>
        </a>
        <a class="text-center w-100 d-block mt-4 font-weight-bold review-hover"
           @click="reviewShow = !reviewShow" >
            <p v-show="reviewShow">리뷰닫기</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Reviews",
    data() {
        return {
            value: 4,
            reviewShow: false
        }
    }
}
</script>

<style scoped>
body {
    background: #dcdcdc;
}

.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}

.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}

.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}

.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}

.rating-list-center {
    width: 80%;
}

.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}

.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}

.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}

.offer-dedicated-nav .nav-link.active,
.offer-dedicated-nav .nav-link:hover,
.offer-dedicated-nav .nav-link:focus {
    border-color: #3868fb;
    color: #3868fb;
}

.offer-dedicated-nav .nav-link {
    border-bottom: 2px solid #fff;
    color: #000000;
    padding: 16px 0;
    font-weight: 600;
}

.offer-dedicated-nav .nav-item {
    margin: 0 37px 0 0;
}

.restaurant-detailed-action-btn {
    margin-top: 12px;
}

.restaurant-detailed-header-right .btn-success {
    border-radius: 3px;
    height: 45px;
    margin: -18px 0 18px;
    min-width: 130px;
    padding: 7px;
}

.text-black {
    color: #000000;
}

.icon-overlap {
    bottom: -23px;
    font-size: 74px;
    opacity: 0.23;
    position: absolute;
    right: -32px;
}

.menu-list img {
    width: 41px;
    height: 41px;
    object-fit: cover;
}

.restaurant-detailed-header-left img {
    width: 88px;
    height: 88px;
    border-radius: 3px;
    object-fit: cover;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}

.reviews-members .media .mr-3 {
    width: 56px;
    height: 56px;
    object-fit: cover;
}

.rounded-pill {
    border-radius: 50rem !important;
}

.total-like-user {
    border: 2px solid #fff;
    height: 34px;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
    width: 34px;
}

.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}

.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}

.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}

.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}

.rating-list-center {
    width: 80%;
}

.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}

.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}

.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.text-gray {
    color: gray;
}

.review-hover {
    cursor: pointer;
}

a {
    color: black;
}
</style>

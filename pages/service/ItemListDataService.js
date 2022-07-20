import http from '../http-common';

// springboot 연결하기 위한 메소드 정의

class ItemListDataService {

    // 모든 상품 조회
    getAllArea() {
        return http.get("/itemlist/itemlist");
    }
    //
    // area로 상품 조히
    findByArea(area) {
        return http.get(`/itemlist/itemlist/${area}`);
    }

    // idx 로 상품 조히
    findByIdx(idx) {
        return http.get(`/itemlist/itemlist/item/${idx}`);
    }



    // area로 상품 조히
    findByAreaEtc() {
        return http.get(`/itemlist/itemlist/etc`);
    }

    // 모든 상품 가격낮은순 조회
    findPriceASC() {
        return http.get("/itemlist/itemlist/price");
    }

    // 모든 상품 조회많은순 조회
    findViewCountDESC() {
        return http.get("/itemlist/itemlist/view-count");
    }

    // 모든 상품 리뷰많은순 조회
    findReviewCount() {
        return http.get("/itemlist/itemlist/review-count");
    }
}

export default new ItemListDataService()

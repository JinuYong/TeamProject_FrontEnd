import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class ItemDetailDataService {

    getItemData(idx) {
        return http.get(`/item/${idx}`);
    }

    insertCart(data) {
        return http.post(`/cart`,data);
    }
    // return http.get(`/tutorials?title=${title}`);
    getItemByArea(area) {
        return http.get(`/item/area/${area}`);
    }
    // setCartData(userIdx, data) {
    //     return http.put(`/cart/${idx}`,data)
    // }

}

export default new ItemDetailDataService()








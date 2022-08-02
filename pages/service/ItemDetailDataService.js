import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class ItemDetailDataService {

    getItemAll() {
        return http.get(`/items`);
    }

    getItemData(idx) {
        return http.get(`/item/${idx}`);
    }

    getCartData(itemsIdx) {
        return http.get(`/carts/${itemsIdx}`);
    }

    insertCart(data) {
        return http.post(`/cart`, data);
    }

    getItemByArea(area) {
        return http.get(`/item/area/${area}`);
    }

    // getSearchData(area, itemDate) {
    //     return http.get(`/search?area=${area}&itemDate=${itemDate}`,);
    // }

    getSearchData(params) {
        return http.get(`/search`,{params})
    }

}

export default new ItemDetailDataService()








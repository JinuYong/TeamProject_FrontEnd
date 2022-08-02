import http from "~/pages/http-common";

// springboot 연결하기 위한 메소드 정의
class ShoppingCartDataService {

    getUserCart(userIdx) {
        return http.get(`/cart/${userIdx}`)
    }

    deleteUserCart(idx) {
        return http.delete(`/cart/${idx}`)
    }

    deleteUserCartAll(userIdx) {
        return http.delete(`/cart/del/${userIdx}`)
    }

    update(idx, data) {
        return http.put(`/cart/${idx}`,data)
    }

    insertPaymentItems

}

export default new ShoppingCartDataService()








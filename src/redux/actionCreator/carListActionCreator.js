// import { getCartList } from '../../api/cart' // 获取购物车列表，（接口不可用）
import resources from "../../mock/resources";

export function getCartListData () {
  return {
    type: 'cartList',
    payload: resources.cart.cartList.testData
  }
  // // 接口不可用
  // return async (dispatch) => {
  //   const res = await getCartList()
  //   dispatch({
  //     type: 'cartListChange',
  //     payload: res
  //   })
  // }




}


import request from '../service/requst'

const productApi = {
  cartList: 'data/cart/item/list'
}

/**
 * 购物车列表数据
 * @param {*} params 
 * @returns 
 */
export const getCartList = (params) => {
  return request({
    url: productApi.cartList,
    method: 'get',
    params,
  })
}


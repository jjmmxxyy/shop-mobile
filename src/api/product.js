import request from '../service/requst'

const productApi = {
  indexData: 'data/product/index.php', // 首页数据
  productList: 'data/product/list.php', // 推荐商品列表
}

/**
 * 首页数据
 * @param {*} params 
 * @returns 
 */
export const getIndexDataList = (params) => {
  return request({
    url: productApi.indexData,
    method: 'get',
    params,
  })
}

/**
 * 推荐商品列表
 * @param {*} params 
 * @returns 
 */
export const getProductDataList = (params) => {
  return request({
    url: productApi.productList,
    method: 'get',
    params,
  })
}

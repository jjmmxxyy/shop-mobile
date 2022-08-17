import request from '../service/requst'

const productApi = {
  indexData: 'data/product/index.php' // 首页数据
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

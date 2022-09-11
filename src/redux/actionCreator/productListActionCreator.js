import { getProductDataList } from '../../api/product'

/**
 * 获取推荐数据
 * @param {string} kw 品牌名称
 * @returns 
 */
export function getProductList (kw) {
  return async (dispatch) => {
    const param = {
      pno: 1,
      count: 6,
      kw
    }
    let res = await getProductDataList(param)
    dispatch({
      type: 'productListDataChange',
      payload: res
    })
    // console.log();
  }
}


import { getProductDataList } from '../../api/product'

export function getProductList () {
  return (dispatch) => {
    getProductDataList({ count: 90 }).then(res => {
      console.log('res', res)
      dispatch({
        type: 'productListDataChange',
        payload: res
      })
    })
  }
}


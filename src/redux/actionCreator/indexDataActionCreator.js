import { getIndexDataList } from '../../api/product'
export function getIndexData () {
  return (dispatch) => {
    getIndexDataList().then(res => {

      dispatch({
        type: 'indexDataChange',
        payload: res
      })
    })
  }
}


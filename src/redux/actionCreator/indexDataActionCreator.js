import { getIndexDataList } from '../../api/product'
export function getIndexData () {
  return async (dispatch) => {
    const res = await getIndexDataList()
    dispatch({
      type: 'indexDataChange',
      payload: res
    })
  }
}


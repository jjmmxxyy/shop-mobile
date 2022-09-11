const productListReducer = (prevState = {
  productListData: {}
}, actions) => {
  const newState = JSON.parse(JSON.stringify(prevState))

  switch (actions.type) {
    case 'productListDataChange':
      newState.productListData = actions.payload
      return newState
      break
    default:
      return prevState
      break
  }
}

export default productListReducer
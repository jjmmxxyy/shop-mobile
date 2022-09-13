const cartListReducer = (prevState = {
  cartData: []
}, actions) => {
  const newState = JSON.parse(JSON.stringify(prevState))
  switch (actions.type) {
    case 'cartList':
      newState.cartData = actions.payload
      return newState
      break

    default:
      return prevState
      break
  }
}

export default cartListReducer


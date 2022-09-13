const footerReducer = (prevState = {
  isFooterShow: true
}, actions) => {
  const newState = JSON.parse(JSON.stringify(prevState))
  switch (actions.type) {
    case 'footerShow':

      newState.isFooterShow = true
      return newState
      break
    case 'footerHide':
      newState.isFooterShow = false
      return newState
      break

    default:
      return prevState
      break
  }
}

export default footerReducer
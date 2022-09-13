const indexDataReducer = (prevState = {
  indexData: {}
}, actions) => {
  const newState = JSON.parse(JSON.stringify(prevState))

  switch (actions.type) {
    case 'indexDataChange':
      newState.indexData = actions.payload
      return newState
      break

    default:
      return prevState
      break
  }
}

export default indexDataReducer
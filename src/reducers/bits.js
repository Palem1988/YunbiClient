const bits = (state = {}, action) => {
  switch (action.type) {
    case 'BIT_UPDATE':
        return Object.assign({}, state, {
               [action.bitTypePara] : action.ticker
        })

    default:
      return state
  }
}

export default bits
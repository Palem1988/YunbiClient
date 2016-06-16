import { UPDATE_MARKET_ORDERBOOK } from '../constants/ActionTypes'

const initialState = { 
}

export default function orderBook(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKET_ORDERBOOK:
      let detail = Object.assign({}, action.json, {market:action.marketName})
      return Object.assign(
        {}, state, {[action.marketName]:detail} 
	    )

    default:
      return state
  }
}
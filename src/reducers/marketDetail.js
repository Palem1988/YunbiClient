import { UPDATE_MARKET} from '../constants/ActionTypes'

const initialState = { 
}

export default function detail(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKET:
      console.log(action.marketName + ':' + action.json.ticker.last)
      let detail = Object.assign({}, action.json.ticker, {market:action.marketName})
      return Object.assign(
        {}, state, {[action.marketName]:detail} 
	    )

    default:
      return state
  }
}
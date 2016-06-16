import { combineReducers } from 'redux'
import { MARKET_FETCH_START, MARKET_FETCH_FINISH } from '../constants/ActionTypes'
import list from '../reducers/marketList'
import detail from '../reducers/marketDetail'
import orderBook from '../reducers/marketOrderbook'

const initialState = false;

function isFetching(state = initialState, action) {
  switch (action.type) {
    case MARKET_FETCH_START:
    case MARKET_FETCH_FINISH:
      return action.isFetching
    
    default:
      return state
  }
}

const market = combineReducers({
  isFetching,
  list,
  detail,
  orderBook
})

export default market
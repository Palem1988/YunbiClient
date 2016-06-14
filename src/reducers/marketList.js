import { ADD_MARKET, DELETE_MARKET, SHOW_MARKET, HIDE_MARKET} from '../constants/ActionTypes'

const initialState = {
	'btccny':{
		name: 'btccny',
		show: true
	},
	'dgdcny':{
		name: 'dgdcny',
		show: false
	}
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKET:
      return Object.assign(
        {}, initialState, {[action.marketName]:{name:action.marketName, show:action.isShow}}
	  )
	case DELETE_MARKET:
	  let newState = Object.assign({}, state);
	  delete newState[action.marketName];
	  return newState;
	case SHOW_MARKET:
	case HIDE_MARKET:
	  if(!state[action.marketName]){
		  return state;
	  }
	  let newMarket = Object.assign({}, state[action.marketName]);
	  newMarket.show = action.isShow;
	  return Object.assign({}, state, {[action.marketName]:newMarket});

    default:
      return state
  }
}
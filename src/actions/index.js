import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

export function marketFetchStart() {
  return { type: types.MARKET_FETCH_START,  isFetching:true}
}

export function marketFetchFinish() {
  return { type: types.MARKET_FETCH_FINISH,  isFetching:false}
}

export function addMarket(marketName, isShow=true) {
  return { type: types.ADD_MARKET,  marketName, isShow}
}

export function deleteMarket(marketName) {
  return { type: types.DELETE_MARKET,  marketName}
}

export function showMarket(marketName) {
  return { type: types.SHOW_MARKET,  marketName, isShow:true}
}

export function hideMarket(marketName) {
  return { type: types.HIDE_MARKET,  marketName, isShow:false}
}

export function requestMarketsDetail(markets) {
  return { type: types.REQUEST_MARKETS_DETAIL,  markets}
}

export function updateMarket(marketName, json) {
  return { type: types.UPDATE_MARKET,  marketName, json}
}

export function fetchMarketsDetail(markets){
  return dispatch =>{
    dispatch(marketFetchStart());
    let fetchs = markets.map(market =>{
      let url = 'https://yunbi.com//api/v2/tickers/'+ market + '.json';
      return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(updateMarket(market, json)) )
        .catch(err => console.log(err))
      
    });
    dispatch(marketFetchFinish());
    return Promise.all(fetchs);
  }
}

export function requestMarketOrderBook(market) {
  return { type: types.REQUEST_MARKET_ORDERBOOK,  market}
}

export function updateMarketOrderBook(marketName, json) {
  return { type: types.UPDATE_MARKET_ORDERBOOK,  marketName, json}
}

export function fetchMarketOrderBook(market){
  return dispatch =>{
    let url = 'https://yunbi.com//api/v2/order_book.json?market='+ market + '&asks_limit=5&bids_limit=5';
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(updateMarketOrderBook(market, json)) )
      .catch(err => console.log(err))
  }
}
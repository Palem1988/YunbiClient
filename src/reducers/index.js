import { combineReducers } from 'redux'
import bitList from './bitList'
import bits from './bits'

const yunbiApp = combineReducers({
  bitList,
  bits
})

export default yunbiApp
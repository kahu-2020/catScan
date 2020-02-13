import {combineReducers} from 'redux'

import catFacts from './catFacts'
import savedFacts from './savedFacts'

export default combineReducers({
  catFacts,
  savedFacts
})

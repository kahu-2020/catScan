import {combineReducers} from 'redux'

import catFacts from './catFacts'
import catFactSave from './catFactSave'
import savedFacts from './savedFacts'
export default combineReducers({
  catFacts,
  catFactSave,
  savedFacts
})

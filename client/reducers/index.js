import {combineReducers} from 'redux'

import catFacts from './catFacts'
import catFactSave from './catFactSave'

export default combineReducers({
  catFacts,
  catFactSave
})

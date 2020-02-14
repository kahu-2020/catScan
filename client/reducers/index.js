import { combineReducers } from 'redux'

import catFacts from './catFacts'
import catFactSave from './catFactSave'
import savedFacts from './savedFacts'
import waiting from './waiting'

export default combineReducers({
  catFacts,
  catFactSave,
  savedFacts,
  waiting
})

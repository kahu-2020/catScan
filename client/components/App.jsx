import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import CatFacts from './CatFacts'
import SavedFacts from './SavedFacts'

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={CatFacts} />
      <Route path='/savedfacts' component={SavedFacts} />
    </div>
  </Router>
)

export default App

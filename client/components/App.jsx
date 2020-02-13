import React from 'react'

import CatFacts from './CatFacts'
import SavedList from './SavedList'

const App = () => (
  <div className='app'>
    <CatFacts />
      <SavedList /> 
       {/* props.children */}
  </div>
)

export default App

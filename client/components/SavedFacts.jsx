import React from 'react'

import { connect } from 'react-redux'
// import your action function
import { savedFacts } from '../actions'

class CatFacts extends React.Component {

  render() {
    return (
      <div>
          <h1> Cat fact your heart out!</h1>
          <button className='btn btn-warning'>Back to the fact</button>
          
            {/* map through props.catFacts and list them? */}
      </div>
    )
  }

}

export default connect()(CatFacts)
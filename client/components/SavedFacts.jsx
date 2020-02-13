import React from 'react'

import { connect } from 'react-redux'
// import your action function


class CatFacts extends React.Component {
  constructor(props) {
    super(props)
  }

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
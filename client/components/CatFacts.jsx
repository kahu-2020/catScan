import React from 'react'

import { connect } from 'react-redux'
// import your action function
import {saveFact} from '../actions'
import { getSavedFacts } from '../actions'

class CatFacts extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <h1>Catscan</h1>
        <div>
          <button className='btn btn-warning' onClick={() => this.props.dispatch(saveFact(this.props.catFact))}>Save my fact</button>
          <button className='btn btn-warning'>Next fact</button>
        </div>

        <div>
          <button className='btn btn-warning' onClick={() => this.props.dispatch(getSavedFacts())}>Get me cat facts</button>
          {this.props.savedFacts.map(fact => <li>{fact.cat_fact}</li>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    savedFacts: state.savedFacts
  }
}



export default connect(mapStateToProps)(CatFacts)
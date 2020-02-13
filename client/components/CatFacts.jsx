import React from 'react'

import { connect } from 'react-redux'
// import your action function
import {saveFact} from '../actions'

import { getSavedFacts } from '../actions'
class CatFacts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Catscan</h1>
        <div>
        <button className='btn btn-warning' onClick={saveFact}>Save my fact</button>
        <button className='btn btn-warning'>Next fact</button>
        </div>
        {/* could add the cat facts in here so no passing of props */}
        {/* <SavedFacts />  */}
        {/* <button className='btn btn-warning' onClick={() => this.props.dispatch( getSavedFacts() )}>Click Me</button>
        {this.props.savedFacts.map(fact => <li>{fact.cat_fact}</li>)} */}

      </div>
    )
  }
}

// mapStateToProps(state) 
//   return {
//     savedFacts: state.savedFacts
//   }


export default connect()(CatFacts)
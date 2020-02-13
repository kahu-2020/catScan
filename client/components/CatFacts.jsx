import React from 'react'

import { connect } from 'react-redux'
// import your action function
import {saveFact} from '../actions'
import { getSavedFacts } from '../actions'
import {fetchCatFacts} from '../actions/index'

class CatFacts extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount(){
    this.props.dispatch(fetchCatFacts())
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Catscan</h1>
        <p>{this.props.catFact}</p>
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
      savedFacts: state.savedFacts,
      catFact: state.catFact
  }
}


export default connect(mapStateToProps)(CatFacts)
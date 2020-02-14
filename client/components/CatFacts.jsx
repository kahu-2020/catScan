import React from 'react'

import { connect } from 'react-redux'
// import your action function
import {savedFact} from '../actions'
import { getSavedFacts } from '../actions'
import {fetchCatFacts} from '../actions/index'

class CatFacts extends React.Component {

  componentDidMount(){ 
   this.props.dispatch(fetchCatFacts())
  }

  render() {
    return (
      <div >
        <h1>CATSCAN</h1>
        <p className='fact'>{this.props.catFact}</p>
        <div>
          <button className='btn btn-warning' onClick={() => this.props.dispatch(savedFact(this.props.catFact))}>Save my fact</button>
          <button className='btn btn-warning'  onClick={() => {this.props.dispatch(fetchCatFacts())}}>Next fact</button>
        </div>

        <div>
          <button className='btn btn-warning' onClick={() => this.props.dispatch(getSavedFacts())} >Get me cat facts</button>
          <div className = "fact-list">
             {this.props.savedFacts.map(fact => <p>{fact.cat_fact}</p>)}
          </div>
         
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      savedFacts: state.savedFacts,
      catFact: state.catFacts
  }
}


export default connect(mapStateToProps)(CatFacts)
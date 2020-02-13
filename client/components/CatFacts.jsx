import React from 'react'

import { connect } from 'react-redux'
// import your action function
import {saveFact} from '../actions'
import {fetchCatFacts} from '../actions/index'

import { getSavedFacts } from '../actions'


class CatFacts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      catFact: ''
    }
    
  }

  componentDidMount(){
    this.props.dispatch(fetchCatFacts())
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Catscan</h1>
        <p>{this.props.catFact}</p>
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

function mapStateToProps(state) {
    return {
      savedFacts: state.savedFacts,
      catFact: state.catFact
  }
}


export default connect(mapStateToProps)(CatFacts)
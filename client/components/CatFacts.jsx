import React from 'react'
import { connect } from 'react-redux'
// import your action function
import {saveFact} from '../actions'
import { getSavedFacts } from '../actions'
import {fetchCatFacts} from '../actions/index'

class CatFacts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  componentDidMount(){
    this.props.dispatch(fetchCatFacts())
  }

  render() {
    console.log()
    return (
      <div>
        <h1>Catscan</h1>
        <p>This is where the cat fact will go</p>
        <div>
        <button className='btn btn-warning' onClick={saveFact}>Save my fact</button>
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
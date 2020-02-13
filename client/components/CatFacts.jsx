import React from 'react'
import Link from 'react-router-dom'
import { connect } from 'react-redux'
// import your action function

class CatFacts extends React.Component {

  // state = { }


  render() {
    return (
      <div>
        <h1>Catscan</h1>
        <div>
        <button className='btn btn-warning'>Save my fact</button>
        <button className='btn btn-warning'>Next fact</button>
        </div>
        <button className='btn btn-warning' >View my cat facts</button>  {/* <SavedFacts />  */}
      </div>
    )
  }
}

// mapStateToProps(){

// }

export default connect()(CatFacts)
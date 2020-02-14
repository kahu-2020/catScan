import React from 'react'
import { connect } from 'react-redux'

const Loading = (props) => {
  console.log(props)
  return props.waiting 
  ? <img className='loading' src='/loading.gif' />
  : null
} 


function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(Loading)
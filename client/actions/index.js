import request from 'superagent'

export function saveFact(){
    console.log('hi')
}




export function gotFacts(facts) {
  console.log(facts)
  return {
    type: 'GOT_SAVEDFACTS',
    facts
  }
}

export function getSavedFacts () {
  return (dispatch) => {
    request.get('/api/v1/saved')// check this route
    .then(res => res.body)
    .then(factArray => {
      dispatch(gotFacts(factArray))
    })
  }
}

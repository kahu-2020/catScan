import request from 'superagent'



export function saveFact() {
  console.log('hi')
  // .post to db
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

// export const fetchCatAPI = () => {
//   fetch('https://catfact.ninja/fact?max_length=140')
//   .then(res => res.json())
// }

export const requestFact = () => {
  return {
    type: 'REQUEST_FACT'
  }
}

export const receiveFacts = (catFact) => {
  return {
    type: 'RECEIVE_FACTS',
    catFact: catFact.fact
  }
}

export const fetchCatFacts = () => {
  return dispatch => {
    dispatch(receiveFacts)
    return request.get('https://catfact.ninja/fact?max_length=140')
    .then(res => {
      dispatch(receiveFacts(res.body))
    })
  }
}


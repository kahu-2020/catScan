import request from 'superagent'



export function savedFact(catFact) {
    const catObj = {
        'catFact': catFact 
    }
    return () => {
        request.post('/api/v1/savedFact')
        .send(catObj)
        .then(res => res.body)
}
}


export function gotFacts(facts) {
  return {
    type: 'GOT_SAVEDFACTS',
    facts: facts
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



export function fetchCatFacts () {
  return (dispatch) => {
    dispatch(requestFact())
    return request
      .get(`https://catfact.ninja/fact?max_length=140`) 
      .then(res => {
        setTimeout(() => {
          console.log(res.body)
          return dispatch(receiveFacts(res.body))
        }, 2000);
      })
    }
  }
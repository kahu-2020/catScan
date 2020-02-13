import request from 'superagent'

export function saveFact(catFact) {
    return {
        type: 'SAVE_FACT',
        catFact
    }
}


// export const requestPosts = () => {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// export const receivePosts = (posts) => {
//   return {
//     type: RECEIVE_POSTS,
//     posts: posts.map(post => post.data)
//   }
// }

export function gotFacts(facts) {
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

export function getSavedFacts () {
    return (dispatch) => {
      request.post('/api/v1/saved')// check this route
      .then(res => res.body)
      .then(factArray => {
        dispatch(gotFacts(factArray))
      })
    }
  }
  

//db function(insert from api route)
//router (sets up api)
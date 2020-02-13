import request from 'superagent'

export function saveFact(){
    console.log('hi')
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

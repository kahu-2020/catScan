import request from 'superagent'

export const requestFact = () => {
  return {
    type: REQUEST_FACT
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

function getCatApi() {
  return request.get('https://catfact.ninja/fact?max_length=140').then(res => res.body)
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts())
    getCatApi()
      .then(facts => {
        dispatch(requestFact(facts))
      })

  }
}

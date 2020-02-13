const initialState = 'Error'

function catFacts (state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case 'RECEIVE_FACTS':
      return  action.catFact
    default:
      return state
  }
}

export default catFacts

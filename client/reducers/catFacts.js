const initialState = ''

function catFacts (state = initialState, action) {
  
  switch (action.type) {
    case 'RECEIVE_FACTS':
      return  action.catFact
    default:
      return state
  }
}

export default catFacts

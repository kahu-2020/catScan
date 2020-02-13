
const initialState = []

function savedFacts (state = initialState, action) {

  switch (action.type) {
    case 'GOT_SAVEDFACTS':
      return action.facts

    default:
      return state
  }
}

export default savedFacts
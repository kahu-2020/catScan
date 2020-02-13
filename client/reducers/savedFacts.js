
function savedFacts (state = [], action) {
  switch (action.type) {
    case 'GOT_SAVEDFACTS':
      return action.savedFacts

    default:
      return state
  }
}

export default savedFacts
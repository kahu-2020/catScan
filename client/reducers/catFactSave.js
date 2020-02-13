
function catFactSave (state = '', action) {
    switch (action.type) {
      case 'SAVE_FACT':
        return action.catFact
      default:
        return state
    }
  }
  
  export default catFactSave
  
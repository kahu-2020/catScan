
const waiting = (state = false, action) => {
  switch (action.type) {
    case 'REQUEST_FACT':
      return true
    case 'RECEIVE_FACTS':
      return false
    default:
      return state
}
}


export default waiting
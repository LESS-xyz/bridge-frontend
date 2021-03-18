const initialState = {
  address: '',
  errorMsg: '',
  errorCode: 0,
  network: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER:SET_DATA':
      const newState = JSON.parse(JSON.stringify({
        ...state,
        ...payload
      }))
      return newState;
    default:
      return state
  }
}

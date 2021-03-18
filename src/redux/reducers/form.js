const initialState = {
  fieldName: {
    text: '',
    image: '',
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FORM:ERROR':
      const newState = JSON.parse(JSON.stringify({
        ...state,
        ...payload
      }))
      return newState;
    default:
      return state
  }
}

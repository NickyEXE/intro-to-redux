const initialState = {
  likes: 6,
  text: '',
  darkMode: false,
  thangs: []
}

// The job of the reducer is to take in state, and an action, and return a new, changed copy of THE ENTIRE STATE.
export const reducer = (state=initialState, action) => {
  switch (action.type){
    case "LIKE":
      return ({...state, likes: state.likes + 1 });
    case "DISLIKE":
      return ({...state, likes: state.likes - 1 });
    case "TOGGLE":
      return ({...state, darkMode: !state.darkMode });
    case "SUBMIT":
      return ({
        ...state,
        text: '',
        thangs: [state.text, ...state.thangs]
      })
    case "FORM_CHANGE":
      return ({...state, [action.payload.name]: action.payload.value })
    default:
      return {...state}
  }
}

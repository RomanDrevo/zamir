import actionsTypes from '../actionsTypes'
import createReducer from '../reducers/createReducer'

const initialState = {
  user: null,
  token: null,
  isRegisterSuccess: false
};

const headerReducer = createReducer(initialState, {
  [actionsTypes.REGISTER_SUCCESS]: (state, {payload}) => {

    console.log(payload);

    const {user, token} = payload;

    return {
      ...state,
      user,
      token,
      isRegisterSuccess: true
    }
  },

});



export default headerReducer;


import { AUTH_USER } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

const authReducer = function (state: RootState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };

    default:
      return state;
  }
};

export default authReducer;

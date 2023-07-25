const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

const authReducer = function (state: RootState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;

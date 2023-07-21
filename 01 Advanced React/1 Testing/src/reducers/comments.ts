import { SAVE_COMMENT } from "actions/types";

const commentsReducers = function (state = [], action: Action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default commentsReducers;

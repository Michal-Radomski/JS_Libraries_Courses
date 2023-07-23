import tv4 from "tv4";

import stateSchema from "./stateSchema";

const stateValidator =
  ({ dispatch, getState }: { dispatch: Dispatch; getState: Fetch }) =>
  (next: NextFunction) =>
  (action: Action) => {
    next(action);
    console.log(tv4.validate(getState(), stateSchema));
  };

export default stateValidator;

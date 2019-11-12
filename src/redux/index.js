import store from "./store";
import { rootReducer } from "./reducers/index";
import { Data } from "./data/photos";

// action import
import { LOAD_MORE } from "./actions/postAction";

// export all things
export { store, rootReducer, Data, LOAD_MORE };

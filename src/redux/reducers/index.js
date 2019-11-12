import { PostReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  post: PostReducer,
  user: userReducer
});

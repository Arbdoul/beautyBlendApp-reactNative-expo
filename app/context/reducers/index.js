import { combineReducers } from "redux";
import feedsReducer from "./feedReducer";

const myReducer = combineReducers({
  feeds: feedsReducer,
});

export default myReducer;

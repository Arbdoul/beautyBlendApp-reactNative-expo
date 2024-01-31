import { legacy_createStore } from "redux";

import myReducer from "./reducers";

const store = legacy_createStore(myReducer);

export default store;

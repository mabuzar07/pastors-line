import { createStore, combineReducers, applyMiddleware } from "redux";
import modalReducer from "./reducers/modalReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({
  modals: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

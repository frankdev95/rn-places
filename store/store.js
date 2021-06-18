import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import PlacesReducer from "./reducers/places";

const rootReducer = combineReducers({
  places: PlacesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

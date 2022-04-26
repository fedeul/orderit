import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CategoryReducer from "./reducers/category.reducer";
import ItemReducer from "./reducers/item.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  items: ItemReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));

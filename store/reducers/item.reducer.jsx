import { ITEMS } from "../../data/items";
import { SELECT_ITEM, FILTERED_ITEM } from "../actions/item.action";

const initialState = {
  items: ITEMS,
  filteredItem: [],
  selected: null,
};

const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      console.log("SELECT_ITEM " + action.itemID);
      return {
        ...state,
        selected: state.items.find((item) => item.id === action.itemID),
      };
    case FILTERED_ITEM:
      console.log("FILTERED_ITEM " + action.categoryID);
      return {
        ...state,
        filteredItem: state.items.filter(
          (item) => item.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default ItemsReducer;

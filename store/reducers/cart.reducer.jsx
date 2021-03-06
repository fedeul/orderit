import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from "../actions/cart.action";

const initialState = {
  items: [],
  total: 0,
  address: "",
};

const sumTotal = (list) =>
  list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("Add Item" + action.item.name);

      let updateCart = [];

      if (state.items.find((item) => item.id === action.item.id)) {
        updateCart = state.items.map((item) => {
          if (item.id === action.item.id) item.quantity++;
          return item;
        });
      } else {
        const item = { ...action.item, quantity: 1 };
        updateCart = [...state.items, item];
      }

      return {
        ...state,
        items: updateCart,
        total: sumTotal(updateCart),
      };
    case REMOVE_ITEM:
      const filteredCart = state.items.filter(
        (item) => item.id !== action.itemID.id
      );
      console.log(action.itemID.name + " eliminado");
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      };
    case CONFIRM_CART:
      return { ...state, items: [], total: 0, address: "" };
    default:
      return state;
  }
};

export default CartReducer;

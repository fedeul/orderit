import { ADD_IMAGE, DELETE_IMAGE, LOAD_IMAGE } from "./image.actions";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  console.log("Reducer...");
  switch (action.type) {
    case ADD_IMAGE:
      console.log("ADD_IMAGE");
      const newImage = new Image(
        action.payload.id.toString(),
        action.payload.image
      );
      return {
        ...state,
        data: state.data.concat(newImage),
      };
    case LOAD_IMAGE:
      return {
        ...state,
        data: action.data.map(
          (item) => new Image(item.id.toString(), item.image)
        ),
      };
    case DELETE_IMAGE:
      const values = state.data.filter((item) => item.id !== action.id);
      return {
        ...state,
        data: values,
      };
    default:
      return state;
  }
};

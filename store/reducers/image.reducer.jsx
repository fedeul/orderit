import { ADD_IMAGE, DELETE_IMAGE, LOAD_IMAGE } from "../actions/image.action";

const initialState = {
  image: null,
};

export default (state = initialState, action) => {
  console.log("Reducer...");
  switch (action.type) {
    case ADD_IMAGE:
      console.log("ADD_IMAGE");
      // const newImage = new Image(
      //   action.payload.id.toString(),
      //   action.payload.image
      // );
      // return {
      //   ...state,
      //   data: state.data.concat(newImage),
      // };
      return {
        ...state,
        image: action.payload.image
      };
    case LOAD_IMAGE:
      // return {
      //   ...state,
      //   data: action.data.map(
      //     (item) => new Image(item.id.toString(), item.image)
      //   ),
      // };
      console.log(action)
      return {
        ...state,
        image: action.image
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

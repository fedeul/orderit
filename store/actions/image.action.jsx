import * as FileSystem from "expo-file-system";
import { insertImage } from "../../db";

export const ADD_IMAGE = "ADD_IMAGE";
export const LOAD_IMAGE = "LOAD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";

export const addImage = (image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Patch = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: Patch,
      });
      const result = await insertImage(Patch);
      console.log(result);
      dispatch({
        typ: ADD_IMAGE,
        payload: { id: result.insertId, image: Patch },
      });
    } catch (err) {
      console.log(err.message);
      throw er;
    }
  };
};

export const loadImage = () => {
  return async (dispatch) => {
    try {
      const result = await fetchAddress();
      console.log(result);
      dispatch({ type: LOAD_IMAGE, data: result.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteImage = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteImage(id);
      dispatch({ type: DELETE_IMAGE, id });
    } catch (err) {
      throw err;
    }
  };
};

import * as FileSystem from "expo-file-system";
import { insertImage, fetchImage,updateImage } from "../../db";


export const ADD_IMAGE = "ADD_IMAGE";
export const LOAD_IMAGE = "LOAD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";

export const addImage = (image,firstime) => {
  return async (dispatch) => {
    console.log('entra a la accion',image)
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    console.log('filename',fileName)
    console.log('path',Path)
    console.log('image?',image)

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      console.log('variable que entra',firstime)
      if(firstime){
        const result = await insertImage(Path);
        console.log('result',result);
        
      }else{const update = await updateImage(Path);
        console.log('update',update)}
      
      
      
      
       dispatch({
         type: ADD_IMAGE,
         payload: { id: result.insertId, image: Path },
       });
    } catch (err) {
      console.log('error',err.message);
      throw err;
    }
  };
};

export const loadImage = () => {
  return async (dispatch) => {
    try {
      const result = await fetchImage();
      console.log('resultado del fetch',result);
      console.log('resultado del fetch',result.rows._array.length);
      //console.log('resultado de array',result.rows._array);
      //console.log('resultado de array',result.rows._array[0].image);
        if(result.rows._array.length>0){
          dispatch({ type: LOAD_IMAGE, image: result.rows._array[0].image});
        }
      
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

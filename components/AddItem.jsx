import Styles from "../assets/Styles/mainStyles";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";

function AddItem(props) {
  const [textItem, setTextItem] = useState();
  const [numItem, setNumItem] = useState();
  const { onAddItem } = props;
  const onHandlerChangeItem = (t) => {
    setTextItem(t);
  };
  const onHandlerChangeNumItem = (n) => {
    setNumItem(n);
  };

  const onHandlerAddItem = () => {
    console.log("Add: " + numItem + " of " + textItem);
    setTextItem("");
    setNumItem("");
    onAddItem(textItem, numItem);
  };

  return (
    <>
      <View
        style={{
          padding: 25,
          width: "90%",
          backgroundColor: "",
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder="Ingrese un item"
          style={StylesThis.textInput}
          value={textItem}
          onChangeText={onHandlerChangeItem}
          keyboardAppearance="dark"
        ></TextInput>
        <TextInput
          placeholder="Cantidad"
          style={StylesThis.numInput}
          value={numItem}
          onChangeText={onHandlerChangeNumItem}
          keyboardAppearance="dark"
          keyboardType="numeric"
          maxLength={2}
        ></TextInput>
      </View>
      {/* Estilo de botón básico */}
      {/* <Button title="+ Add" onPress={onHandlerAddItem} /> */}
      <Pressable
        style={[Styles.button, Styles.buttonOK, { width: "80%" }]}
        onPress={onHandlerAddItem}
      >
        <Text style={Styles.textStyle}>+ Add</Text>
      </Pressable>
    </>
  );
}

const StylesThis = StyleSheet.create({
  textInput: {
    padding: 5,
    borderRadius: 5,
    borderColor: "#dddddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "70%",
  },
  numInput: {
    padding: 5,
    borderRadius: 5,
    borderColor: "#dddddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "30%",
  },
});

export default AddItem;

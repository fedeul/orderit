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
import { Dimensions } from "react-native-web";

function AddItem(props) {
  const [textItem, setTextItem] = useState();
  const [numItem, setNumItem] = useState();
  const [selectedUnit, setSelectedUnit] = useState();
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
  const onHandlerCleanInput = () => {
    setTextItem("");
    setNumItem("");
  };

  return (
    <View style={StylesThis.containerInputs}>
      <View
        style={{
          paddingVertical: 25,
          paddingHorizontal: 5,
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
          maxLength={3}
        ></TextInput>
      </View>
      {/* Estilo de botón básico */}
      {/* <Button title="+ Add" onPress={onHandlerAddItem} /> */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={[
            Styles.button,
            Styles.buttonOK,
            { width: "70%", marginRight: "5%" },
          ]}
          onPress={onHandlerAddItem}
        >
          <Text style={Styles.textStyle}>+ Add</Text>
        </Pressable>

        <Pressable
          style={[Styles.button, Styles.buttonClear, { width: "15%" }]}
          onPress={onHandlerCleanInput}
        >
          <Text style={{ color: "black", textAlign: "center" }}>🗑</Text>
        </Pressable>
      </View>
    </View>
  );
}

const StylesThis = StyleSheet.create({
  containerInputs: {
    padding: 25,
    marginTop: 25,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    padding: 5,
    borderRadius: 5,
    borderColor: "#dddddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "75%",
  },
  numInput: {
    padding: 5,
    borderRadius: 5,
    borderColor: "#dddddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "25%",
  },
});

export default AddItem;

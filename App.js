import { Text, View, FlatList, Alert, Pressable } from "react-native";
import Styles from "./assets/Styles/mainStyles";
import React, { useState } from "react";
import ModalItem from "./components/Modal";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({
    Mali: require("./assets/fonts/Mali-Regular.ttf"),
    MaliBold: require("./assets/fonts/Mali-Bold.ttf"),
  });
  // if (!loaded) return <AppLoading />;
  const [counter, setCounter] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = (textItem, numItem) => {
    setItemList((currenItems) => [
      ...currenItems,
      { id: counter, value: textItem, qty: numItem },
    ]);
    setCounter(counter + 1);
  };

  const onHandlerDelete = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(itemList.filter((item) => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const deleteAlert = (id) => {
    Alert.alert("This action can't be undo", "Are you shure?", [
      {
        text: "Cancel",
        onPress: () => closeModal(),
        style: "cancel",
      },
      { text: "OK", onPress: () => onHandlerDelete(id) },
    ]);
  };

  const renderItem = (data) => (
    <Pressable
      onPress={onHandlerModal.bind(this, data.item.id)}
      value={data.item.value}
      qty={data.item.qty}
    >
      <View style={{ alignContent: "space-around", flexDirection: "row" }}>
        <Text style={Styles.eachItem}>{data.item.value}</Text>
        <Text style={Styles.eachItemQty}>{data.item.qty}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={Styles.container}>
      <Header />
      <AddItem onAddItem={addItem} />
      <View style={Styles.containerText}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <ModalItem
          onDelete={deleteAlert}
          item={itemSelected}
          visible={modalVisible}
          onCancel={closeModal}
        />
      </View>
    </View>
  );
}

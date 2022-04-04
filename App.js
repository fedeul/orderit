import { Text, View, FlatList } from "react-native";
import Styles from "./assets/Styles/mainStyles";
import React, { useState } from "react";
import ModalItem from "./components/Modal";
import AddItem from "./components/AddItem";
import Header from "./components/Header";

export default function App() {
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

  const renderItem = (data) => (
    <View style={{ alignContent: "space-around", flexDirection: "row" }}>
      <Text
        style={Styles.eachItem}
        key={data.item.id}
        value={data.item.value}
        qty={data.item.qty}
        onPress={onHandlerModal.bind(this, data.item.id)}
      >
        {data.item.value}
      </Text>
      <Text
        style={Styles.eachItemQty}
        key={data.item.id}
        value={data.item.value}
        qty={data.item.qty}
        onPress={onHandlerModal.bind(this, data.item.id)}
      >
        {data.item.qty}
      </Text>
    </View>
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
          onDelete={onHandlerDelete}
          item={itemSelected}
          visible={modalVisible}
          onCancel={closeModal}
        />
      </View>
    </View>
  );
}

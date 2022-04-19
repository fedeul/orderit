import React, { useState } from "react";
import Styles from "../assets/Styles/mainStyles";

import { Text, View, FlatList } from "react-native";
import ModalItem from "../components/Modal";

const List = () => {
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
    <Text
      style={Styles.eachItem}
      key={data.item.id}
      value={data.item.value}
      qty={data.item.qty}
      onPress={onHandlerModal.bind(this, data.item.id)}
    >
      {data.item.value + " ( " + data.item.qty + " ) "}
    </Text>
  );
  return (
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
  );
};

export default List;

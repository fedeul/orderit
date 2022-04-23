import { Text, View, FlatList, Alert, Pressable, Image } from "react-native";
import Styles from "../assets/Styles/mainStyles";
import React, { useState } from "react";
import ModalItem from "../components/Modal";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function OrderReady() {
  const [loaded] = useFonts({
    ComicNeueAngular: require("../assets/fonts/ComicNeueAngular-Regular.ttf"),
    ComicNeueAngularBold: require("../assets/fonts/ComicNeueAngular-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;
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
      <ModalItem
        onDelete={deleteAlert}
        item={itemSelected}
        visible={modalVisible}
        onCancel={closeModal}
      />
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", marginTop: 30 }}>
        Tu orden está preparándose
      </Text>
      <Image
        style={{
          flex: 3,
          paddingVertical: 3,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        source={require("../assets/orderPrep.gif")}
      />
      <View
        style={{
          flex: 3,
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ textAlign: "left", marginTop: 30 }}>Detalle: </Text>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

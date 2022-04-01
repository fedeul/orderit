import {
  Text,
  View,
  TextInput,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Styles from "./assets/Styles/mainStyles";
import React, { useState } from "react";

export default function App() {
  const [textItem, setTextItem] = useState();
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (t) => setTextItem(t);
  const onHandlerDelete = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };
  const addItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    console.log(itemList);
  };
  const renderItem = (data) => (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <Text style={Styles.modalText}>
                {data.item.value} will be deleted!
              </Text>
              <View style={Styles.centeredButtons}>
                <Pressable
                  style={[Styles.button, Styles.buttonDelete]}
                  onPress={onHandlerDelete.bind(this, data.item.id)}
                >
                  <Text style={Styles.textStyle}>Delete</Text>
                </Pressable>
                <Pressable style={[Styles.button, Styles.buttonClose]}>
                  <Text
                    style={{ color: "#000000" }}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Text
          style={Styles.eachItem}
          key={data.item.id}
          value={data.item.value}
        >
          {data.item.value}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      <View style={{ padding: 25, width: "90%", backgroundColor: "" }}>
        <Text>{textItem}</Text>
        <TextInput
          placeholder="Ingrese un item"
          style={Styles.textInput}
          value={textItem}
          onChangeText={onHandlerChangeItem}
        ></TextInput>
        <Button
          title="+ Add"
          style={{ borderRadius: "100%" }}
          onPress={addItem}
        />
      </View>
      <View style={Styles.containerText}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <Text style={Styles.modalText}>
                {itemList.value} will be deleted
              </Text>
              <Pressable
                style={[Styles.button, Styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={Styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

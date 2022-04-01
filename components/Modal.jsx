import Styles from "../assets/Styles/mainStyles";
import React from "react";
import { Text, View, Modal, StyleSheet, Pressable } from "react-native";

const ModalItem = (props) => {
  const { visible, onDelete, item, onCancel } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={Styles.centeredView}>
        <View style={Styles.modalView}>
          <Text style={Styles.modalText}>{item.value} will be deleted!</Text>
          <View style={Styles.centeredButtons}>
            <Pressable
              style={[Styles.button, Styles.buttonDelete]}
              onPress={onDelete.bind(this, item.id)}
            >
              <Text style={Styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable style={[Styles.button, Styles.buttonClose]}>
              <Text style={{ color: "#000000" }} onPress={onCancel.bind(this)}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalItem;

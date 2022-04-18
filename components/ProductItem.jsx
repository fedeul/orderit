import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.eachItem}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>Price ${item.price}</Text>
          <Text style={styles.details}>Stock: {item.stock}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eachItem: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#c5e2c5",
  },
  title: {
    fontSize: 20,
    fontFamily: "MaliBold",
  },
  details: {
    fontSize: 18,
  },
});

export default ProductItem;

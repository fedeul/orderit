import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: "white" }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{
              marginVertical: 15,
              maxHeight: 42,
              height: "100%",
              width: 48,
            }}
            source={{ uri: item.img }}
          />
        </View>
        <View style={{ ...styles.container }}>
          <Text adjustsFontSizeToFit={true} style={styles.title}>
            {item.name}
          </Text>
          <Text style={styles.details}>Price ${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    // flex: 1,
    maxHeight: 200,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  eachItem: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#c5e2c5",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "ComicNeueAngularBold",
  },
  details: {
    fontSize: 14,
  },
});

export default ProductItem;

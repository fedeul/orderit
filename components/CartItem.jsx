import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={{ width: "80%" }}>
        <View>
          <Text adjustsFontSizeToFit={true} style={styles.header}>
            {item.name}
          </Text>
        </View>
        <View style={styles.detail}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <Text style={styles.text}>${item.price}</Text>
            {item.sale ? (
              <View
                style={{
                  backgroundColor: "red",
                  borderRadius: 50,
                  padding: 3,
                  marginLeft: 4,
                }}
              >
                <Text style={styles.textOnSale}>On Sale</Text>
              </View>
            ) : (
              []
            )}
          </View>
          <Text style={styles.text}>Qty: {item.quantity}</Text>
        </View>
      </View>

      <View
        style={{
          width: "20%",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Feather name="trash" size={20} color={COLORS.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",

    flexWrap: "wrap",
  },
  header: {
    fontSize: 16,
    fontFamily: "ComicNeueAngularBold",
  },
  detail: {
    // flex: 1,
    // flexDirection: "row",
    alignItems: "flex-start",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontFamily: "ComicNeueAngular",
  },
  textOnSale: {
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    color: "white",
    fontFamily: "ComicNeueAngular",
  },
});

export default CartItem;

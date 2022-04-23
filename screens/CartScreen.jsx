import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CART } from "../data/cart";
import CartItem from "../components/CartItem";

function CartScreen() {
  const items = CART;
  const total = CART.map((item) => item.price).reduce(
    (prev, curr) => prev + curr,
    0
  );

  const handlerConfirmCart = () => console.log("Confirmar Carrito");
  const handlerDeleteItem = (item) =>
    console.log("Eliminar Elemento: " + item.name);

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.text}>total</Text>
          <Text style={styles.text}>{total}</Text>
        </View>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ebe659",
    borderRadius: 50,
    padding: 10,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontFamily: "ComicNeueAngular",
    padding: 8,
  },
});

export default CartScreen;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { CART } from "../data/cart"; ==DATA SIMULADA==

import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../store/actions/cart.action";
import CartItem from "../components/CartItem";

function CartScreen() {
  // ==DATA SIMULADA==
  // const items = CART;
  // const total = CART.map((item) => item.price).reduce(
  //   (prev, curr) => prev + curr,
  //   0
  // );

  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handlerConfirmCart = () => {
    if (items.length > 0) dispatch(confirmCart(items, total));
    else console.log("Your basket is empty.");
  };
  const handlerDeleteItem = (id) => dispatch(removeItem(id));

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
          <Text style={styles.text}>Your total is: $</Text>
          <Text style={styles.text}>{total}</Text>
        </View>
        <Text style={{ textAlign: "center", paddingBottom: 15 }}>
          Are you ready?
        </Text>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text style={{ fontWeight: "bold" }}>OrderIt!</Text>
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
  },
});

export default CartScreen;

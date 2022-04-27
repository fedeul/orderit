import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";

function ItemDetailScreen() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.items.selected);

  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);

  const handlerAddItemCart = () => dispatch(addItem(item));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{item.name}</Text>
        <Image
          resizeMode="contain"
          style={{
            marginVertical: 35,
            height: imageHeight,
            width: "100%",
          }}
          source={{ uri: item.img }}
        />
        <Text>{item.cap}</Text>
        <View
          style={{
            marginVertical: 35,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.details}>Price ${item.price}</Text>
            <Text style={styles.details}>Stock: {item.stock}</Text>
          </View>
          <TouchableOpacity onPress={handlerAddItemCart}>
            <View style={styles.confirm}>
              <Text style={{ fontWeight: "500" }}>Add to </Text>
              <Ionicons name="basket-outline" size={22} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 35,
    justifyContent: "center",
    paddingBottom: 55,
  },
  title: {
    fontSize: 20,
    fontFamily: "ComicNeueAngularBold",
    paddingTop: 30,
    marginBottom: 5,
    textAlign: "center",
  },
  details: {
    fontSize: 18,
  },
  confirm: {
    flexDirection: "row",
    backgroundColor: "#ebe659",
    borderRadius: 50,
    padding: 10,
    width: 200,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDetailScreen;

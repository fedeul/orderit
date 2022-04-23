import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

function ItemDetailScreen({ route }) {
  const item = route.params.product;

  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);

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
        <View style={{ marginVertical: 35 }}>
          <Text style={styles.details}>Price ${item.price}</Text>
          <Text style={styles.details}>Stock: {item.stock}</Text>
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
    marginHorizontal: 35,
    padding: 35,
    justifyContent: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: "ComicNeueAngularBold",
    marginBottom: 10,
    textAlign: "center",
  },
  details: {
    fontSize: 18,
  },
});

export default ItemDetailScreen;

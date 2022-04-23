import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { ITEMS } from "../data/items";
import ProductItem from "../components/ProductItem";

function CategoryItemScreen({ navigation, route }) {
  const products = ITEMS.filter(
    (product) => product.category === route.params.category.id
  );

  const handleSelect = (item) => {
    navigation.navigate("Detail", {
      product: item,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelect} />
  );

  return (
    <View style={{ marginBottom: 75 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryItemScreen;

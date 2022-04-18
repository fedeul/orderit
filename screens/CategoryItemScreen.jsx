import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { ITEMS } from "../data/items";
import ProductItem from "../components/ProductItem";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function CategoryItemScreen({ navigation, route }) {
  const [loaded] = useFonts({
    Mali: require("../assets/fonts/Mali-Regular.ttf"),
    MaliBold: require("../assets/fonts/Mali-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;
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
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
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

import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/categories";
import GridItem from "../components/GridItem";

function CategoriesScreen({ navigation }) {
  const handledSelectedCategory = (item) => {
    navigation.navigate("Item", {
      category: item,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handledSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

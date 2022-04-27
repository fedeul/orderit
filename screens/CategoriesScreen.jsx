import React from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../store/actions/category.action";
import GridItem from "../components/GridItem";

function CategoriesScreen({ navigation }) {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handledSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Item", {
      category: item,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handledSelectedCategory} />
  );

  return (
    <FlatList
      // style={{ marginBottom: 5 }}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

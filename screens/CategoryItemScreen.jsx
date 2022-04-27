import React, { useEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { filteredItem, selectItem } from "../store/actions/item.action";

function CategoryItemScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryItems = useSelector((state) => state.items.filteredItem);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredItem(category.id));
  }, []);

  const handleSelect = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate("Detail", {
      item: item,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelect} />
  );

  return (
    <View>
      <FlatList
        // style={{ marginBottom: 5 }}
        data={categoryItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
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

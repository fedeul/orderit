import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryItemScreen from "../../screens/CategoryItemScreen";
import ItemDetailScreen from "../../screens/ItemDetailScreen";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "ios" ? COLORS.primary : "",
        },
        headerShadowVisible: true,
        headerTintColor: "black",
        // headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ title: "Catalog" }}
      />
      <Stack.Screen
        name="Item"
        component={CategoryItemScreen}
        options={({ route }) => ({ title: route.params.category.name })}
      />
      <Stack.Screen
        name="Detail"
        component={ItemDetailScreen}
        // options={({ route }) => ({ title: route.params.item.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

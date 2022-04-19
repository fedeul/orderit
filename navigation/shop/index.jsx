import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

// import Home from "../../screens/Home";
// import OrderReady from "../../screens/OrderReady";
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryItemScreen from "../../screens/CategoryItemScreen";
import ItemDetailScreen from "../../screens/ItemDetailScreen";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "ios" ? COLORS.primary : "",
          },
          headerShadowVisible: true,
          headerTintColor: "white",
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{ title: "OrdeIt!" }}
        />
        <Stack.Screen
          name="Item"
          component={CategoryItemScreen}
          options={({ route }) => ({ title: route.params.category.name })}
        />
        <Stack.Screen
          name="Detail"
          component={ItemDetailScreen}
          options={({ route }) => ({ title: route.params.product.name })}
        />
        {/* <Stack.Screen name="OrderReady" component={OrderReady} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

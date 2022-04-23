import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../../screens/CartScreen";
import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "ios" ? COLORS.primary : "",
        },
        headerTintColor: Platform.OS === "ios" ? "white" : "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Order" }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;

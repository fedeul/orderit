import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OrderScreen from "../../screens/OrderScreen";
import { COLORS } from "../../constants/colors";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "ios" ? COLORS.primary : "",
        },
        headerShadowVisible: true,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrderScreen}
        options={{ title: "Orders" }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;

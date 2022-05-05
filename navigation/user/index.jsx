import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

import UserScreen from "../../screens/UserScreen";

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="User profile"
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
        name="User profile"
        component={UserScreen}
        // options={({ route }) => ({ title: route.params.item.name })}
      />
      {/* <Stack.Screen
        name="NewImg"
        component={NewImg}
        options={{ title: "New Image" }}
      /> */}
    </Stack.Navigator>
  );
};

export default UserNavigator;

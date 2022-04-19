import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopNavigator from "../shop";
import CartNavigator from "../cart";
const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  <BottomTabs.Navigator initialRouteName="Shop">
    <BottomTabs.Screen name="ShopTab" component={ShopNavigator} />
    <BottomTabs.Screen name="CartTab" component={CartNavigator} />
  </BottomTabs.Navigator>;
};

export default TabNavigator;

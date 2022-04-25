import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { BlurView } from "expo-blur";
import ShopNavigator from "../shop";
import CartNavigator from "../cart";

import { Feather, Ionicons } from "@expo/vector-icons";
const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "yellow",
        // tabBarBackground: () => (
        //   <BlurView tint="light" intensity={30} style={styles.tabBar} />
        // ),
      }}
    >
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Feather name="grid" size={20} color="black" />
              <Text style={styles.itemText}>Catalog</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        tabBarBadge={2}
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Ionicons name="basket-outline" size={22} color="black" />
              <Text style={styles.itemText}>Order</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#cda102",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 50,
    height: 60,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
  },
  itemText: {
    fontSize: 11,
    marginTop: 3,
  },
});

export default TabNavigator;

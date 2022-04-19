import { Text, View } from "react-native";
import React from "react";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#000000af",
        width: "100%",
        alignItems: "center",
        padding: 30,
      }}
    >
      <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 24 }}>
        Order it!
      </Text>
    </View>
  );
};

export default Header;

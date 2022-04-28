import React from "react";
import { Text, View, Image } from "react-native";

const UserNavigator = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        resizeMode="contain"
        style={{
          marginVertical: 35,
          height: 100,
          width: 100,
          borderRadius: "100%",
          paddingHorizontal: 50,
        }}
        source={{ uri: "https://avatars.githubusercontent.com/u/63756946?v=4" }}
      />
    </View>
  );
};
export default UserNavigator;

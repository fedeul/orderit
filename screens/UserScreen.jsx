import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const UserScreen = () => {
  const [pickedImagePath, setPickedImagePath] = useState(pickedImagePath);

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        resizeMode="cover"
        style={styles.imageContainer}
        source={
          pickedImagePath
            ? {
                uri: pickedImagePath,
              }
            : require("../assets/user-icon.png")
        }
      />
      <View
        style={
          styles.container
          //   flexDirection: "row"
        }
      >
        <View style={styles.gridItem}>
          <TouchableOpacity
            style={{ ...styles.container, backgroundColor: "white" }}
            onPress={showImagePicker}
            title="Select an image"
          >
            <Feather name="image" size={20} color="black" />

            <View style={{ ...styles.container }}>
              <Text adjustsFontSizeToFit={true} style={styles.title}>
                Pick an image
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.gridItem}>
          <TouchableOpacity
            style={{ ...styles.container, backgroundColor: "white" }}
            onPress={openCamera}
            title="Open camera"
          >
            <Feather name="camera" size={20} color="black" />

            <View style={{ ...styles.container }}>
              <Text adjustsFontSizeToFit={true} style={styles.title}>
                Take a photo
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default UserScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginVertical: 35,
    height: 150,
    width: 150,
    borderRadius: 100,
    paddingHorizontal: 50,
  },
  container: {
    flexDirection: "row",
    maxHeight: 200,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
  },
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
});

import { View, Text } from "react-native";
import Styles from "./assets/Styles/mainStyles";
import MainNavigator from "./navigation";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = Font.useFonts({
    ComicNeueAngular: require("./assets/fonts/ComicNeueAngular-Regular.ttf"),
    ComicNeueAngularBold: require("./assets/fonts/ComicNeueAngular-Bold.ttf"),
    ComicNeueAngularBoldItalic: require("./assets/fonts/ComicNeueAngular-BoldItalic.ttf"),
    ComicNeueAngularLight: require("./assets/fonts/ComicNeueAngular-Light.ttf"),
    ComicNeueAngularLightItalic: require("./assets/fonts/ComicNeueAngular-LightItalic.ttf"),
    ComicNeueAngularItalic: require("./assets/fonts/ComicNeueAngular-Italic.ttf"),
  });
  if (!loaded) return <AppLoading />;
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

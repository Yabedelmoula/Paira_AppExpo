import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , StatusBar} from 'react-native';
import Navigation from "./config/Navigations/Navigations";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  console.disableYellowBox = true;
  let [fontsLoaded] = useFonts({
    "Nexa-Regular": require("./assets/fonts/NexaRegular.otf"),
    "Nexa-Bold": require("./assets/fonts/NexaBold.otf"),
    "Nexa-Light": require("./assets/fonts/NexaLight.otf"),
  });
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <AppLoading />
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={false}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
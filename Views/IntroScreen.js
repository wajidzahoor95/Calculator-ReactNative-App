import React from "react";
import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/images/calculatorlogo.jpeg";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerimg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Better than height: "100%"
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
  },
  innerimg: {
    width: 100,
    height: 100,
    resizeMode: "contain", // Makes sure the image scales properly
  },
});

export default IntroScreen;

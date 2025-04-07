import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnBoarding1");
    }, 3000);
  });
  return (
    <View style={[styles.container, { backgroundColor: Colors.primary }]}>
      <Image
        style={styles.logo}
        source={require("../assests/images/logo.jpg")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 278,
    height: 278,
    position: "absolute",
    top: 320,
    left: 67,
    resizeMode: "contain",
  },
});

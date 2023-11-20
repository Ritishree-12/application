import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const Welcome = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 4, backgroundColor: "white" }}>
        <Image style={styles.image} source={require('../../assets/welcome.png')} />
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>Have a better sharing experience</Text>
      </View>
      <View style={{ flex: 2.5, backgroundColor: "white" }}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Register" && styles.active,
          ]}
          onPress={() => handleButtonPress("Register")}
        >
          <Text style={[styles.buttonText, activeButton === "Register" && styles.textWhite]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Signup" && styles.active,
          ]}
          onPress={() => handleButtonPress("Signup")}
        >
          <Text style={[styles.buttonText, activeButton === "Signup" && styles.textWhite]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 60,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "red",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "red",
  },
  textWhite: {
    color: "white",
    fontSize:18,
  },
  buttonText: {
    color: "red", // Default text color
  },
  text1: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 28,
  },
  text2: {
    textAlign: "center",
    fontSize: 20,
    margin: 13,
    color: "grey",
  },
  image: {
    height: 270,
    alignSelf: 'center',
    marginTop: 60,
    width: "100%",
  },
});

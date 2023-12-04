// OtpScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import OtpInput from "./OtpInput";

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(["", "", "", "", "",]);
  const [focusedInput, setFocusedInput] = useState(0);
  const [isOtpEntered, setIsOtpEntered] = useState(false);


  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsOtpEntered(newOtp.some((digit) => digit !== ''));
  };

  const handleInputFocus = (index) => {
    setFocusedInput(index);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isOtpEntered ? 'black' : '#EE272E' }]}>Phone Verification</Text>
      <Text style={styles.message}>Enter your OTP code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <OtpInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(index, text)}
            index={index}
            autoFocus={index === focusedInput}
            onFocus={handleInputFocus}
          />
        ))}
      </View>
      <Text style={styles.message1}>Didn't receive code ?{" "}
      <Text style={styles.message2}>Resend again</Text> </Text>
      <TouchableOpacity
          style={styles.veryfy}
          onPress={() => console.log("Sign Up pressed")}
        >
          <Text 
          style={styles.verifyText} 
          onPress={() => navigation.navigate('HomeScreen')}
          >Verify</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  message: {
    // marginTop: 20,
    fontSize:16,
    color: "gray",
  },
  message1: {
    marginTop: 20,
    color: "gray",
    fontWeight:'bold'
  },
  message2: {
    marginTop: 20,
    color: "#EE272E",
    fontWeight:'bold'
  },
  veryfy:{
    width:'90%',
    height: 50,
    marginVertical: 80,
    borderRadius: 30,
    backgroundColor: "#EE272E",
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal:20,
  },
  verifyText:{
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  }
});

export default OtpScreen;

import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import FlatButton from "../assets/button";
import Communications from "react-native-communications";
import { phonecall, email, text, web } from "react-native-communications";

//use this as the screen for the buttons for emergency and sending sms messages
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.welcomeToWeCare}>Welcome to WeCare</Text>

        {/* <Button
          style={styles.button}
          title="Go to home"
          onPress={() => navigation.goBack("PatientInformation")
        /> 

        /* Call: phonecall(phoneNumber, prompt) */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => Communications.phonecall("0123456789", true)}
        >
          <Text style={styles.buttonText}> EMERGENCY CALL </Text>
        </TouchableOpacity>
        {/* Mail: email(to, cc, bcc, subject, body)  */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() =>
            Communications.email(
              ["polumrtan12@gmail.com", "mrkistruja3@gmailcom"],
              null,
              null,
              "EMERGENCY",
              "This is an emergency."
            )
          }
        >
          <Text style={styles.buttonText}>EMERGENCY EMAIL</Text>
        </TouchableOpacity>
        {/* SMS: text(phoneNumber = null, body = null) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => Communications.text("0123456789", "EMERGENCY")}
        >
          <Text style={styles.buttonText}> EMERGENCY SMS </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#74ab93",
  },
  appTitle: {
    fontSize: 25,
    marginBottom: 40,
    textShadowColor: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#E35C5C",
    marginBottom: 20,
    borderRadius: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: `"Open Sans", sans-serif`,
  },
  logo: {
    width: 300,
    height: 150,
  },
  logoImage: {
    width: 150,
    height: 150,
    WebkitFilter: "drop-shadow(11px 6px 1px rgba(0, 0, 0, 0.25))",
    filter: "drop-shadow(11px 6px 1px rgba(0, 0, 0, 0.25))",
    overflow: "visible",
    aspectRatio: "1.5 / 1",
    backgroundImage: "url(/* image.png */)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginBottom: 50,
  },

  welcomeToWeCare: {
    width: 282,
    height: 217,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-word",
    textShadow: "26px 13px 3px rgba(0, 0, 0, 0.25)",
    fontWeight: 600,
    fontStyle: "italic",
    fontFamily: `"Open Sans", sans-serif`,
    color: "#468172",
    fontSize: 27,
    letterSpacing: 0.4,
    lineHeight: 1.2,
    marginTop: 10,
  },
});

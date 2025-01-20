import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, Button, Card } from "react-native-paper"; // Use Paper components
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const ForgotPassword = () => {
  const navigation = useNavigation();
  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log("forgot password");
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ marginTop: 50 }}>
        <Text style={styles.title}>Forgot</Text>
        <Text style={styles.title}>password?</Text>
      </View>

      {/* Email Input */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <Icon name="email-outline" size={20} color="#000" />
          <TextInput
            placeholder="Enter your email address"
            mode="outlined"
            outlineColor="#fff"
            activeOutlineColor="#fff"
            style={styles.textInput}
            keyboardType="email-address"
          />
        </View>
      </Card>

      {/* Description */}
      <Text style={styles.description}>
        <Text style={styles.asterisk}>*</Text> We will send you a message to set
        or reset your new password
      </Text>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log("Login button pressed")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.loginLinkContainer}>
        <Button mode="text" onPress={() => navigation.navigate("Login")}>
          Back to Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000",
  },
  inputCard: {
    marginTop: 20,
    borderRadius: 8,
    elevation: 0,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    color: "#6c6c6c",
  },
  asterisk: {
    color: "#ff0000",
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    width: 320,
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default ForgotPassword;

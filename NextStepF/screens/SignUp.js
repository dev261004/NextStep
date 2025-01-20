import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Card,
  TextInput,
  Button,
  IconButton,
  HelperText,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    } else if (username == "") {
      setErrorMessage("Fill Email Address");
    } else {
      //signUp operation here
      setErrorMessage("");
      alert("Account Created as \nuser: " + username + "\npass: " + password);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={{ marginBottom: 10, marginTop: 30 }}>
        <Text style={styles.header}>Create an </Text>
        <Text style={styles.header}>account</Text>
      </View>

      {/* Email */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <Icon name="email-outline" size={20} color="#000" />
          <TextInput
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
            mode="outlined"
            outlineColor="#fff"
            keyboardType="email-address"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Passsword */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            outlineColor="#fff"
            activeOutlineColor="#fff"
            style={styles.textInput}
            secureTextEntry={passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </Card>

      {/* Confirm Password */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput
            placeholder="Enter your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            mode="outlined"
            outlineColor="#fff"
            activeOutlineColor="#fff"
            style={styles.textInput}
            secureTextEntry={confirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            style={styles.eyeIcon}
          >
            <Icon
              name={confirmPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </Card>

      {/* Error Message */}
      {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}

      {/* T&C */}
      <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 10 }}>
        By creating an account,
      </Text>
      <Text style={{ fontSize: 10, marginLeft: 10 }}>
        You agree to our Terms and Condition policy
      </Text>

      {/* Sign-Up Button */}
      <LinearGradient
        colors={["#00F996", "#00A6F9"]} // Define your gradient colors
        start={{ x: 0, y: 0 }} // Start at the left (horizontal)
        end={{ x: 1, y: 0 }} // End at the right (horizontal)
        style={styles.gradientButton}
      >
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Social Media Login */}
      <View style={styles.socialContainer}>
        <Text>- OR Continue with -</Text>
        <View style={styles.socialButtons}>
          <IconButton
            icon="google"
            size={30}
            onPress={() => console.log("Google login")}
            style={styles.socialIcon}
          />
          <IconButton
            icon="apple"
            size={30}
            onPress={() => console.log("Apple login")}
            style={styles.socialIcon}
          />
          <IconButton
            icon="facebook"
            size={30}
            onPress={() => console.log("Facebook login")}
            style={styles.socialIcon}
          />
        </View>
      </View>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already Have an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "start",
    marginLeft: 10,
  },
  inputCard: {
    marginTop: 20,
    borderRadius: 8,
    elevation: 0,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 10,
    backgroundColor: "#fff",
    width: 320,
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
  gradientButton: {
    marginTop: 15,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: 320,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },
  socialContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#00F996",
  },
  loginLinkContainer: {
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  loginText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0077b3",
  },
});

export default SignUp;

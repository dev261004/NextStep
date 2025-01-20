import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput, IconButton, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

export default function LoginScreen() {
  const [secureText, setSecureText] = useState(true);
  const navigation = useNavigation(); // Get the navigation prop

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, marginTop: 30 }}>
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.title}>Back!</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Email */}
        <Card style={styles.inputCard}>
          <View style={styles.inputWrapper}>
            <Icon name="email-outline" size={20} color="#000" />
            <TextInput
              placeholder="Enter your email address"
              mode="outlined"
              outlineColor="#fff"
              style={styles.textInput}
              keyboardType="email-address"
              activeOutlineColor="#fff"
            />
          </View>
        </Card>

        {/* password field */}
        <Card style={styles.inputCard}>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={20} color="#000" />
            <TextInput
              placeholder="Enter your password"
              mode="outlined"
              outlineColor="#fff"
              activeOutlineColor="#fff"
              style={styles.textInput}
              secureTextEntry={secureText}
            />
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={styles.eyeIcon}
            >
              <Icon
                name={secureText ? "eye" : "eye-off"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <TouchableOpacity>
        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")} // Use navigation prop
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log("Login button pressed")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>- OR Continue with -</Text>

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

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>Create An Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "start",
    marginLeft: 10,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  forgotPassword: {
    color: "teal",
    textAlign: "right",
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
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
  orText: {
    textAlign: "center",
    marginVertical: 15,
    color: "gray",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  signUpText: {
    textAlign: "center",
    color: "blue",
  },
});

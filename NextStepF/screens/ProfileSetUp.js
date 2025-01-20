import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import {
  TextInput,
  IconButton,
  Card,
  Button,
  Menu,
  Divider,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker"; // Import DateTimePicker

export default function SetupProfileScreen() {
  const [email, setEmail] = useState("user123@gmail.com");
  const [password, setPassword] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control the date picker visibility

  const navigation = useNavigation();

  const handleAadharChange = (text) => {
    // Restrict Aadhar to 12 digits
    if (text.length <= 12) {
      setAadhar(text);
    }
  };

  const handlePincodeChange = (text) => {
    // Restrict Pincode to 6 digits
    if (text.length <= 6 && /^[0-9]*$/.test(text)) {
      setPincode(text);
    }
  };

  const handleBirthDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(Platform.OS === "ios" ? true : false); // Hide picker on Android, keep for iOS
    setBirthDate(currentDate.toLocaleDateString()); // Format date for display
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Setup Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <IconButton
          icon="account-circle"
          size={100}
          style={styles.profileIcon}
          color="#c4c4c4"
        />
        <IconButton
          icon="pencil"
          size={24}
          style={styles.editIcon}
          color="#fff"
          onPress={() => alert("Edit Profile Picture")}
        />
      </View>

      {/* Personal Details */}
      <Text style={styles.sectionTitle}>Personal Details</Text>

      {/* Email */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="email-address"
            editable={false} // user can't change
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Password */}
      <Card style={styles.inputCard}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          outlineColor="#fff"
          activeOutlineColor="#fff"
          secureTextEntry
        />
      </Card>

      <TouchableOpacity>
        <Text style={styles.changePasswordText}>Change Password</Text>
      </TouchableOpacity>

      {/* Address Details */}

      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="House/Flat no"
            value={flatNo}
            onChangeText={setFlatNo}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Address */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Pincode */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Pincode"
            value={pincode}
            onChangeText={handlePincodeChange} // Updated to use handlePincodeChange
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="number-pad"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* City */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={setCity}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* State */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="State"
            value={state}
            onChangeText={setState}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Account Details */}
      <Text style={styles.sectionTitle}>Account Details</Text>

      {/* Aadhar Card Number */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Aadhar Card Number"
            value={aadhar}
            onChangeText={handleAadharChange}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="number-pad"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Card Holder's Name */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Card Holder's Name"
            value={cardHolder}
            onChangeText={setCardHolder}
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {/* Birth Date */}
      <Card style={styles.inputCard}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Birth Date"
            value={birthDate}
            onFocus={() => setShowDatePicker(true)} // Show date picker when input is focused
            mode="outlined"
            outlineColor="#fff"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#fff"
          />
        </View>
      </Card>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleBirthDateChange}
        />
      )}

      {/* Save Button */}
      <LinearGradient
        colors={["#00F996", "#00A6F9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <TouchableOpacity style={styles.button} onPress={() => alert("Save")}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileIcon: {
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 120,
    backgroundColor: "#00A6F9",
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  inputCard: {
    marginTop: 20,
    borderRadius: 8,
    elevation: 0,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    width: 320,
    elevation: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  changePasswordText: {
    color: "#0077b3",
    textAlign: "right",
    marginBottom: 10,
    marginTop: 5,
  },
  gradientButton: {
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 50,
  },
  button: {
    width: "100%",
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  menuAnchor: {
    justifyContent: "center",
  },
});

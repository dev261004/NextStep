import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import LoginScreen from "./screens/Login.js";
import SignUpScreen from "./screens/SignUp.js";
import ForgotPasswordScreen from "./screens/ForgotPassword.js";
import ProfileSetUp from "./screens/ProfileSetUp.js";
import HomeScreen from "./screens/Home.js";
import Cameratab from "./screens/Tabs/Camera.js";
import Nearby from "./screens/Tabs/Nearby.js";
import Status from "./screens/Tabs/Status.js";
import Survey from "./screens/Tabs/Survey.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileSetUp"
          component={ProfileSetUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cameratab"
          component={Cameratab}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Nearbytab"
          component={Nearby}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Statustab"
          component={Status}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Surveytab"
          component={Survey}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

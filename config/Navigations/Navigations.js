// Import React and Component
import React from "react";
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaProvider } from "react-native-safe-area-context";

// Import Screens
import WelcomeScreen from "./../../src/Screens/Welcome";
import BusinessLogin from "./../../src/Screens/BusinessLogin";
import BusinessSignUp from "../../src/Screens/BusinessSignUp";
import SignIn from "./../../src/Screens/SignIn/SignIn";
import SignUp from "./../../src/Screens/SignUp/SignUp";
import BusinessInfo from "./../../src/Screens/BusinessInfo";
import BusinessPlan from "./../../src/Screens/BusinessPlan";
import BottomBar from "./../bottomBar/bottomBar";
import BottomNav from "./../bottomNav";
import SetLocation from "./../../src/Screens/SetLocation";
import Other_User_Profile from "../../src/Screens/Other_User_Profile";
import Challenge_Banner from "../../src/Screens/Challenge_Banner";
import Business_Profile from "../../src/Screens/Business_Profile";
import Challenge_Banner_Accepted from "../../src/Screens/Challenge_Banner_Accepted";
import Marketplace from "../../src/Screens/Marketplace";
const Stack = createNativeStackNavigator();

/* Switch Navigator for those screens which needs to be switched only once
  and we don't want to switch back once we switch from them to the next one */
const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BusinessLogin"
            component={BusinessLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BusinessSignUp"
            component={BusinessSignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SetLocation"
            component={SetLocation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BusinessInfo"
            component={BusinessInfo}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BusinessPlan"
            component={BusinessPlan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Business_Home"
            component={BottomBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Other_User_Profile"
            component={Other_User_Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Challenge_Banner"
            component={Challenge_Banner}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Business_Profile"
            component={Business_Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Challenge_Banner_Accepted"
            component={Challenge_Banner_Accepted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Marketplace"
            component={Marketplace}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;

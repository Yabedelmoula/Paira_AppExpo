import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Business_Home from "./../../src/Screens/Business_Home";
import BusinessAnalytics from "./../../src/Screens/BusinessAnalytics";
import CreateChallenge from "./../../src/Screens/CreateChallenge";
import BusinessChallenges from "./../../src/Screens/BusinessChallenges";
import BusinessProfile from "./../../src/Screens/BusinessProfile";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

// ============ bottomNav for Business Role===============//

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size, backgroundColor }) => {
          let iconName;

          if (route.name === "Business_Home") {
            iconName = focused ? (
              <View>
                <MaterialCommunityIcons name="home" size={30} color="#FF9900" />
              </View>
            ) : (
              <View>
                <MaterialCommunityIcons name="home" size={30} color="gray" />
              </View>
            );
          } else if (route.name === "BusinessAnalytics") {
            iconName = focused ? (
              <View>
                <MaterialIcons name="analytics" size={30} color="#FF9900" />
              </View>
            ) : (
              <View>
                <MaterialIcons name="analytics" size={30} color="gray" />
              </View>
            );
          } else if (route.name === "CreateChallenge") {
            iconName = focused ? (
              <View style={{ bottom: 25 }}>
                <Ionicons name="add-circle-outline" size={50} color="#FF9900" />
              </View>
            ) : (
              <View style={{ bottom: 25 }}>
                <Ionicons name="add-circle-outline" size={50} color="gray" />
              </View>
            );
          } else if (route.name === "BusinessChallenges") {
            iconName = focused ? (
              <View>
                <Ionicons name="trophy" size={25} color="#FF9900" />
              </View>
            ) : (
              <View>
                <Ionicons name="trophy" size={25} color="gray" />
              </View>
            );
          } else if (route.name === "BusinessProfile") {
            iconName = focused ? (
              <View>
                <FontAwesome name="user-circle" size={25} color="#FF9900" />
              </View>
            ) : (
              <View>
                <FontAwesome name="user-circle" size={25} color="gray" />
              </View>
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: "rgba(34,36,40,1)",
        position: "absolute",
        borderTopWidth: 0,
        showLabel: false,
      }}
    >
      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="Business_Home"
        component={Business_Home}
      />
      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="BusinessAnalytics"
        component={BusinessAnalytics}
      />

      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="CreateChallenge"
        component={CreateChallenge}
      />
      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="BusinessChallenges"
        component={BusinessChallenges}
      />

      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="BusinessProfile"
        component={BusinessProfile}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

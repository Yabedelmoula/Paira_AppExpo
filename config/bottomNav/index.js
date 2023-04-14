import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../../src/Screens/Home";
import Search from "./../../src/Screens/Search";
import Achievements_Challenges from "./../../src/Screens/Achievements_Challenges";
import Profile_achievements from "./../../src/Screens/Profile_achievements";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

// ============ bottomNav for User Role===============//

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size, backgroundColor }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <View>
                <MaterialCommunityIcons name="home" size={30} color="#FF9900" />
              </View>
            ) : (
              <View>
                <MaterialCommunityIcons name="home" size={30} color="gray" />
              </View>
            );
          } else if (route.name === "Search") {
            iconName = focused ? (
              <View>
                <Feather name="search" size={25} color="#FF9900" />
              </View>
            ) : (
              <View>
                <Feather name="search" size={25} color="gray" />
              </View>
            );
          } else if (route.name === "Achievements_Challenges") {
            iconName = focused ? (
              <View>
                <Ionicons name="trophy" size={25} color="#FF9900" />
              </View>
            ) : (
              <View>
                <Ionicons name="trophy" size={25} color="gray" />
              </View>
            );
          } else if (route.name === "Profile_achievements") {
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
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="Achievements_Challenges"
        component={Achievements_Challenges}
      />

      <Tab.Screen
        options={{ headerTitleAlign: "center", headerShown: false }}
        name="Profile_achievements"
        component={Profile_achievements}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

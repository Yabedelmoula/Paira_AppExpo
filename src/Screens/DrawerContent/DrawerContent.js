import React from "react";
import { View, Image, Text } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  Animated
} from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem,useDrawerProgress } from "@react-navigation/drawer";
import styles from "./styles";
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
export default function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}
    style={{
      backgroundColor: '#fff',
      flex: 1,
      width: '100%',
      height: '80%',
      // padding: 20,
  }}>
      {/* <==========================> --- <==========================> */}
      <View style={styles.sideMenuContainer}>
        <Image
          source={require("./../../assets/Ellipse7.png")}
          style={styles._profile_img}
        />
        <Text style={styles._user_name}>John Doe</Text>
        <Text  style={styles._user_email}>john@gmail.com</Text>
        <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Overview</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Overview")}
        />
          <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Vera Borrow</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Borrow")}
        />
         <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Transactions</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("Transactions")}
        />
          <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Borrow Contract</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("BorrowContract")}
        />
           <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Help</Text>
              </View>
            );
          }}
          // onPress={() => props.navigation.navigate("Help")}
        />
           <DrawerItem
          label={() => {
            return (
              <View style={styles._dwawer_list_main}>
                <Text style={styles._pages}>Log Out</Text>
              </View>
            );
          }}
          onPress={() => props.navigation.navigate("SignIn")}
        />
      </View>
    </DrawerContentScrollView>
  );
}


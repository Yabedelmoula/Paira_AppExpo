import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import {
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const BusinessProfile = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={[styles.container]}>
        <StatusBar translucent={false} />
        <View style={styles.containerInner}>
          <View style={styles.headerMain}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => props.navigation.goBack()}
            >
              <Menu width={20} height={14} />
            </TouchableOpacity>
            <Text style={[styles.heading]}>Profile</Text>
            <TouchableOpacity style={styles.bellButton}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>
            <Text style={styles.title}>Personal Info</Text>
            <TouchableOpacity>
              <Ionicons name="md-pencil-sharp" size={24} color="#FF9900" />
            </TouchableOpacity>
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              keyboardType="default"
            />
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Job Description"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Contact No."
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end", marginHorizontal: 20 }}
            >
              <Image
                style={styles.passwordIcon}
                source={require("./../../../assets/eyeicon.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>
            <Text style={styles.title}>Business Info</Text>
            <TouchableOpacity>
              <Ionicons name="md-pencil-sharp" size={24} color="#FF9900" />
            </TouchableOpacity>
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Sector A main building"
              keyboardType="default"
            />
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Clothing"
              keyboardType="default"
            />
          </View>
          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="State"
              keyboardType="default"
            />
          </View>

          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="www.businessname.com"
              keyboardType="default"
            />
          </View>
          <View style={styles.dateMain}>
            <TouchableOpacity
              style={styles.dateBox}
              // onPress={() => setOpen(true)}
            >
              <Text style={styles.dateBoxTitle}>Start Time</Text>
              <Entypo name="chevron-down" size={24} color="#9E9E9E" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox}>
              <Text style={styles.dateBoxTitle}>End Time</Text>
              <Entypo name="chevron-down" size={24} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerInner: {
    flex: 1,
    marginHorizontal: 25,
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  heading: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    marginVertical: 20,
  },
  input: {
    width: "80%",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "400",
    fontFamily: "Nexa-Regular",
    paddingHorizontal: 30,
  },
  textinputView: {
    width: 340,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#EFF0F0",
  },
  dateMain: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  dateBox: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 54,
    borderRadius: 14,
    paddingHorizontal: 15,
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateBoxTitle: {
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
    fontSize: 16,
  },
});
export default BusinessProfile;

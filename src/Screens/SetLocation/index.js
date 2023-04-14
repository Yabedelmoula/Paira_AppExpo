import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Logo from "./../../../assets/svg/logo.svg";

class SetLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedBtn: "User",
    };
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" style="dark" />
        <View style={styles.headerView}>
          <View
            style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
          >
            <Logo width={164} height={164} style={{ alignSelf: "center" }} />
          </View>
        </View>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.titleTxt}>Set Location</Text>
          </View>
          <Text style={styles.subTtitle}>
            This is last step towards on boarding process. Set your location and
            username to continue.
          </Text>
        </View>

        <View style={styles.textinputView}>
          <TextInput
            style={styles.input}
            placeholder="Location"
            keyboardType="default"
          />
          <TouchableOpacity
            style={{ flex: 1, alignItems: "flex-end", marginHorizontal: 20 }}
          >
            <Ionicons name="ios-location-sharp" size={22} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textinputView}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtnView}
          onPress={() => this.props.navigation.navigate("SetLocation")}
        >
          <Text style={styles.loginBtnText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default SetLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerView: {
    flexDirection: "row",
    padding: 10,
  },
  headerText: {
    color: "white",
  },
  headerBackView: {
    flexDirection: "row",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  titleTxt: {
    fontSize: 36,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
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

  subTtitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    fontFamily: "Nexa-Light",
    marginHorizontal: 40,
    marginVertical: 20,
    textAlign: "center",
  },

  loginBtnView: {
    width: 330,
    height: 54,
    borderRadius: 30,
    backgroundColor: "#FF9900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtnText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "500",
    color: "#fff",
  },
});

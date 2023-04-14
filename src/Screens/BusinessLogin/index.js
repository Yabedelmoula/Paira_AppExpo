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
  ImageBackground,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class BusinessLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedBtn: "Business",
    };
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" style="dark" />
        <View style={styles.headerView}>
          <Image
            source={require("./../../../assets/logo.png")}
            style={{
              width: 180,
              height: 168,
              resizeMode: "cover",
              alignSelf: "center",
              marginRight: 20,
              borderRadius: 100,
              left: 110,
              top: 20,
            }}
          />
          <ImageBackground
            source={require("./../../../assets/Background.png")}
            style={styles.image}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.titleTxt}>Login</Text>
          </View>
          <View style={styles.BtnView}>
            {this.state.selectedBtn === "User" ? (
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => this.props.navigation.navigate("SignIn")}
              >
                <Text style={styles.BtntitleActive}>User</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignIn")}
              >
                <Text style={styles.BtnTitle}>User</Text>
              </TouchableOpacity>
            )}

            {this.state.selectedBtn === "Business" ? (
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => this.props.navigation.navigate("BusinessLogin")}
              >
                <Text style={styles.BtntitleActive}>Business</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("BusinessLogin")}
              >
                <Text style={styles.BtnTitle}>Business</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{ marginBottom: 120 }}>
          <View style={styles.textinputView}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="email-address"
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
          <Text style={styles.frogotTxt}>Frogot Password?</Text>
          <TouchableOpacity
            style={styles.loginBtnView}
            onPress={() => this.props.navigation.navigate("Business_Home")}
          >
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.line}>
            <Text style={styles.lineTxt}>
              ___________________ Or ____________________
            </Text>
          </View>

          <View style={styles.socialicons}>
            <TouchableOpacity>
              <Image source={require("./../../../assets/fbicon.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require("./../../../assets/gmailicon.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={require("./../../../assets/twittericon.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.signupTxt}>
            <Text>Don’t have an Account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("BusinessSignUp")}
            >
              <Text style={{ color: "#E86A20" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default BusinessLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    width: 150,
    height: 250,
    resizeMode: "cover",
    justifyContent: "center",
    left: 60,
    top: 50,
  },
  headerView: {
    flexDirection: "row",
    marginTop: 50,
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
  BtnView: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#EFF0F0",
    borderRadius: 10,
    alignItems: "center",
  },
  Btn: {
    width: 130,
    backgroundColor: "#FF9900",
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  BtnTitle: {
    fontSize: 18,
    lineHeight: 27,
    marginHorizontal: 20,
  },
  BtntitleActive: {
    alignSelf: "center",
    fontSize: 18,
    lineHeight: 27,
    color: "white",
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
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#EFF0F0",
  },

  labelImg: {
    width: 12,
    height: 10,
    marginHorizontal: 15,
  },
  passlabelImg: {
    width: 10,
    height: 13,
    marginHorizontal: 15,
  },
  passwordIcon: {
    width: 20,
    height: 13,
  },
  frogotTxt: {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 35,
    color: "#6C6D6D",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  line: {
    marginVertical: 10,
    marginLeft: 30,
  },
  lineTxt: {
    color: "gray",
  },
  loginBtnView: {
    width: 330,
    height: 54,
    borderRadius: 30,
    backgroundColor: "#FF9900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  loginBtnText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "500",
    color: "#fff",
  },
  signupTxt: {
    flexDirection: "row",
    marginVertical: 12,
    alignSelf: "center",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
  },

  socialicons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
});

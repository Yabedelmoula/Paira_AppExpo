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
import { Ionicons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

class BusinessPlan extends React.Component {
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
        <View style={styles.BGImgView}>
          <ImageBackground
            source={require("./../../../assets/Background.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.headerView}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>PAIRA PLANS</Text>
            <TouchableOpacity>
              <SimpleLineIcons name="settings" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Image
            source={require("./../../../assets/logo.png")}
            style={{
              width: 110,
              height: 108,
              resizeMode: "cover",
              alignSelf: "center",
              marginRight: 20,
              borderRadius: 100,
            }}
          />

          <Text style={styles.txt}>
            It is a long established fact that the reader will be distracted...
          </Text>

          <View style={styles.PlanCardsView}>
            <TouchableOpacity style={styles.PlanCard}>
              <View style={styles.PlanBtn}>
                <Text style={styles.PlanBtnTxt}>monthly plan</Text>
              </View>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={34}
                color="black"
              />
              <Text style={styles.PlanPrice}>$20</Text>
              <Text style={styles.PlanDuration}>Month</Text>
              <Text style={styles.PlanDes}>
                It is a long established fact that...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.PlanCard}>
              <View style={styles.PlanBtn}>
                <Text style={styles.PlanBtnTxt}>Yearly plan</Text>
              </View>
              <Ionicons
                name="md-checkmark-circle-outline"
                size={34}
                color="black"
              />
              <Text style={styles.PlanPrice}>$300</Text>
              <Text style={styles.PlanDuration}>Year</Text>
              <Text style={styles.PlanDes}>
                It is a long established fact that...
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.BtnView}
            onPress={() => this.props.navigation.navigate("Business_Home")}
          >
            <Text style={styles.BtnText}>Select Plan</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default BusinessPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flexDirection: "column",
    bottom: 230,
  },
  BGImgView: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    bottom: 50,
  },
  image: {
    width: 180,
    height: 280,
    resizeMode: "cover",
    top: 55,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 10,
    elevation: 8,
  },
  headerText: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
  },
  txt: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "Nexa-Light",
    marginHorizontal: 50,
    marginVertical: 15,
    textAlign: "center",
  },
  headerBackView: {
    flexDirection: "row",
  },
  PlanCardsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 30,
  },

  PlanCard: {
    width: 156,
    height: 216,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: "#FF9900",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  PlanBtn: {
    width: 80,
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#FF9900",
    bottom: 30,
  },
  PlanBtnTxt: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
  },
  PlanPrice: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    marginVertical: 10,
  },
  PlanDuration: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Nexa-Regular",
  },
  PlanDes: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Nexa-Regular",
    textAlign: "center",
    marginVertical: 5,
    marginHorizontal: 25,
  },
  BtnView: {
    width: 330,
    height: 54,
    borderRadius: 30,
    backgroundColor: "#FF9900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    marginTop: 50,
  },
  BtnText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "500",
    color: "#fff",
  },
});

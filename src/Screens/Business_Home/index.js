import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import CardImg from "./../../../assets/svg/Img.svg";
import {
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Business_Home = (props) => {
  const [switchValue, setSwitchValue] = useState(true);
  const [switchValue2, setSwitchValue2] = useState(false);
  let [ChipsData, setChipsData] = useState([
    {
      Title: "American",
      selected: false,
    },
    {
      Title: "Art",
      selected: false,
    },
    {
      Title: "BBQ",
      selected: false,
    },
    {
      Title: "Bar",
      selected: false,
    },
    {
      Title: "Bakery",
      selected: false,
    },
    {
      Title: "Black-owned",
      selected: false,
    },
    {
      Title: "Breakfast",
      selected: false,
    },
    {
      Title: "Brunch",
      selected: false,
    },
    {
      Title: "Burger",
      selected: false,
    },
    {
      Title: "Cafe",
      selected: false,
    },
    {
      Title: "Chinese",
      selected: false,
    },
    {
      Title: "Candy",
      selected: false,
    },
    {
      Title: "Coffee",
      selected: false,
    },
    {
      Title: "Community",
      selected: false,
    },
    {
      Title: "Drinks",
      selected: false,
    },
    {
      Title: "Dinner",
      selected: false,
    },
    {
      Title: "Dessert",
      selected: false,
    },
  ]);

  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  const toggleSwitch2 = (value) => {
    setSwitchValue2(value);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerInner}>
          <View style={styles.headerMain}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => props.navigation.goBack()}
            >
              <Menu width={20} height={14} />
            </TouchableOpacity>
            <Text style={[styles.heading]}>Welcome</Text>
            <TouchableOpacity style={styles.bellButton}>
              <MaterialCommunityIcons
                name="bell-ring-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeCard}>
            <CardImg
              style={{ marginTop: 30, marginHorizontal: 20 }}
              width={110}
              height={65}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Text style={[styles.NameTitle]}>Business Name</Text>
              <Text style={styles.subTitle}>Owned By Robert</Text>
            </View>
          </View>

          <Text style={styles.title}>Business Keywords</Text>
          <View style={styles.keywordView}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                marginHorizontal: 5,
                marginVertical: 10,
              }}
            >
              {ChipsData.map((val, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.chipsBtn,
                      { backgroundColor: val.selected ? "#343434" : "#F7F8F8" },
                    ]}
                    onPress={() => {
                      ChipsData[index].selected = !ChipsData[index].selected;
                      setChipsData([...ChipsData]);
                    }}
                  >
                    <Text
                      style={[
                        styles.chipsBtnTxt,
                        { color: val.selected ? "#F7F8F8" : "#343434" },
                      ]}
                    >
                      {val.Title}
                    </Text>
                    {val.selected && (
                      <TouchableOpacity
                        onPress={() => {
                          ChipsData[index].selected = false;
                          setChipsData([...ChipsData]);
                        }}
                      >
                        <Ionicons name="close-sharp" size={24} color="white" />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              style={styles.BtnView}
              onPress={() => this.props.navigation.navigate("Business_Home")}
            >
              <Text style={styles.BtnText}>Add More Keywords</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Settings</Text>

          <View style={styles.settingCard}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={[styles.settingTitle]}>Allow Reviews</Text>
              <Text style={styles.settingSubTitle}>
                Allow participants to add reviews on challenges
              </Text>
            </View>
            <Switch
              style={{ marginTop: 30 }}
              onValueChange={toggleSwitch}
              value={switchValue}
            />
          </View>

          <View style={styles.settingCard}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={[styles.settingTitle]}>Participants Alert</Text>
              <Text style={styles.settingSubTitle}>Owned By Robert</Text>
            </View>
            <Switch onValueChange={toggleSwitch2} value={switchValue2} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  welcomeCard: {
    width: 380,
    height: 85,
    borderRadius: 14,
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 30,
    elevation: 2,
  },
  settingCard: {
    width: 380,
    height: 68,
    borderRadius: 14,
    backgroundColor: "#F7F8F8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  settingTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Nexa-Regular",
    marginHorizontal: 10,
  },
  settingSubTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    fontFamily: "Nexa-Light",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  NameTitle: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
  },
  subTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "400",
    fontFamily: "Nexa-Light",
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    marginVertical: 20,
  },
  keywordView: {
    width: 380,
    borderRadius: 14,
    backgroundColor: "#F7F8F8",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 20,
    elevation: 2,
  },
  BtnView: {
    width: 330,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#FF9900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  BtnText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "500",
    color: "#fff",
  },
  chipsBtn: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  chipsBtnTxt: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Nexa-Regular",
  },
});
export default Business_Home;

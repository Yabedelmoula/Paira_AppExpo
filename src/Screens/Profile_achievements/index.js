import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
  Image,
  Dimensions,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
const Profile_achievements = (props) => {
  const refRBSheet = useRef();
  const [switchValue, setSwitchValue] = useState(true);
  const [switchValue2, setSwitchValue2] = useState(false);
  const [activeTab, setActiveTab] = useState("Achievements");
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };
  const toggleSwitch2 = (value) => {
    setSwitchValue2(value);
  };
  const usersList = [
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Daisy",
      level: 1,
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lisa",
      level: 2,
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Jenny",
      level: 1,
    },
    {
      uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Stephni",
      level: 3,
    },
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Daisy",
      level: 1,
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lisa",
      level: 2,
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Jenny",
      level: 1,
    },
    {
      uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Stephni",
      level: 3,
    },
  ];
  const AchievementsList = [
    {
      heading: "Daily Login Reward",
      title: "Today’s Reward",
      counter: 5,
      time: "09:00 AM",
    },
    {
      heading: "Business Name",
      title: "Visit 5 local businesses and redeem.",
      counter: 5,
      time: "09:00 AM",
    },
  ];
  return (
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <View style={styles.boxInner}>
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                }}
                style={styles.boxProfile}
              />
              <View>
                <Text style={styles.boxUserName}>Robert</Text>
                <Text style={styles.boxLavel}>Level 1</Text>
              </View>
            </View>
            <View style={styles.boxInner2}>
              <MaterialCommunityIcons name="crown" size={24} color="#FF9900" />
              <Text style={styles.boxCounter}>41</Text>
            </View>
          </View>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Friends</Text>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => refRBSheet.current.open()}
            >
              <Text style={styles.viewButtonText}>View All</Text>
              <MaterialIcons name="arrow-right-alt" size={24} color="#00B2FF" />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
            >
              {usersList.map((usersListValue, usersListIndex) => {
                return (
                  <TouchableOpacity
                    key={usersListIndex}
                    style={styles.listCard}
                    onPress={() =>
                      props.navigation.navigate("Other_User_Profile")
                    }
                  >
                    <Image
                      source={{ uri: usersListValue.uri }}
                      style={styles.listProfile}
                    />
                    <Text style={styles.listUserName}>
                      {usersListValue.name}
                    </Text>
                    <Text style={styles.listLevel}>
                      Level {usersListValue.level}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.tabsMain}>
            <TouchableOpacity
              style={
                activeTab === "Achievements" ? styles.activeTab : styles.tab
              }
              onPress={() => setActiveTab("Achievements")}
            >
              <Text
                style={
                  activeTab === "Achievements"
                    ? styles.activeTabTitle
                    : styles.tabTitle
                }
              >
                Achievements
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={activeTab === "Settings" ? styles.activeTab : styles.tab}
              onPress={() => setActiveTab("Settings")}
            >
              <Text
                style={
                  activeTab === "Settings"
                    ? styles.activeTabTitle
                    : styles.tabTitle
                }
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.dataHeading}>
            {activeTab === "Achievements" ? "Recent Achievements" : "Settings"}
          </Text>
          {activeTab === "Achievements" ? (
            <View>
              {AchievementsList.map(
                (achievementsListValue, achievementsListIndex) => {
                  return (
                    <View
                      style={styles.achievementsCard}
                      key={achievementsListIndex}
                    >
                      <View>
                        <Text style={styles.achievementsCardTitle}>
                          {achievementsListValue.heading}
                        </Text>
                        <Text style={styles.achievementsCardSubTitle}>
                          {achievementsListValue.title}
                        </Text>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <View style={styles.achievementsCardCounterMain}>
                          <MaterialCommunityIcons
                            name="crown"
                            size={15}
                            color="#FF9900"
                          />
                          <Text style={styles.achievementsCardCounter}>
                            {achievementsListValue.counter}
                          </Text>
                        </View>
                        <Text style={styles.achievementsCardTime}>
                          {achievementsListValue.time}
                        </Text>
                      </View>
                    </View>
                  );
                }
              )}
            </View>
          ) : (
            <View>
              <View style={styles.achievementsCard}>
                <View>
                  <Text style={styles.achievementsCardTitle}>
                    Daily Login Reward
                  </Text>
                  <Text style={styles.achievementsCardSubTitle}>
                    Get alert when reward is ready
                  </Text>
                </View>
                <Switch onValueChange={toggleSwitch} value={switchValue} />
              </View>
              <View style={styles.achievementsCard}>
                <View>
                  <Text style={styles.achievementsCardTitle}>
                    Business Challenges
                  </Text>
                  <Text style={styles.achievementsCardSubTitle}>
                    Get alert for business challenges near you
                  </Text>
                </View>
                <Switch onValueChange={toggleSwitch2} value={switchValue2} />
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={Dimensions.get("window").height * 0.5}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#FF9900",
          },
          container: {
            // borderRadius: 100,
          },
        }}
      >
        <View style={styles.bsHeader}>
          <Text style={styles.bsHeading}>Friends List</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <AntDesign name="close" size={24} color="#343434" />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 20 }}
        >
          {usersList.map((v, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.bsCard}
                onPress={() => {
                  refRBSheet.current.close();
                  props.navigation.navigate("Other_User_Profile");
                }}
              >
                <View style={styles.bsCardInner}>
                  <Image source={{ uri: v.uri }} style={styles.bsCardProfile} />
                  <View>
                    <Text style={styles.bsCardUserName}>{v.name}</Text>
                    <Text style={styles.bsCardLevel}>Level {v.level}</Text>
                  </View>
                </View>
                <View style={styles.bsCardInner}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={24}
                    color="#FF9900"
                  />
                  <Text style={styles.bsCardCounter}>41</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </RBSheet>
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
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
  },
  box: {
    backgroundColor: "#F7F8F8",
    height: 93,
    borderRadius: 14,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  boxProfile: {
    width: 111,
    height: 65,
    borderRadius: 12,
    marginRight: 15,
  },
  boxInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxUserName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  boxLavel: {
    color: "#6C6D6D",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  boxInner2: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxCounter: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 20,
  },
  listHeaderTitle: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewButtonText: {
    color: "#00B2FF",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginRight: 5,
  },
  listProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  listCard: {
    alignItems: "center",
    marginRight: 15,
  },
  listUserName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
    marginTop: 5,
  },
  listLevel: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  tabsMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  activeTab: {
    backgroundColor: "#FF9900",
    height: 50,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  tab: {
    height: 50,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabTitle: {
    color: "#6C6D6D",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  dataHeading: {
    color: "#343434",
    fontSize: 20,
    marginTop: 15,
    fontFamily: "Nexa-Bold",
    marginHorizontal: 20,
  },
  achievementsCard: {
    backgroundColor: "#F7F8F8",
    height: 68,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  achievementsCardTitle: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  achievementsCardSubTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginTop: 5,
  },
  achievementsCardCounterMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  achievementsCardCounter: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
  achievementsCardTime: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginTop: 5,
  },
  bsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  bsHeading: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  bsCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  bsCardInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  bsCardProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },
  bsCardUserName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  bsCardLevel: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginTop: 2,
  },
  bsCardCounter: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
});
export default Profile_achievements;

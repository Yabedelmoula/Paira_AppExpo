import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import Medel from "./../../../assets/svg/medel.svg";
import Flower from "./../../../assets/svg/flower.svg";
import Number1 from "./../../../assets/svg/number-1.svg";
import Number2 from "./../../../assets/svg/number-2.svg";
import Number3 from "./../../../assets/svg/number-3.svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Achievements_Challenges = (props) => {
  const [activeTab, setActiveTab] = useState("Active Challenges");
  const ActiveChallengesList = [
    {
      name: "Business Name",
      title: "Visit 5 Local Businesses and Redeem.",
      completed: 50,
      icon: <Medel />,
    },
    {
      name: "Business Name",
      title: "Visit 5 Local Businesses and Redeem.",
      completed: 80,
      icon: <Flower />,
    },
    {
      name: "Business Name",
      title: "Visit 5 Local Businesses and Redeem.",
      completed: 30,
      icon: <Medel />,
    },
    {
      name: "Business Name",
      title: "Visit 5 Local Businesses and Redeem.",
      completed: 70,
      icon: <Flower />,
    },
  ];
  const UsersList = [
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Daisy",
      crown: 12,
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lisa",
      level: 10,
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
          <Text style={[styles.heading]}>Achievements</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsMain}>
          <TouchableOpacity
            style={
              activeTab === "Active Challenges" ? styles.activeTab : styles.tab
            }
            onPress={() => setActiveTab("Active Challenges")}
          >
            <Text
              style={
                activeTab === "Active Challenges"
                  ? styles.activeTabTitle
                  : styles.tabTitle
              }
            >
              Active Challenges
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === "Leaderboard" ? styles.activeTab : styles.tab}
            onPress={() => setActiveTab("Leaderboard")}
          >
            <Text
              style={
                activeTab === "Leaderboard"
                  ? styles.activeTabTitle
                  : styles.tabTitle
              }
            >
              Leaderboard
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {activeTab === "Active Challenges" ? (
            <View>
              {ActiveChallengesList.map((v, i) => {
                return (
                  <View key={i} style={styles.activeChallengesCard}>
                    <View style={{ paddingRight: 10, flex: 1 }}>
                      <View style={styles.activeChallengesCardInner}>
                        <View>
                          <Text style={styles.activeChallengesCardName}>
                            {v.name}
                          </Text>
                          <Text style={styles.activeChallengesCardTitle}>
                            {v.title}
                          </Text>
                        </View>
                        {v.icon}
                      </View>
                      <View style={styles.completedSliderMain}>
                        <View
                          style={[
                            styles.completedSlider,
                            { width: `${v.completed}%` },
                          ]}
                        />
                      </View>
                    </View>
                    <Text style={styles.completed}>
                      {v.completed}% Complete
                    </Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <View>
              <View style={styles.LeaderboardHeader}>
                <View style={styles.LeaderboardCard1}>
                  <Number2 />
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    }}
                    style={styles.LeaderboardCardProfile}
                  />
                  <Text style={styles.LeaderboardCardName}>Lisa</Text>
                  <Text style={styles.LeaderboardCardLevel}>Level 1</Text>
                </View>
                <View style={styles.LeaderboardCard2}>
                  <Number1 />
                  <View style={styles.LeaderboardCardImageMain}>
                    <Image
                      source={{
                        uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                      }}
                      style={styles.LeaderboardCardImage}
                    />
                    <View style={styles.crownIconMain}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={20}
                        color="#fff"
                      />
                    </View>
                  </View>
                  <Text style={styles.LeaderboardCardName}>Robert</Text>
                  <Text style={styles.LeaderboardCardLevel}>Level 1</Text>
                </View>
                <View style={styles.LeaderboardCard1}>
                  <Number3 />
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    }}
                    style={styles.LeaderboardCardProfile}
                  />
                  <Text style={styles.LeaderboardCardName}>Daisy</Text>
                  <Text style={styles.LeaderboardCardLevel}>Level 1</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.MarketplaceButton}
                onPress={() => props.navigation.navigate("Marketplace")}
              >
                <Text style={styles.MarketplaceButtonText}>
                  Go To Marketplace
                </Text>
              </TouchableOpacity>
              <View style={styles.dailyRewardCard}>
                <View>
                  <Text style={styles.dailyRewardCardHeading}>
                    Daily Login Reward
                  </Text>
                  <View style={styles.dailyRewardCardInner}>
                    <Text style={styles.dailyRewardCardTitle}>
                      Today’s Reward
                    </Text>
                    <View style={styles.dailyRewardCardCrownMain}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={20}
                        color="#FF9900"
                      />
                      <Text style={styles.dailyRewardCardCrown}>5</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.claimButton}>
                  <Text style={styles.claimButtonText}>Claim</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.dataHeading}>Other Users</Text>
              {UsersList.map((v, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={styles.usersCard}
                    onPress={() =>
                      props.navigation.navigate("Other_User_Profile")
                    }
                  >
                    <View style={styles.usersCardInner}>
                      <View style={styles.counterStyleMain}>
                        <Image
                          source={require("./../../../assets/counter-style.png")}
                          style={styles.counterStyleImage}
                        />
                        <View style={styles.counterStyleCounterMain}>
                          <Text style={styles.counterStyleCounter}>
                            {i + 2}
                          </Text>
                        </View>
                      </View>
                      <Image
                        source={{ uri: v.uri }}
                        style={styles.usersCardProfile}
                      />
                      <View>
                        <Text style={styles.usersCardUserName}>{v.name}</Text>
                        <Text style={styles.usersCardUserLevel}>Level 1</Text>
                      </View>
                    </View>
                    <View style={styles.usersCardCrownMain}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={20}
                        color="#FF9900"
                      />
                      <Text style={styles.usersCardCrownCounter}>
                        {v.crown}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
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
    color: "#343434",
  },
  listProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  tabsMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
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
  activeChallengesCard: {
    backgroundColor: "#F7F8F8",
    marginHorizontal: 20,
    borderRadius: 14,
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  activeChallengesCardName: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  activeChallengesCardTitle: {
    color: "#343434",
    fontSize: 11,
    fontFamily: "Nexa-Regular",
  },
  completed: {
    color: "#00B2FF",
    fontSize: 11,
    fontFamily: "Nexa-Bold",
  },
  activeChallengesCardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedSliderMain: {
    backgroundColor: "#D1D1D1",
    height: 8,
    borderRadius: 10,
    flex: 1,
    marginTop: 5,
  },
  completedSlider: {
    backgroundColor: "#FF9900",
    height: "100%",
    borderRadius: 10,
  },
  LeaderboardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  LeaderboardCardProfile: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 10,
  },
  LeaderboardCardName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
    marginTop: 5,
  },
  LeaderboardCardLevel: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  LeaderboardCard1: {
    alignItems: "center",
    marginTop: 30,
  },
  LeaderboardCard2: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  LeaderboardCardImageMain: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 10,
  },
  LeaderboardCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  crownIconMain: {
    width: 32,
    height: 32,
    backgroundColor: "#FF9900",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 32 / 2,
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  MarketplaceButton: {
    backgroundColor: "#FF9900",
    height: 54,
    marginHorizontal: 30,
    marginTop: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  MarketplaceButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  dailyRewardCard: {
    backgroundColor: "#F7F8F8",
    borderRadius: 14,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10,
  },
  dailyRewardCardHeading: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  dailyRewardCardInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  dailyRewardCardTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  dailyRewardCardCrownMain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  dailyRewardCardCrown: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
  claimButton: {
    backgroundColor: "#FF9900",
    width: 94,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  claimButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  dataHeading: {
    marginHorizontal: 20,
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  usersCard: {
    backgroundColor: "#F7F8F8",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  usersCardInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterStyleMain: {
    width: 34,
    height: 34,
  },
  counterStyleImage: {
    width: "100%",
    height: "100%",
  },
  counterStyleCounterMain: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  counterStyleCounter: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  usersCardProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginHorizontal: 10,
  },
  usersCardUserName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  usersCardUserLevel: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  usersCardCrownMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  usersCardCrownCounter: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
});
export default Achievements_Challenges;

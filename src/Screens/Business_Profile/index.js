import React, { useState } from "react";
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
import Location from "./../../../assets/svg/location.svg";
import Web from "./../../../assets/svg/web.svg";
import Call from "./../../../assets/svg/call.svg";
import Date from "./../../../assets/svg/date.svg";
import Card from "../../components/Cards";
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
const Business_Profile = (props) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={false} />
      <View style={styles.containerInner}>
        <View style={styles.headerMain}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={24} color="#343434" />
          </TouchableOpacity>
          <Text style={[styles.heading]}>Business Profile</Text>
          <TouchableOpacity style={styles.bellButton}>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={24}
              color="#343434"
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 15 }}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={{
                  uri: "https://images.businessnewsdaily.com/app/uploads/2022/04/04080148/1554242443-scaled.jpeg",
                }}
                style={styles.cardImage}
              />
              <View style={{ flex: 1 }}>
                <View style={styles.cardNameMain}>
                  <Text style={styles.cardName}>Business Name</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Feather name="user-plus" size={15} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.followContainer}>
                  <View style={styles.followInner}>
                    <Text style={styles.followTitle}>Challenges</Text>
                    <Text style={styles.followCounter}>12</Text>
                  </View>
                  <View style={styles.followInner}>
                    <Text style={styles.followTitle}>Followers</Text>
                    <Text style={styles.followCounter}>12K</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cardData}>
              <View style={styles.cardDataInner}>
                <View style={styles.cardDataInnerData}>
                  <Location />
                  <Text style={styles.cardDataTitle}>
                    Sector H Main Building
                  </Text>
                </View>
                <View style={styles.cardDataInnerData}>
                  <Web />
                  <Text style={styles.cardDataTitle}>www.business.com</Text>
                </View>
              </View>
              <View style={styles.cardDataInner}>
                <View style={styles.cardDataInnerData}>
                  <Call />
                  <Text style={styles.cardDataTitle}>+92354465666</Text>
                </View>
                <View style={styles.cardDataInnerData}>
                  <Date />
                  <Text style={[styles.cardDataTitle, { color: "#00B2FF" }]}>
                    09:00 AM to 09:00 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Card
            title="Current Challenges"
            addUser={false}
            viewAllShow={false}
            type={1}
            locationShow={false}
            acceptButton={true}
            props={props}
          />
          <Card
            title="Past Challenges"
            addUser={false}
            viewAllShow={false}
            type={2}
            locationShow={true}
            acceptButton={true}
            props={props}
          />
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
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    color: "#343434",
  },
  card: {
    backgroundColor: "#F7F8F8",
    borderRadius: 14,
    elevation: 5,
    padding: 10,
    marginHorizontal: 20,
    marginTop:15
  },
  cardHeader: {
    flexDirection: "row",
  },
  cardImage: {
    width: 111,
    height: 65,
    borderRadius: 12,
    marginRight: 15,
  },
  cardNameMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  followInner: {
    flex: 1,
  },
  followTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  followCounter: {
    color: "#6C6D6D",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  cardData: {
    marginTop: 10,
    flex: 1,
  },
  cardDataInner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
  },
  cardDataInnerData: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  cardDataTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
});
export default Business_Profile;

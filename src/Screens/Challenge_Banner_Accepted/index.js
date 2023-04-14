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
import Star from "./../../../assets/svg/star-2.svg";
import Clock from "./../../../assets/svg/clock-2.svg";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import MapView from "react-native-maps";

const Challenge_Banner_Accepted = (props) => {
  const users = [
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const ReviewList = [
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={false} />
      <MapView style={styles.map} />
      <View style={styles.headerMain}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={[styles.heading]}>Challenge</Text>
        <TouchableOpacity style={styles.bellButton}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 15 }}
        >
          <Image
            source={{
              uri: "https://images.businessnewsdaily.com/app/uploads/2022/04/04080148/1554242443-scaled.jpeg",
            }}
            style={styles.bannerImage}
          />
          <View style={styles.headerCard}>
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Business_Profile")}
              >
                <Text style={styles.cardHeading}>Business Name</Text>
              </TouchableOpacity>
              <Text style={styles.address}>
                Visit 5 Local Businesses and Redeem.
              </Text>
              <View style={styles.locationMain}>
                <Location />
                <Text style={styles.location}>Sector H Main Building</Text>
              </View>
              <View style={styles.dateMain}>
                <View style={styles.dateMainInner}>
                  <Clock />
                  <Text style={styles.date}>20 Apr</Text>
                </View>
                <View style={styles.starMain}>
                  <Star />
                  <Text style={styles.date}>14</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardRightHeaderMain}>
              <View style={styles.cardRightHeader}>
                <TouchableOpacity style={styles.addButton}>
                  <Feather name="user-plus" size={15} color="white" />
                </TouchableOpacity>
                <View>
                  <View style={styles.activeChallengesListCardUsersMain}>
                    {users.map((usersValue, usersIndex) => {
                      return (
                        <View key={usersIndex}>
                          <Image
                            source={{ uri: usersValue.uri }}
                            style={styles.profile}
                          />
                        </View>
                      );
                    })}
                    <View style={styles.totalUsersMain}>
                      <Text style={styles.total}>+1k</Text>
                    </View>
                  </View>
                  <Text style={styles.Participants}>Participants</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => props.navigation.navigate("Profile_achievements")}
              >
                <Text style={styles.acceptButtonText}>Redeem</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewHeading}>Reviews</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>Add Review</Text>
              <MaterialIcons name="arrow-right-alt" size={24} color="#00B2FF" />
            </TouchableOpacity>
          </View>
          {ReviewList.map((v, i) => {
            return (
              <View key={i} style={styles.reviewCard}>
                <View style={styles.reviewCardInner}>
                  <Image
                    source={{ uri: v.uri }}
                    style={styles.reviewCardProfile}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.reviewCardName}>Lisa</Text>
                    <Text style={styles.reviewCardDes}>
                      Lorem ipsum dolor sit amet consectetur. Consequat quam
                      blandit vestibulum egestas cras facilisis dictum.
                    </Text>
                  </View>
                </View>
                <Text style={styles.time}>09:00 AM</Text>
              </View>
            );
          })}
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
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: -40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingBottom: 20,
    position: "absolute",
    width: "100%",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    color: "#fff",
  },
  bannerImage: {
    height: 196,
    borderRadius: 20,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cardHeading: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  address: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginTop: 3,
  },
  locationMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  location: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
  dateMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  dateMainInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginLeft: 5,
  },
  starMain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  activeChallengesListCardUsersMain: {
    flexDirection: "row",
  },
  totalUsersMain: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    backgroundColor: "#00B2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
    marginRight: -10,
    borderWidth: 0.2,
    borderColor: "#FF9900",
  },
  total: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  cardRightHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  cardRightHeaderMain: {
    flex: 1,
    alignItems: "flex-end",
  },
  Participants: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginTop: 5,
  },
  acceptButton: {
    backgroundColor: "#FF9900",
    height: 34,
    width: 94,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  acceptButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
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
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  reviewHeading: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  reviewCard: {
    backgroundColor: "#F7F8F8",
    marginTop: 20,
    borderRadius: 14,
    padding: 10,
  },
  reviewCardInner: {
    flexDirection: "row",
  },
  reviewCardProfile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 10,
  },
  reviewCardName: {
    color: "#343434",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
  reviewCardDes: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  time: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    textAlign: "right",
  },
  sendButton: {
    width: 26,
    height: 26,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26 / 2,
  },
  map: {
    height: 420,
  },
});
export default Challenge_Banner_Accepted;

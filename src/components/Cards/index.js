import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Clock from "./../../../assets/svg/clock.svg";
import Star from "./../../../assets/svg/star.svg";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
const Card = ({
  addUser,
  viewAllShow,
  type,
  locationShow,
  acceptButton,
  title,
  props,
}) => {
  const List = [
    {
      image:
        "https://media.istockphoto.com/id/1319764588/photo/group-of-active-mature-friends-in-park-stacking-hands-after-workout.jpg?s=612x612&w=0&k=20&c=-VRuhM4FZEPjvY_ZF7YokUcFw3reuobgrJEfR6zmAOo=",
      users: [
        {
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      name: "Business Name",
      location: "Visit 5 Local Businesses and Redeem.",
      date: "20 Apr",
      star: "14",
    },
    {
      image:
        "https://media.istockphoto.com/id/917911352/photo/gym-crew.jpg?s=612x612&w=0&k=20&c=Quh3XV9MRNE_eK1f3rv8ivfIPZ6lzXDpGRMVpVpLWZ8=",
      users: [
        {
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      name: "Business Name",
      location: "Visit 5 Local Businesses and Redeem.",
      date: "20 Apr",
      star: "14",
    },
    {
      image:
        "https://marathonhandbook.com/wp-content/uploads/75-Soft-Challenge.jpg",
      users: [
        {
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      name: "Business Name",
      location: "Visit 5 Local Businesses and Redeem.",
      date: "20 Apr",
      star: "14",
    },
    {
      image:
        "https://www.glofox.com/wp-content/uploads/2019/05/supercharge-2-1024x536.png",
      users: [
        {
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          uri: "https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      name: "Business Name",
      location: "Visit 5 Local Businesses and Redeem.",
      date: "20 Apr",
      star: "14",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
        {viewAllShow && (
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View All</Text>
            <MaterialIcons name="arrow-right-alt" size={24} color="#00B2FF" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal={type === 1 ? true : false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 10,
        }}
      >
        {List.map((listValue, listIndex) => {
          return (
            <View
              key={listIndex}
              style={[
                styles.activeChallengesListCard,
                {
                  width:
                    type === 1 ? Dimensions.get("window").width * 0.8 : "92%",
                },
              ]}
            >
              <ImageBackground
                source={{ uri: listValue.image }}
                style={styles.cardImage}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardInner}>
                  <View style={styles.activeChallengesListCardUsersMain}>
                    {listValue.users.map((usersValue, usersIndex) => {
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
                    {addUser && (
                      <TouchableOpacity style={styles.addButton}>
                        <Feather name="user-plus" size={15} color="white" />
                      </TouchableOpacity>
                    )}
                  </View>
                  {acceptButton && (
                    <TouchableOpacity
                      style={styles.acceptButton}
                      onPress={() =>
                        props.navigation.navigate("Challenge_Banner")
                      }
                    >
                      <Text style={styles.acceptButtonText}>Accept</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <ImageBackground
                  source={require("./../../../assets/card-transparent.png")}
                  style={styles.transparentImage}
                  imageStyle={{
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  <View>
                    <Text style={styles.name}>{listValue.name}</Text>
                    <Text style={styles.address}>{listValue.location}</Text>
                  </View>
                  <View>
                    {locationShow && (
                      <View style={styles.locationMain}>
                        <Ionicons
                          name="ios-location-sharp"
                          size={20}
                          color="white"
                        />
                        <Text style={styles.locationMainText}>
                          Sector H Main Building
                        </Text>
                      </View>
                    )}
                    <View style={styles.footer}>
                      <View style={styles.footerInner}>
                        <Clock />
                        <Text style={styles.footerText}>20 Apr</Text>
                      </View>
                      <View style={styles.footerInner}>
                        <Star />
                        <Text style={styles.footerText}>14</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
  },
  activeChallengesListCard: {
    marginLeft: 20,
    height: 165,
    marginTop: 20,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: -10,
    borderWidth: 0.2,
    borderColor: "#FF9900",
  },
  activeChallengesListCardUsersMain: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
  },
  totalUsersMain: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: -10,
    backgroundColor: "#00B2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  transparentImage: {
    height: 165,
    width: 178,
    position: "absolute",
    top: 0,
    right: 0,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  name: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginLeft: 30,
  },
  address: {
    color: "white",
    fontSize: 11,
    fontFamily: "Nexa-Regular",
    marginTop: 10,
    marginRight: 5,
    marginLeft: 30,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
  footerInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginLeft: 10,
  },
  heading: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  cardInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  acceptButton: {
    backgroundColor: "#FF9900",
    height: 34,
    width: 94,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: 5,
  },
  acceptButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  locationMain: {
    flexDirection: "row",
    marginBottom: 21,
    marginRight: 10,
  },
  locationMainText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginLeft: 10,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginLeft: 20,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
});
export default Card;

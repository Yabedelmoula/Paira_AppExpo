import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import RBSheet from "react-native-raw-bottom-sheet";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Card2 from "../../components/Card2";
const BusinessChallenges = (props) => {
  const refRBSheet = useRef();
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
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={false} />
      <View style={styles.headerMain}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Menu width={20} height={14} />
        </TouchableOpacity>
        <Text style={[styles.heading]}>Challenges</Text>
        <TouchableOpacity style={styles.bellButton}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <Card2
            title="Past Challenges"
            type={2}
            props={props}
            addButton={true}
            onPress={() => refRBSheet.current.open()}
          />
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
          <Text style={styles.bsHeading}>Participants List</Text>
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
    paddingHorizontal: 20,
    color: "#343434",
  },
  heading: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
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
export default BusinessChallenges;

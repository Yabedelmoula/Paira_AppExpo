import React, { useEffect, useState, useContext } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./../../components/Cards";
const Home = (props) => {
  const LocalCollectionsList = [
    {
      image:
        "https://www.allrecipes.com/thmb/5jNKih2OYfYwGyzDdUL1FrRx79o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/school-lunch-2000-42a76fc6f8d54d788090c1331018467a.jpg",
      title: "Lunch",
    },
    {
      image:
        "https://d194ip2226q57d.cloudfront.net/images/shutterstock_DateNightHome.original.jpg",
      title: "Date Night",
    },
    {
      image: "https://thumbs.dreamstime.com/z/3d-fun-word-17061254.jpg",
      title: "Fun",
    },
    {
      image:
        "https://www.oxfordlearning.com/wp-content/uploads/2017/04/AdobeStock_132869690.jpeg",
      title: "Study",
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
        <Text style={[styles.heading]}>Welcome</Text>
        <TouchableOpacity style={styles.bellButton}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Card
          title="Featured Challenges"
          addUser={true}
          viewAllShow={false}
          type={1}
          locationShow={false}
          acceptButton={true}
          props={props}
        />
        <Text style={styles.dataHeading}>Local Collections</Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 20, paddingRight: 15 }}
          >
            {LocalCollectionsList.map((v, i) => {
              return (
                <View key={i} style={styles.card}>
                  <Image source={{ uri: v.image }} style={styles.cardImage} />
                  <View style={styles.cardData}>
                    <Text style={styles.cardTitle}>{v.title}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Card
          title="Businesses Near You"
          addUser={true}
          viewAllShow={true}
          type={2}
          locationShow={true}
          acceptButton={true}
          props={props}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    color: "#343434",
  },
  dataHeading: {
    color: "#343434",
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: "Nexa-Bold",
    marginTop: 20,
  },
  card: {
    width: 140,
    height: 147,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 15,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cardData: {
    backgroundColor: "#FF9900",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 27,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
});
export default Home;

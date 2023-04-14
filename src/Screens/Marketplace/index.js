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
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Medel from "./../../../assets/svg/medel.svg";
import Flower from "./../../../assets/svg/flower.svg";
import Coin from "./../../../assets/svg/coin.svg";
import Cap from "./../../../assets/svg/cap.svg";

const Marketplace = (props) => {
  const AvailableRewardsList = [
    {
      title: "Free Event Ticket",
    },
    {
      title: "Free Event Ticket",
    },
    {
      title: "Free Event Ticket",
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
            <Ionicons name="arrow-back-outline" size={24} color="#343434" />
          </TouchableOpacity>
          <Text style={[styles.heading]}>Marketplace</Text>
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
          <View style={styles.card}>
            <View style={styles.cardInner}>
              <Medel />
              <Text style={styles.cardCounter}>40</Text>
            </View>
            <View style={styles.cardInner}>
              <Flower />
              <Text style={styles.cardCounter}>20</Text>
            </View>
            <View style={styles.cardInner}>
              <Coin />
              <Text style={styles.cardCounter}>100</Text>
            </View>
            <View style={styles.cardInner}>
              <Cap width={30} height={30} />
              <Text style={styles.cardCounter}>24</Text>
            </View>
          </View>
          <Text style={styles.dataHeading}>Products Rewards</Text>
          <View style={styles.productCard}>
            <View style={styles.productCardInner}>
              <Image
                source={{
                  uri: "https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg",
                }}
                style={styles.productCardImage}
              />
              <View>
                <Text style={styles.productCardName}>Product Name</Text>
                <Text style={styles.productCardName2}>Business Name</Text>
                <View style={styles.productCardDataFooter}>
                  <View style={styles.productCardDataFooterInner}>
                    <Cap width={15} height={15} />
                    <Text style={styles.productCardDataFooterCounter}>5</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.RedeemButton}
                    onPress={() =>
                      props.navigation.navigate("Profile_achievements")
                    }
                  >
                    <Text style={styles.RedeemButtonText}>Redeem</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Image
              source={{
                uri: "https://static-01.daraz.pk/p/dc3834be609926da3ef2023a4e1fdb8f.jpg",
              }}
              style={styles.dropImage}
            />
          </View>
          <Text style={styles.dataHeading}>Available Rewards</Text>
          {AvailableRewardsList.map((v, i) => {
            return (
              <View key={i} style={styles.AvailableRewardsCard}>
                <View>
                  <Text style={styles.AvailableRewardsCardTitle}>
                    Free Event Ticket
                  </Text>
                  <Text style={styles.AvailableRewardsCardTitle2}>
                    Business Name
                  </Text>
                  <Text style={styles.AvailableRewardsCardDes}>
                    Use your assets to get ticket now
                  </Text>
                  <Text style={styles.AvailableRewardsCardDate}>
                    Validity: 08 Apr 2023
                  </Text>
                </View>
                <View style={styles.AvailableRewardsCardData}>
                  <View style={styles.productCardDataFooterInner}>
                    <Cap width={15} height={15} />
                    <Text style={styles.productCardDataFooterCounter}>5</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.RedeemButton2}
                    onPress={() =>
                      props.navigation.navigate("Profile_achievements")
                    }
                  >
                    <Text style={styles.RedeemButton2Text}>Redeem</Text>
                  </TouchableOpacity>
                </View>
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
  card: {
    backgroundColor: "#F7F8F8",
    height: 82,
    borderRadius: 14,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginHorizontal: 20,
    elevation: 5,
  },
  cardInner: {
    alignItems: "center",
  },
  cardCounter: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
    marginTop: 5,
  },
  dataHeading: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
    margin: 20,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  dropImage: {
    height: 102,
    width: 102,
    borderRadius: 10,
  },
  productCardInner: {
    backgroundColor: "#F7F8F8",
    flex: 1,
    marginRight: 10,
    height: 102,
    borderRadius: 10,
    flexDirection: "row",
  },
  productCardImage: {
    height: "100%",
    width: 102,
    borderRadius: 10,
    marginRight: 10,
  },
  productCardName: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginTop: 10,
  },
  productCardName2: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  productCardDataFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  productCardDataFooterInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  productCardDataFooterCounter: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 5,
  },
  RedeemButton: {
    backgroundColor: "#FF9900",
    height: 30,
    width: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  RedeemButtonText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Nexa-Regular",
  },
  AvailableRewardsCard: {
    backgroundColor: "#F7F8F8",
    borderRadius: 14,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 15,
  },
  AvailableRewardsCardTitle: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  AvailableRewardsCardTitle2: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  AvailableRewardsCardDes: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginVertical: 5,
  },
  AvailableRewardsCardDate: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
  },
  RedeemButton2: {
    backgroundColor: "#FF9900",
    height: 34,
    width: 94,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  RedeemButton2Text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  AvailableRewardsCardData: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
export default Marketplace;

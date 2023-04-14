import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ChellengeCard = ({ title, subtitle, value, img }) => {
  return (
    <View style={styles._chellenge_view}>
      <View style={styles._inner_section}>
        <View style={styles._left}>
          <Text style={styles._title}>{title}</Text>
          <Text style={styles._sub_title}>{subtitle}</Text>
        </View>
        <View style={styles._right}>
          <Image source={img} />
        </View>
      </View>
      <View style={styles._footer}>
        <View style={styles.chellenge_row}>
          <View style={styles._progress_bar}>
            <View style={[styles._percentage, { width: `${value}%` }]}></View>
          </View>
          <Text style={styles._value}>{value}% Complete</Text>
        </View>
      </View>
    </View>
  );
};
let styles = StyleSheet.create({
  _chellenge_view: {
    backgroundColor: "#F7F8F8",
    padding: 14,
    marginVertical: 10,
    borderRadius: 14,
  },
  _inner_section: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  _left: {},
  _progress_bar: {
    backgroundColor: "#D1D1D1",
    borderRadius: 18,
    height: 8,
    overflow: "hidden",
    flex: 1,
    marginRight: 20,
  },
  _percentage: {
    backgroundColor: "#FF9900",
    height: 8,
    borderRadius: 18,
  },
  _title: {
    color: "#343434",
    fontFamily: "Nexa-Bold",
    fontSize: 16,
  },
  _sub_title: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    marginVertical: 13,
  },
  _value: {
    color: "#00B2FF",
    fontFamily: "Nexa-Bold",
    fontSize: 12,
  },
  _footer: {
    flexDirection: "row",
  },
  chellenge_row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ChellengeCard;

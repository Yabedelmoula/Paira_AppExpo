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
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Dropdown } from "react-native-element-dropdown";
import Card2 from "../../components/Card2";
import RBSheet from "react-native-raw-bottom-sheet";
const BusinessAnalytics = (props) => {
  const [selectedData, setSelectedData] = useState("Weekly");
  const refRBSheet = useRef();
  const data = {
    labels: ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `#00B2FF`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ["Rainy Days"], // optional
  };
  const DropdownList = [
    {
      label: "Weekly",
      value: "Weekly",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
    {
      label: "Yearly",
      value: "Yearly",
    },
  ];
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
        <Text style={[styles.heading]}>Analytics</Text>
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
          <View style={styles.chartHeader}>
            <View style={styles.chartHeaderInner}>
              <View style={styles.ParticipantsCard}>
                <View
                  style={[styles.chartCircle, { backgroundColor: "#1F78B4" }]}
                />
                <Text style={styles.chartHeaderTitle}>Participants</Text>
              </View>
              <View style={styles.Challenge}>
                <View
                  style={[styles.chartCircle, { backgroundColor: "#00B2FF" }]}
                />
                <Text style={styles.chartHeaderTitle}>Complete Challenge</Text>
              </View>
            </View>
            <View style={styles.dropdownMain}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                itemTextStyle={styles.itemTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={DropdownList}
                searchPlaceholder="Search..."
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Select"}
                value={selectedData}
                onChange={(value) => setSelectedData(value.label)}
                renderRightIcon={() => (
                  <AntDesign name="caretdown" size={15} color="#9E9E9E" />
                )}
              />
            </View>
          </View>
          <LineChart
            data={data}
            width={Dimensions.get("window").width}
            height={197}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `#6C6D6D`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "8",
                strokeWidth: "0",
                stroke: "#000",
              },
            }}
          />
          <Card2
            title="Active Challenges"
            type={1}
            props={props}
            addButton={false}
            onPress={() => refRBSheet.current.open()}
          />
          <Card2
            title="Past Challenges"
            type={2}
            props={props}
            addButton={false}
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
  chartHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  chartHeaderInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  ParticipantsCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartCircle: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
  },
  chartHeaderTitle: {
    color: "#343434",
    fontSize: 8,
    fontFamily: "Nexa-Bold",
    marginLeft: 5,
  },
  Challenge: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  dropdownMain: {
    height: 30,
    borderRadius: 30,
    width: 100,
    backgroundColor: "#F7F8F8",
  },
  termsMain: {
    flexDirection: "row",
    marginTop: 30,
  },
  checkBox: {
    width: 23,
    height: 20,
    borderWidth: 2,
    borderColor: "red",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  termsDataMain: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  termsButtonTitle: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    paddingHorizontal: 3,
    textAlign: "center",
  },
  termsText: {
    color: "#6C6D6D",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
    textAlign: "center",
  },
  dropdown: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    textAlignVertical: "center",
    color: "#343434",
  },
  selectedTextStyle: {
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    textAlignVertical: "center",
    color: "#343434",
  },
  itemTextStyle: {
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    color: "#343434",
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
export default BusinessAnalytics;

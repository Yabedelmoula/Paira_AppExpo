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
import Star from "./../../../assets/svg/star-2.svg";
import Clock from "./../../../assets/svg/clock-2.svg";
import { Ionicons, Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
const Card2 = ({ type, title, props, addButton, onPress }) => {
  const [List, setList] = useState([
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
      accordion: false,
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
      accordion: false,
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
      accordion: false,
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
      accordion: false,
    },
  ]);
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `#00B2FF`, // optional
        strokeWidth: 2, // optional
      },
    ],
    // legend: ["Rainy Days"], // optional
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
        {addButton && (
          <TouchableOpacity>
            <Ionicons name="ios-add-circle-outline" size={24} color="#FF9900" />
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
              <Image
                source={{ uri: listValue.image }}
                style={styles.cardImage}
              />
              <View style={styles.cardInner}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardHeaderTitle}>
                    Visit 5 local businesses and redeem.
                  </Text>
                  {type === 2 && (
                    <TouchableOpacity
                      onPress={() => {
                        List[listIndex].accordion = !List[listIndex].accordion;
                        setList([...List]);
                      }}
                    >
                      <Entypo
                        name={
                          listValue.accordion ? "chevron-up" : "chevron-down"
                        }
                        size={24}
                        color="#343434"
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.cardSubHeader}>
                  <View style={styles.cardSubHeaderInner}>
                    <View style={styles.cardSubHeaderCard}>
                      <Clock width={14} height={14} />
                      <Text style={styles.cardSubHeaderTitle}>20 Apr</Text>
                    </View>
                    <View
                      style={[styles.cardSubHeaderCard, { marginLeft: 20 }]}
                    >
                      <Star width={14} height={14} />
                      <Text style={styles.cardSubHeaderTitle}>14</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.viewButton} onPress={onPress}>
                    <Text style={styles.viewButtonText}>View Participants</Text>
                    <MaterialIcons
                      name="arrow-right-alt"
                      size={24}
                      color="#00B2FF"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.cardTagsMain}>
                  <View style={styles.cardTagsInner}>
                    <Text style={styles.cardTagsTitle}>Participants</Text>
                    <Text style={styles.cardTagsCounter}>12</Text>
                  </View>
                  <View style={styles.cardTagsInner}>
                    <Text style={styles.cardTagsTitle}>Complete By</Text>
                    <Text style={styles.cardTagsCounter}>10</Text>
                  </View>
                  <View style={styles.cardTagsInner}>
                    <Text style={styles.cardTagsTitle}>In Trend (D)</Text>
                    <Text style={styles.cardTagsCounter}>10</Text>
                  </View>
                </View>
                {type === 2 && (
                  <>
                    {listValue.accordion && (
                      <View>
                        <Text style={styles.trendHeading}>Weekly Trend</Text>
                        <View style={styles.chartMain}>
                          <LineChart
                            data={data}
                            width={type === 1 ? 292 : 330}
                            height={200}
                            style={{
                              paddingRight: 15,
                              borderRadius: 5,
                              paddingLeft: -15,
                              width: "100%",
                            }}
                            // verticalLabelRotation={30}
                            spacing={0}
                            spacingInner={0}
                            withInnerLines={false} // hide the grid behind chart
                            withHorizontalLabels={false} // hide horizontal labels
                            withOuterLines={false} // hide lines next to labels
                            withShadow={true}
                            chartConfig={{
                              withShadow: false,
                              withOuterLines: false,
                              backgroundColor: "#00B2FF",
                              backgroundGradientFrom: "#fff",
                              backgroundGradientTo: "#fff",
                              decimalPlaces: 2, // optional, defaults to 2dp
                              color: (opacity = 1) => `#00B2FF`,
                              labelColor: (opacity = 1) => `#6C6D6D`,
                              style: {
                                borderRadius: 16,
                              },
                              propsForDots: {
                                r: "7",
                                strokeWidth: "2",
                                stroke: "#fff",
                              },
                            }}
                            bezier
                          />
                        </View>
                      </View>
                    )}
                  </>
                )}
              </View>
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
    marginTop: 20,
    borderRadius: 14,
    backgroundColor: "#F7F8F8",
  },
  cardImage: {
    width: "100%",
    height: 142,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  heading: {
    color: "#343434",
    fontSize: 20,
    fontFamily: "Nexa-Bold",
  },
  cardInner: {
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderTitle: {
    color: "#343434",
    fontSize: 13,
    fontFamily: "Nexa-Regular",
  },
  cardSubHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
  },
  cardSubHeaderInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardSubHeaderCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardSubHeaderTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Bold",
    marginLeft: 10,
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
  cardTagsMain: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTagsTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  cardTagsCounter: {
    color: "#6C6D6D",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  cardTagsInner: {
    flex: 1,
  },
  trendHeading: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginTop: 10,
  },
  chartMain: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
export default Card2;

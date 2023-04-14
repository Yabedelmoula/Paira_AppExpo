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
  TextInput,
  Switch,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-date-picker";
import Menu from "./../../../assets/svg/menu.svg";
import {
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";

const CreateChallenge = (props) => {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };
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
        <Text style={[styles.heading]}>Create Challenge</Text>
        <TouchableOpacity style={styles.bellButton}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <TouchableOpacity style={styles.addImageBox} onPress={pickImage}>
            {image === null ? (
              <Text style={styles.addImageBoxTitle}>Add Image</Text>
            ) : (
              <Image source={{ uri: image }} style={styles.addImage} />
            )}
          </TouchableOpacity>
          <View style={styles.dropdownMain}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"Challenge Type"}
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              // renderLeftIcon={() => (
              //   <AntDesign
              //     style={styles.icon}
              //     color={isFocus ? "blue" : "black"}
              //     name="Safety"
              //     size={20}
              //   />
              // )}
            />
          </View>
          <View style={styles.inputMain}>
            <TextInput
              placeholder="Description"
              placeholderTextColor={"#9E9E9E"}
              style={styles.input}
            />
          </View>
          <View style={styles.inputMain}>
            <TextInput
              placeholder="Address"
              placeholderTextColor={"#9E9E9E"}
              style={styles.input}
            />
          </View>
          <View style={styles.dateMain}>
            <TouchableOpacity
              style={styles.dateBox}
              // onPress={() => setOpen(true)}
            >
              <Text style={styles.dateBoxTitle}>Start Date</Text>
              <Entypo name="chevron-down" size={24} color="#9E9E9E" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox}>
              <Text style={styles.dateBoxTitle}>End Time</Text>
              <Entypo name="chevron-down" size={24} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
          <View style={styles.dropdownMain}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"Reward Type"}
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              // renderLeftIcon={() => (
              //   <AntDesign
              //     style={styles.icon}
              //     color={isFocus ? "blue" : "black"}
              //     name="Safety"
              //     size={20}
              //   />
              // )}
            />
          </View>
          <View style={styles.inputMain}>
            <TextInput
              placeholder="Reward"
              placeholderTextColor={"#9E9E9E"}
              style={styles.input}
            />
          </View>
          <View style={styles.servicesCard}>
            <View style={styles.servicesCardInner}>
              <View style={{ flex: 1 }}>
                <Text style={styles.servicesCardHeading}>
                  Allow Geolocation Service
                </Text>
                <Text style={styles.servicesCardDes}>
                  Allow participants to complete the challenge using in app
                  Geolocation Service
                </Text>
              </View>
              <Switch onValueChange={toggleSwitch} value={switchValue} />
            </View>
            <View style={styles.locationButton}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={"#9E9E9E"}
                style={styles.locationInput}
              />
              <Ionicons name="location-sharp" size={24} color="#6C6D6D" />
            </View>
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <DatePicker
        modal
        open={open}
        date={startDate}
        onConfirm={(date) => {
          setOpen(false);
          setStartDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
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
    marginHorizontal: 20,
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
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: "Nexa-Bold",
    color: "#343434",
  },
  addImageBox: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 130,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addImageBoxTitle: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  addImage: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },
  dropdownMain: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 54,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    height: "100%",
    paddingHorizontal: 8,
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
  },
  input: {
    flex: 1,
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
    fontSize: 16,
  },
  inputMain: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 54,
    borderRadius: 14,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  dateMain: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateBox: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 54,
    borderRadius: 14,
    paddingHorizontal: 15,
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateBoxTitle: {
    color: "#9E9E9E",
    fontFamily: "Nexa-Regular",
    fontSize: 16,
  },
  servicesCard: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    borderRadius: 14,
    marginTop: 20,
    paddingHorizontal: 15,
    padding: 10,
    flex: 1,
  },
  servicesCardInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  servicesCardHeading: {
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  servicesCardDes: {
    color: "#343434",
    fontSize: 12,
    fontFamily: "Nexa-Regular",
  },
  locationButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    height: 54,
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  locationInput: {
    marginHorizontal: 5,
    flex: 1,
    color: "#343434",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  createButton: {
    backgroundColor: "#FF9900",
    height: 54,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  createButtonText:{
    color: "#fff",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  }
});
export default CreateChallenge;

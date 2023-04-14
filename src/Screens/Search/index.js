import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import Menu from "./../../../assets/svg/menu.svg";
import CardImg from "./../../../assets/svg/Img.svg";
import {
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Card from "../../components/Cards";
const Search = (props) => {
  const [reset, setReset] = useState(false);
  let [ChipsData, setChipsData] = useState([
    {
      Title: "American",
      selected: false,
    },
    {
      Title: "Art",
      selected: false,
    },
    {
      Title: "BBQ",
      selected: false,
    },
    {
      Title: "Bar",
      selected: false,
    },
    {
      Title: "Bakery",
      selected: false,
    },
    {
      Title: "Black-owned",
      selected: false,
    },
    {
      Title: "Breakfast",
      selected: false,
    },
    {
      Title: "Brunch",
      selected: false,
    },
    {
      Title: "Burger",
      selected: false,
    },
    {
      Title: "Cafe",
      selected: false,
    },
    {
      Title: "Chinese",
      selected: false,
    },
    {
      Title: "Candy",
      selected: false,
    },
    {
      Title: "Coffee",
      selected: false,
    },
    {
      Title: "Community",
      selected: false,
    },
    {
      Title: "Drinks",
      selected: false,
    },
    {
      Title: "Dinner",
      selected: false,
    },
    {
      Title: "Dessert",
      selected: false,
    },
  ]);

  const [list, setList] = useState([
    {
      title: "All",
      selected: true,
    },
    {
      title: "Food",
      selected: false,
    },
    {
      title: "Retail",
      selected: false,
    },
    {
      title: "Non Profit",
      selected: false,
    },
    {
      title: "Entertainment",
      selected: false,
    },
  ]);
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
        <Text style={[styles.heading]}>Search</Text>
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
        <View style={styles.searchMain}>
          <Ionicons name="search-sharp" size={24} color="#6C6D6D" />
          <TextInput
            placeholder="Search"
            placeholderTextColor={"#9E9E9E"}
            style={styles.input}
          />
        </View>
        <View style={styles.tagsMain}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 20, paddingRight: 15 }}
          >
            {list.map((v, i) => {
              return (
                <TouchableOpacity
                  style={v.selected ? styles.selectedTags : styles.tags}
                  onPress={() => {
                    list[i].selected = !list[i].selected;
                    setList([...list]);
                    setReset(false);
                  }}
                >
                  <Text
                    style={[
                      styles.tagsTitle,
                      { color: v.selected ? "white" : "#FF9900" },
                    ]}
                  >
                    {v.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {!reset && (
          <View style={styles.keywordView}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {ChipsData.map((val, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.chipsBtn,
                      { backgroundColor: val.selected ? "#343434" : "#F7F8F8" },
                    ]}
                    onPress={() => {
                      ChipsData[index].selected = !ChipsData[index].selected;
                      setChipsData([...ChipsData]);
                    }}
                  >
                    <Text
                      style={[
                        styles.chipsBtnTxt,
                        { color: val.selected ? "#F7F8F8" : "#343434" },
                      ]}
                    >
                      {val.Title}
                    </Text>
                    {val.selected && (
                      <TouchableOpacity
                        onPress={() => {
                          ChipsData[index].selected = false;
                          setChipsData([...ChipsData]);
                        }}
                      >
                        <Ionicons name="close-sharp" size={24} color="white" />
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.tagsFooterButtonMain}>
              <TouchableOpacity
                style={styles.tagsFooterButton}
                onPress={() => setReset(true)}
              >
                <Text style={styles.tagsFooterButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagsFooterButton}>
                <Text style={styles.tagsFooterButtonText}>Suggest Keyword</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        )}

        <Card
          title="Businesses Near You"
          addUser={true}
          viewAllShow={false}
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
  keywordView: {
    borderRadius: 14,
    backgroundColor: "#F7F8F8",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
  },
  chipsBtn: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: "#343434",
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  chipsBtnTxt: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Nexa-Regular",
  },
  searchMain: {
    backgroundColor: "#F7F8F8",
    borderWidth: 1,
    borderColor: "#EFF0F0",
    marginHorizontal: 20,
    marginTop: 15,
    height: 54,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "#9E9E9E",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
    marginLeft: 10,
  },
  tagsMain: {
    marginTop: 20,
  },
  selectedTags: {
    height: 36,
    borderRadius: 20,
    backgroundColor: "#FF9900",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#FF9900",
    marginRight: 15,
  },
  tags: {
    borderWidth: 2,
    borderColor: "#FF9900",
    height: 36,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
  },
  tagsTitle: {
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  tagsFooterButtonMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  tagsFooterButton: {
    borderWidth: 2,
    borderColor: "#FF9900",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 44,
  },
  tagsFooterButtonText: {
    color: "#FF9900",
    fontSize: 16,
    fontFamily: "Nexa-Regular",
  },
  searchButton: {
    backgroundColor: "#FF9900",
    height: 54,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  searchButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Nexa-Bold",
  },
});
export default Search;

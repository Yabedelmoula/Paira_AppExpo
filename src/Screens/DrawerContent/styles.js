import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sideMenuContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  _profile_img: {
    width: 58,
    height: 58,
    // borderRadius: 50 / 2,
    // alignSelf:"center",
    marginTop: 20,
    marginLeft: 20,
  },
  _user_name: {
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: "bold",
  },
  _user_email: {
    color: "#A4A4A4",
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
    marginLeft: 20,
  },
  _pages: {
    color: "#000",
    fontSize: 16,
    lineHeight: 24,
    // marginLeft: 10,
  },
  _dwawer_list_main: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -15,
  },
});

export default styles;
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Logo from "./../../../assets/svg/logo.svg";

const slides = [
  {
    key: "one",
    title: "Welcome to Paira",
    text: "Lorem ipsum dolor sit amet\n consectetur. Cursus sapien vel\n nec quam viverra ornare ornare\n ullamcorper. Nisl donec nascetur\n sed scelerisque sit.",
    image: require("./../../../assets/amico.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Welcome to Paira",
    text: "Lorem ipsum dolor sit amet\n consectetur. Cursus sapien vel\n nec quam viverra ornare ornare\n ullamcorper. Nisl donec nascetur\n sed scelerisque sit.",
    image: require("./../../../assets/pana.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "three",
    title: "Welcome to Paira",
    text: "Lorem ipsum dolor sit amet\n consectetur. Cursus sapien vel\n nec quam viverra ornare ornare\n ullamcorper. Nisl donec nascetur\n sed scelerisque sit.",
    image: require("./../../../assets/amico.jpg"),
    backgroundColor: "#59b2ab",
  },
];

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({ item }) => {
    return (
      <ImageBackground
        source={require("./../../../assets/introImg.png")}
        style={styles.Bgimage}
      >
        <Logo
          width={124}
          height={124}
          style={{ alignSelf: "center", bottom: 220, flex: 1 }}
        />
        <View style={styles.slide}>
          <Image source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  };
  _renderNextButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("BusinessLogin")}
          style={styles._BtnView}
        >
          <Text style={styles._BtnTitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderDoneButton = () => {
    // this.setState({ showRealApp: true });
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("BusinessLogin")}
          style={styles._BtnView}
        >
          <Text style={styles._BtnTitle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return <WelcomeScreen />;
    } else {
      return (
        <AppIntroSlider
          showDoneButton={true}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this.renderDoneButton}
          bottomButton={true}
          dotStyle={{ backgroundColor: "#bababa", marginTop: 10 }}
          activeDotStyle={{ backgroundColor: "#FF9900", marginTop: 10 }}
          renderItem={this._renderItem}
          data={slides}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    bottom: 60,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    lineHight: 28,
    fontFamily: "Nexa-Regular",
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    lineHight: 16,
    fontFamily: "Nexa-Regular",
  },
  _BtnView: {
    width: 330,
    height: 54,
    borderRadius: 30,
    backgroundColor: "#FF9900",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  _BtnTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "500",
    color: "#fff",
  },
  Bgimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    top: 80,
  },
});

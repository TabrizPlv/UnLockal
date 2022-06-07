import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Pressable,
  ImageBackground,
} from "react-native";

export default function EmptyStorePage() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "pink", height: "100%", width: "100%" }}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.StoreTitleView}>
        <Text style={styles.StoreTitleText}>UnLockal</Text>
      </View>
      <ImageBackground
        style={styles.ImageBg}
        source={require("../assets/icon.png")}
      >
        <Image
          style={styles.DefaultImage}
          source={require("../assets/QuestionMark.png")}
        />
      </ImageBackground>
      <View style={styles.DescriptionView}>
        <Text style={styles.DescriptionText}>
          No description yet!
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  StoreTitleView: {
    backgroundColor: "red",
    height: Dimensions.get("window").height * 0.2,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 32,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  StoreTitleText: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
  ImageBg: {
    height: Dimensions.get("window").height * 0.4,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  DefaultImage: {
    height: Dimensions.get("window").height * 0.4,
    width: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  DescriptionView: {
    backgroundColor: "green",
    height: Dimensions.get("window").height * 0.2,
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DescriptionText: {
    fontSize: 35,
    color: "yellow",
    margin: 20,
  },
});

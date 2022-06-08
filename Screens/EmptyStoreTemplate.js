import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  Text,
  TextInput,
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
      style={{ backgroundColor: "pink", flex: 1}}
    >
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.StoreTitleView}>
          <TextInput
            style={styles.StoreTitleText}
            placeholder="Tap to add store title"
            placeholderTextColor={"black"}
          />
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
          <TextInput
            style={styles.DescriptionText}
            placeholder="Tap to add store description"
            placeholderTextColor={"black"}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  StoreTitleView: {
    backgroundColor: "green",
    height: Dimensions.get("window").height * 0.1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 32,
    marginBottom: 30,
    marginHorizontal: 10,
    fontSize: 50,
  },
  StoreTitleText: {
    fontSize: 35,
    textAlign: "center",
  },
  ImageBg: {
    height: Dimensions.get("window").height * 0.4,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  DefaultImage: {
    height: Dimensions.get("window").height * 0.4,
    width: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  DescriptionView: {
    backgroundColor: "grey",
    height: Dimensions.get("window").height * 0.2,
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  DescriptionText: {
    fontSize: 25,
    color: "yellow",
    textAlign: "center",
  },
  ButtonView : {
    height : Dimensions.get('window') * 0.2,
  },
  DiscardButton: {
    borderWidth : 10,
    borderColor : 'black',
  }
});

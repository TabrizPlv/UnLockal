import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function HomeScreenMarketPlace({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 0 }}>
        <Image
          style={styles.userImage}
          source={require("../assets/OrbitalLogo.jpg")}
        />
        <Text style={styles.message}>
          Coming Soon!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "black",
    fontSize: 20,
  },
  userImage: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.5,
  },
});

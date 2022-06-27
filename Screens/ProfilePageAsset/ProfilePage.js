import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";
import {
  deleteToken,
  getUserEmail,
} from "../../src/User-Info-Functions";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export default function ProfilePage({ navigation }) {
  const [haveStore, setHaveStore] = useState(true);
  const navigationn = useNavigation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    //Retrieve User's email
    // in the background
    const helper = async () => {
      await getUserEmail("userToken")
        .then((res) => setUserEmail(res))
        .catch((error) => console.log("error getting id"));
    };
    helper();
  }, []);

  const handleSignOut = async () => {
    await deleteToken("userToken")
      .then((response) => {
        navigationn.replace("Login");
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error signing out!");
      });
  };

  const OnPressViewStore = () => {
    // return haveStore
    //   ? navigationn.navigate("UpdatedStorePage")
    //   : navigationn.navigate("EmptyStorePage");
    navigationn.navigate("FilledStorePage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profilePic}>
          <Icon name="account" size={200}></Icon>
        </View>

        <View style={styles.usernameView}>
          <Text style={styles.usernameText}>Signed In With: {userEmail}</Text>
        </View>
        {/*Edit Profile*/}
        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.buttonStyle}
            name="account-edit"
            backgroundColor="teal"
            onPress={() => navigation.navigate("EditProfilePage")}
            size={30}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Icon.Button>
        </View>

        {/*View Store Button*/}
        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.buttonStyle}
            name="store-search"
            backgroundColor="teal"
            onPress={OnPressViewStore}
            size={30}
          >
            <Text style={styles.buttonText}>View Store</Text>
          </Icon.Button>
        </View>

        {/*Edit Store Button*/}
        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.buttonStyle}
            name="store-edit"
            backgroundColor="teal"
            onPress={() => navigationn.navigate("EmptyStoreTemplate")}
            size={30}
          >
            <Text style={styles.buttonText}>Edit Store</Text>
          </Icon.Button>
        </View>

        {/*Add Listing Button*/}
        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.buttonStyle}
            name="package-variant-closed"
            backgroundColor="teal"
            onPress={() => navigationn.navigate("ListProductsPage")}
            size={30}
          >
            <Text style={styles.buttonText}>Add Listing to Store</Text>
          </Icon.Button>
        </View>

        {/*Sign Out Button*/}
        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.buttonStyle}
            name="logout"
            backgroundColor="teal"
            onPress={handleSignOut}
            size={30}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </Icon.Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  userImage: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.8,
    flex: 1,
    resizeMode: "contain",
  },
  usernameView: {
    height: screenHeight * 0.08,
    width: screenWidth * 0.9,
  },
  usernameText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
  },
  buttonView: {
    height: screenHeight * 0.07,
    width: screenWidth * 0.9,
    marginBottom: 20,
  },
  buttonStyle: {
    height: "100%",
    width: "100%",
  },
  buttonText: {
    color: "black",
    fontFamily: "GillSans-SemiBold",
    fontSize: 20,
  },
});

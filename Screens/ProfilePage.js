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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
export default function ProfilePage({ navigation }) {
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
        <Image
          style={styles.userImage}
          source={require("../assets/OrbitalLogo.jpg")}
        />
        <View style={styles.usernameView}>
          <Text style={styles.usernameText}>Username Here</Text>
        </View>
        {/*Edit Profile*/}
        <View style={styles.buttonView}>
          <Icon.Button
          style={styles.buttonStyle}
          name="account-edit"
          backgroundColor="#de5147"
          onPress={() =>{alert('Directed to edit profile page')}}
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
          backgroundColor="#de5147"
          onPress={() =>{alert('Directed to edit profile page')}}
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
          backgroundColor="#de5147"
          onPress={() =>{alert('Directed to edit profile page')}}
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
          backgroundColor="#de5147"
          onPress={() =>{alert('Directed to edit profile page')}}
          size={30}
        >
          <Text style={styles.buttonText}>Add Listing to Store</Text>
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
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    resizeMode: "contain",
  },
  usernameView: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.8,
  },
  usernameText: {
    borderWidth: 1,
    marginTop: 20,
    textAlign: "center",
    fontSize : 30,
  },
  buttonView : {
    height: screenHeight * 0.1,
    width: screenWidth * 0.9,
    marginBottom : 10,
  },
  buttonStyle: {
    height : '100%',
    width : '100%',
    borderColor : 'black',
    borderWidth : 2
  },
  buttonText: {
    color: "black",
    fontFamily : "GillSans-SemiBold",
    fontSize : 30,
  },
});

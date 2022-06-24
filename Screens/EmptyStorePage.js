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

import { useNavigation } from "@react-navigation/core";

export default function EmptyStorePage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style = {styles.overallContainer}>
       
      <StatusBar barStyle="dark-content" />

      <View style={styles.StoreTitleView}>
        <Text style={styles.StoreTitleText}>No store name yet</Text>
      </View>

      <Image
          style={styles.DefaultImage}
          source={require('../assets/icon.png')}
      />

      <View style = {styles.aboutBusinessView}>
        <Text style = {styles.aboutBusinessText}>About the business</Text>
      </View>

      <View style={styles.DescriptionView}>
        <Text style={styles.DescriptionText}>
          No description yet
        </Text>
      </View>

      <View style={styles.ButtonView}>
        <View style={styles.CancelButton}>
          <Pressable onPress={() => navigation.navigate("MainContainer")}>
            <Text style={styles.ButtonText}>Back to home</Text>
          </Pressable>
        </View>

        <View style={styles.SubmitButton}>
          <Pressable onPress={() => navigation.navigate("EmptyStoreTemplate")}>
            <Text style={styles.ButtonText}>Edit Store</Text>
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  StoreTitleView: {
    marginTop: 20,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  StoreTitleText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontFamily: 'Papyrus'
  },

  DefaultImage: {
    height: '50%',
    width: '90%',
    alignSelf: "center",
  },

  aboutBusinessView: {
    marginLeft: 40,
    marginTop: 20
  },

  aboutBusinessText: {
    fontSize: 20,
    fontFamily: 'Papyrus'
  },

  DescriptionView: {
    marginLeft: 40,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop:30
  },

  DescriptionText: {
    fontSize: 20,
    color: "black",
  },
  
  ButtonView: {
    height: Dimensions.get("window").height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 130
    
  },
  CancelButton: {
    height: "50%",
    width: "35%",
    margin: 35,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  SubmitButton: {
    height: "50%",
    width: "35%",
    margin: 35,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  ButtonText: {
    fontSize: 20,
    color: 'white'
  },
});

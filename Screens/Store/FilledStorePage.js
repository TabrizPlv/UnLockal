import React, {useEffect, useState} from "react";
import { handleGetUserDetails } from "../../src/ClientRequests/User/getUserDetails";

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
  ActivityIndicator
} from "react-native";

import { useNavigation } from "@react-navigation/core";

export default function FilledStorePage() {
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  useEffect(() => {
      const helper = async () => {
          setIsUploading(true);
          const data1 = await handleGetUserDetails();
          setData(data1);
          setIsUploading(false);
      };
      helper();
    }
  , []);
  const [isUploading, setIsUploading] = useState(false);

  let storeTitle = "loading"
  let storeDescription = "loading"
  let storeURI = 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'
  if (data) {
    storeTitle = data.business.store.storeTitle
    storeDescription = data.business.store.storeDescription;
    storeURI = data.business.store.storeImageURL;
  }


  return (
    <SafeAreaView style = {styles.overallContainer}>
       
      <StatusBar barStyle="dark-content" />
      {isUploading && (
          <ActivityIndicator size="large" style={styles.LoadingIndicator} />
        )}

      <View style={styles.StoreTitleView}>
        <Text style={styles.StoreTitleText}>{storeTitle}</Text>
      </View>
      <View style = {{height:300, width: 500, backgroundColor:'white'}}>
      <Image
          style={styles.DefaultImage}
          source={{uri: storeURI}}
      />
      </View>


      <View style = {styles.aboutBusinessView}>
        <Text style = {styles.aboutBusinessText}>About the business</Text>
      </View>

      <View style={styles.DescriptionView}>
        <Text style={styles.DescriptionText}>
          {storeDescription}
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
  LoadingIndicator: {
    zIndex: 5,
    width: "100%",
    height: "100%",
  },
  StoreTitleText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontFamily: 'Papyrus'
  },

  DefaultImage: {
    height: '100%',
    width: '100%',
    alignSelf: "center",
    resizeMode:'cover'
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
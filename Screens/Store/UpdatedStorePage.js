import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const auth = getAuth();

let currentUserUid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    currentUserUid = uid;
  }
});
export default function UpdatedStorePage() {
  const [StoreTitle, setStoreTitle] = useState("");
  const [StoreDescription, setStoreDescription] = useState("");
  const [StoreImage, setStoreImage] = useState("");

  const retrieveData = async () => {
    const docRef = doc(db, 'users', currentUserUid);
    const docSnap = await getDoc(docRef);
    const allData = docSnap.data();
    setStoreTitle(allData.StorePageDetails.StoreTitle);
    setStoreDescription(allData.StorePageDetails.StoreDescription);
    setStoreImage(allData.StorePageDetails.StoreImageURL);
  }
  useEffect(()=> {retrieveData()}, []);
  return (
    <SafeAreaView
      style={{ backgroundColor: "pink", height: "100%", width: "100%" }}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.StoreTitleView}>
        <Text style={styles.StoreTitleText}>{StoreTitle}</Text>
      </View>
        <Image
          style={styles.DefaultImage}
          source={{url : StoreImage}}
        />
      <View style={styles.DescriptionView}>
        <Text style={styles.DescriptionText}>{StoreDescription}</Text>
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
    marginTop : 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  DescriptionText: {
    fontSize: 35,
    color: "yellow",
    margin: 20,
  },
});

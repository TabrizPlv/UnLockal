import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Pressable,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { handleEditStore } from '../src/ClientRequests/editStore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function EmptyStorePage() {
  const [StoreTitle, setStoreTitle] = useState(null);
  const [StoreImage, setStoreImage] = useState(null);
  const [StoreImageURL, setStoreImageURL] = useState(null);
  const [ImageSelected, setImageSelected] = useState(false);
  const [StoreDescription, setStoreDescription] = useState(null);
  const [GalleryPermission, setGalleryPermission] = useState(null);
  const navigation = useNavigation();


  let Submit = async () => {
    handleEditStore({StoreTitle, StoreDescription, StoreImageURL});
    alert('submitted!')
  };

  //Only works if user does not decline the first time
  const pickImage = async () => {
    const GalleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    //set GalleryPermission to true or false
    setGalleryPermission(GalleryStatus.status === "granted");

    if (GalleryPermission == true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      //upload image to firebase Storage and
      //upload image URL to fireStore
      if (!result.cancelled) {
        const storage = getStorage();
        const storageRef = ref(storage, "/StoreImages");
        const reference = ref(storageRef/*,'insert file name here'*/);
        const img = await fetch(result.uri);
        const bytes = await img.blob();
        setStoreImage(result.uri);
        setImageSelected(true);
        await uploadBytes(reference, bytes);
        await getDownloadURL(reference).then(url => {setStoreImageURL(url)});
      }
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.StoreTitleView}>
          <TextInput
            style={styles.StoreTitleText}
            placeholder="Tap to add store title"
            placeholderTextColor={"black"}
            onChangeText={setStoreTitle}
          />
        </View>
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
          <ImageBackground
            style={styles.ImageBg}
            source={require("../assets/icon.png")}
          >
            <View style={{ height: "75%", width: "75%" }}>
              <Pressable style={styles.AddImageButton} onPress={pickImage}>
                {ImageSelected ? (
                  <Image
                    source={{ uri: StoreImage }}
                    style={{ height: "100%", width: "100%", flex: 1 }}
                  />
                ) : (
                  <Text style={styles.AddImageText}>Tap to add image</Text>
                )}
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.DescriptionView}>
          <TextInput
            style={styles.DescriptionText}
            placeholder="Tap to add store description"
            placeholderTextColor={"black"}
            onChangeText={setStoreDescription}
          />
        </View>
        <View style={styles.ButtonView}>
          <View style={styles.CancelButton}>
            <Pressable onPress={() => navigation.navigate("MainContainer")}>
              <Text style={styles.ButtonText}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.SubmitButton}>
            <Pressable onPress={Submit}>
              <Text style={styles.ButtonText}>Submit</Text>
            </Pressable>
          </View>
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
    flex: 1,
  },
  StoreTitleText: {
    fontSize: 35,
    textAlign: "center",
  },
  ImageBg: {
    height: Dimensions.get("window").height * 0.4,
    marginHorizontal: 10,
    marginBottom: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  DefaultImage: {
    height: Dimensions.get("window").height * 0.4,
    width: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  AddImageButton: {
    backgroundColor: "grey",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  AddImageText: {
    fontSize: 20,
    color: "blue",
  },
  DescriptionView: {
    backgroundColor: "grey",
    height: Dimensions.get("window").height * 0.2,
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  DescriptionText: {
    fontSize: 25,
    color: "yellow",
    textAlign: "center",
  },
  ButtonView: {
    height: Dimensions.get("window").height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
  },
  CancelButton: {
    borderWidth: 1,
    borderColor: "black",
    height: "50%",
    width: "35%",
    margin: 35,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  SubmitButton: {
    borderWidth: 1,
    borderColor: "black",
    height: "50%",
    width: "35%",
    margin: 35,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    fontSize: 25,
  },
});

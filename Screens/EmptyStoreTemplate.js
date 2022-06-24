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
  ActivityIndicator,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
import { handleEditStore } from "../src/ClientRequests/editStore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function EmptyStoreTemplate() {
  const [storeTitle, setStoreTitle] = useState("");
  const [storeImage, setStoreImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [storeDescription, setStoreDescription] = useState("");
  const [storeImageUrl, setStoreImageUrl] = useState("");
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [imagePicked, setimagePicked] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigation = useNavigation();

  let Submit = async () => {
    await uploadImage(imagePicked);
    await handleEditStore({ storeTitle, storeDescription, storeImageUrl });
    alert("submitted!");
  };
  //Only works if user does not decline the first time
  const pickImage = async () => {
    const GalleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    //set GalleryPermission to true or false
    setGalleryPermission(GalleryStatus.status === "granted");
    if (galleryPermission === true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
        .then((resultObject) => {
          setimagePicked(resultObject);
          setStoreImage(resultObject.uri);
          setIsImageSelected(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //upload image to firebase Storage and
  //upload image URL to fireStore
  const uploadImage = async (result) => {
    if (!result.cancelled) {
      setIsUploading(true);
      const storage = getStorage();
      const storageRef = ref(storage, "/StoreImages");
      const reference = ref(storageRef /*,'insert file name here'*/);
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(reference, bytes)
        .then(() => {
          console.log("uploaded to firebase Storage!");
        })
        .catch((error) => {
          console.log(error);
        });

      await getDownloadURL(reference)
        .then((url) => {
          setStoreImageUrl(url);
          setIsUploading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsUploading(false);
        });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "pink", flex: 1 }}>
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />
        {isUploading && (
          <ActivityIndicator size="large" style={styles.LoadingIndicator} />
        )}
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
                {isImageSelected ? (
                  <Image
                    source={{ uri: storeImage }}
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
  LoadingIndicator: {
    zIndex: 5,
    width: "100%",
    height: "100%",
  },
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

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
    <SafeAreaView style= {styles.overallContainer}>
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


        <View style = {styles.addImageView}>
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
        
        <View style = {styles.aboutBusinessView}>
          <Text style = {styles.aboutBusinessText}> About The Business </Text>
        </View>

        <View style={styles.DescriptionView}>
          <TextInput
            style={styles.DescriptionText}
            placeholder="Tap to add store description"
            placeholderTextColor={"black"}
            onChangeText={setStoreDescription}
            multiline
            numberOfLines={4}
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
              <Text style={styles.ButtonText}>Finish</Text>
            </Pressable>
          </View>
        </View>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  overallContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  LoadingIndicator: {
    zIndex: 5,
    width: "100%",
    height: "100%",
  },
  StoreTitleView: {
    alignContent: "center",
    justifyContent: 'center',
    fontSize: 50,
    padding: 10
  },
  StoreTitleText: {
    fontSize: 35,
    textAlign: "center",
    fontFamily:'Papyrus',
    flex: 1,
    justifyContent: 'center'
  },
  addImageView: {
    width: '90%',
    height: '50%',
    alignSelf:'center',
    marginTop:20
  },
  AddImageButton: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  AddImageText: {
    fontSize: 20,
    fontFamily: 'Palatino'
  },
  aboutBusinessView: {
    marginLeft: 40
  },
  aboutBusinessText: {
    marginTop: 20, 
    fontSize: 20,
    fontFamily: 'Papyrus'
  },
  DescriptionView: {
    height: Dimensions.get("window").height * 0.2,
    marginHorizontal: 10,
    borderRadius: 30,
    marginLeft: 40,
    flex: 1,
    flexWrap: 'wrap'
  },
  DescriptionText: {
    fontSize: 20,
    color: "black",
    fontFamily: "Palatino",
    flexWrap: 'wrap',
  },
  ButtonView: {
    height: Dimensions.get("window").height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 110
    
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

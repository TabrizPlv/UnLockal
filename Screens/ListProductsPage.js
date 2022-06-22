import React from "react";
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
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { handleAddListing } from "../src/ClientRequests/addListing";
import { useState } from "react";

export default function ListProductsPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrls, setProductImageUrls] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [imageuris, setImageuris] = useState([]);

  //Only works if user does not decline the first time
  const pickImage = async () => {
    const GalleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    //set GalleryPermission to true or false
    setGalleryPermission(GalleryStatus.status === "granted");
    if (galleryPermission == true) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        const img = await fetch(result.uri);
        setImageuris([...imageuris, img]);
        console.log("img pushed!");
      }
    }
  };

  //upload image to firebase Storage and
  //retrieve image URL reference
  const uploadImage = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, "/ListingImages");
    //returns an array of Promise
    const res = imageuris.map(async (image) => {
      console.log("running map");
      const reference = ref(storageRef, Math.random().toString());
      const bytes = await image.blob();
      await uploadBytes(reference, bytes);
      await getDownloadURL(reference).then((url) => {
        image = url;
      });
    });
    return Promise.all(res)
      .then((urls) => {setProductImageUrls(urls); console.log(urls)})
      .catch((error) => console.log(error));
  };

  const Submit = async () => {
    await uploadImage();
    console.log("upload done!");
    handleAddListing({
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productImages: productImageUrls,
    });
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", height: "100%", width: "100%" }}
    >
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />

        <View style={styles.addProductHeaderView}>
          <Text style={styles.addProductHeaderText}> Add your product!</Text>
        </View>

        <View style={styles.ProductNameContainer}>
          <Text>Product Name</Text>
          <View style={styles.ProductNameView}>
            <TextInput
              style={styles.ProductNameText}
              placeholder="Name of your product"
              placeholderTextColor={"grey"}
              onChangeText={setProductName}
            />
          </View>
        </View>

        <View style={styles.ProductDescriptionContainer}>
          <Text>Product Description</Text>
          <View style={styles.ProductDescriptionView}>
            <TextInput
              style={styles.ProductDescriptionText}
              placeholder="Describe your product"
              placeholderTextColor={"grey"}
              onChangeText={setProductDescription}
            />
          </View>
        </View>

        <View style={styles.ProductPriceContainer}>
          <Text>Product Price</Text>
          <View style={styles.ProductPriceView}>
            <Text>SGD </Text>
            <TextInput
              style={styles.ProductPriceText}
              placeholder="Enter price"
              keyboardType="numeric"
              onChangeText={setProductPrice}
            />
          </View>
        </View>

        <Text style = {{marginTop:10, marginLeft:13, marginBottom: 20}}>Add Images of your products</Text>
        
        <View style = {styles.addImageContainer}>
            <TouchableOpacity style = {styles.addProductTouchableOpacity}>
              <Text style = {styles.addProductText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.addProductTouchableOpacity}>
              <Text style = {styles.addProductText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.addProductTouchableOpacity}>
              <Text style = {styles.addProductText}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.addProductTouchableOpacity}>
              <Text style = {styles.addProductText}>+</Text>
            </TouchableOpacity>
        </View>
        


        <View style={styles.SubmitButtonView}>
          <Pressable onPress={Submit}>
            <Text style={styles.ButtonText}>List it!</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addProductHeaderView: {
    alignItems: "center",
  },

  addProductHeaderText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  ProductNameContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  ProductNameView: {
    marginTop: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    padding: 10,
    marginEnd: 10,
  },

  ProductNameText: {
    color: "black",
  },

  ProductDescriptionContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  ProductDescriptionView: {
    marginTop: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    padding: 30,
    marginEnd: 10,
  },

  ProductDescriptionText: {
    color: "black",
  },

  ProductPriceContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  ProductPriceView: {
    marginTop: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    padding: 10,
    marginEnd: 10,
    flexDirection: "row",
  },

  ProductPriceText: {
    color: "black",
  },

  UploadImageContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  UploadImageView: {
    marginTop: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 5,
    padding: 10,
    marginEnd: 10,
    flexDirection: "row",
  },

  UploadImageText: {
    color: "black",
  },

  SubmitButtonView: {
    height: "7%",

    marginTop: 200,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  ButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  AddProductButtonContainer : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  AddProductButton: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  addImageContainer: {
    justifyContent: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,

  },

  addProductText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },

  addProductTouchableOpacity: {
    width: 80,
    
  }
});

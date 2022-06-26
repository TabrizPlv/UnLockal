import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { handleAddListing } from "../src/ClientRequests/addListing";
import { useState, useEffect } from "react";
import { getUserId } from "../src/User-Info-Functions";

export default function ListProductsPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [galleryPermission, setGalleryPermission] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [imageuris, setImageuris] = useState([]);
  const [imageObjects, setImageObjects] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    //Retrieve UserId
    // in the background
    const helper = async () => {
      await getUserId("userToken")
        .then((res) => setUserId(res))
        .catch((error) => console.log("error getting id"));
    };
    helper();
  }, []);

  //Only works if user does not decline the first time
  async function pickImage() {
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
      })
        .then((response) => {
          if (!response.cancelled) {
            setImageObjects([...imageObjects, response]);
            setImageuris([...imageuris, response.uri]);
            console.log("image uri added to array!");
          }
        })
        .catch((error) => console.log(error));
    }
    // if (!result.cancelled) {
    //   const img = await fetch(result.uri);
    //   setImageuris([...imageuris, img]);
    //   console.log("img pushed!");
    // }
  }

  //upload image to firebase Storage and
  //retrieve image URL reference
  const uploadImage = async () => {
    setIsUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, "/ListingImages");
    //returns an array of Promise
    const res = await Promise.all(
      imageObjects.map(async function (imageObject) {
        console.log("running map");
        let helper;
        const refer = ref(storageRef, userId);
        const reference = ref(refer, Math.random());
        const img = await fetch(imageObject.uri);
        const bytes = await img.blob();
        await uploadBytes(reference, bytes)
          .then((response) => console.log("Uploaded to firebase"))
          .catch((error) => {
            console.log(error);
          });
        await getDownloadURL(reference)
          .then((url) => {
            helper = url;
          })
          .catch((error) => console.log(error));
        return helper;
      })
    );
    setIsUploading(false);
    return res;
  };

  const Submit = async () => {
    const imageurls = await uploadImage();
    console.log("upload done!");
    await handleAddListing({
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productImages: imageurls,
    })
      .then(() => console.log("Listing added!"))
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", height: "100%", width: "100%" }}
    >
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />
        {isUploading && (
          <ActivityIndicator size="large" style={styles.LoadingIndicator} />
        )}
        <View style={styles.addProductHeaderView}>
          <Text style={styles.addProductHeaderText}> Add your product!</Text>
        </View>

        <View style={styles.ProductNameContainer}>
          <Text>Product Name</Text>
          <View style={styles.ProductNameView}>
            <TextInput
              testID="productName"
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
              testID="productDesc"
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
              testID="productPrice"
              style={styles.ProductPriceText}
              placeholder="Enter price"
              keyboardType="numeric"
              onChangeText={setProductPrice}
            />
          </View>
        </View>

        <Text style={{ marginTop: 10, marginLeft: 13, marginBottom: 20 }}>
          Add Images of your product
        </Text>

        <View style={styles.addImageContainer}>
          <TouchableOpacity
            style={styles.addProductTouchableOpacity}
            onPress={pickImage}
          >
            {imageuris.length >= 1 ? (
              <Image
                source={{ uri: imageuris[0] }}
                style={styles.uploadedImage}
              />
            ) : (
              <Text style={styles.addProductText}>+</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addProductTouchableOpacity}
            onPress={pickImage}
          >
            {imageuris.length >= 2 ? (
              <Image
                source={{ uri: imageuris[1] }}
                style={styles.uploadedImage}
              />
            ) : (
              <Text style={styles.addProductText}>+</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addProductTouchableOpacity}
            onPress={pickImage}
          >
            {imageuris.length >= 3 ? (
              <Image
                source={{ uri: imageuris[2] }}
                style={styles.uploadedImage}
              />
            ) : (
              <Text style={styles.addProductText}>+</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addProductTouchableOpacity}
            onPress={pickImage}
          >
            {imageuris.length >= 4 ? (
              <Image
                source={{ uri: imageuris[3] }}
                style={styles.uploadedImage}
              />
            ) : (
              <Text style={styles.addProductText}>+</Text>
            )}
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
  LoadingIndicator: {
    zIndex: 5,
    width: "100%",
    height: "100%",
  },

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

  AddProductButtonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  AddProductButton: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  addImageContainer: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },

  addProductText: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  addProductTouchableOpacity: {
    width: 80,
    borderWidth: 2,
    borderColor: "black",
  },
  uploadedImage: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

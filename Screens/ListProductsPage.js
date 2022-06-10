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
  TextInput
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ListProductsPage() {


  return (
    <SafeAreaView
      style={{ backgroundColor: "white", height: "100%", width: "100%" }}
    >
      <KeyboardAwareScrollView>
        <StatusBar barStyle="dark-content" />
          
          <View style = {styles.addProductHeaderView}>
            <Text style = {styles.addProductHeaderText}> Add your product!</Text>
          </View>

          <View style={styles.ProductNameContainer}>
            <Text>Product Name</Text>
            <View style = {styles.ProductNameView}>
            <TextInput
              style={styles.ProductNameText}
              placeholder="Name of your product"
              placeholderTextColor={"grey"}
            />
            </View>
          </View>

          <View style = {styles.ProductDescriptionContainer}>
            <Text>Product Description</Text>
            <View style = {styles.ProductDescriptionView}>
              <TextInput
                style = {styles.ProductDescriptionText}
                placeholder = "Describe your product"
                placeholderTextColor={"grey"}
              />
            </View>
          </View>

          <View style = {styles.ProductPriceContainer}>
            <Text>Product Price</Text>
            <View style = {styles.ProductPriceView}>
            <Text>SGD  </Text>
            <TextInput 
              style={styles.ProductPriceText}
              placeholder = "Enter price"
              keyboardType = 'numeric'
            /> 
            </View>
          </View>

          <View style = {styles.UploadImageContainer}>
            <Text>Product Image</Text>
            <View style = {styles.UploadImageView}>
            <TextInput 
              style={styles.UploadImageText}
              placeholder = "Upload an image of your product!"
            
            /> 
            </View>
          </View>

          <View style = {styles.SubmitButtonView}>
            <Pressable>
              <Text style={styles.ButtonText}>List it!</Text>
            </Pressable>
          </View>
          


      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  addProductHeaderView: {
      alignItems: 'center'
  },

  addProductHeaderText: {
      marginTop:20,
      fontSize: 20,
      fontWeight: "bold"
  },

  ProductNameContainer: {
      marginTop: 20,
      marginLeft: 10,
      padding: 5,
  },

  ProductNameView: {
      marginTop:10,
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 10,
      marginEnd:10
  },

  ProductNameText: {
      color: 'black'
  },

  ProductDescriptionContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  ProductDescriptionView: {
      marginTop:10,
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 30,
      marginEnd:10,
  },

  ProductDescriptionText: {
      color: 'black'
  },

  ProductPriceContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  ProductPriceView: {
      marginTop:10,
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 10,
      marginEnd:10,
      flexDirection:"row"
  },

  ProductPriceText: {
      color: 'black'
  },

  UploadImageContainer: {
    marginTop: 20,
    marginLeft: 10,
    padding: 5,
  },

  UploadImageView: {
      marginTop:10,
      backgroundColor: '#EEEEEE',
      borderRadius: 5,
      padding: 10,
      marginEnd:10,
      flexDirection:"row"
  },

  UploadImageText: {
      color: 'black'
  },

  SubmitButtonView: {
    height: "7%",

    marginTop: 200,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },

  ButtonText: {
    color: "white",
    fontWeight: "bold"
  }

})
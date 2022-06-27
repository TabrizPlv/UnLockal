import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZE, assets} from '../../assets/constants'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { deleteToken, getUserEmail } from '../../src/User-Info-Functions';


const NewProfilePage = () => {
  const [haveStore, setHaveStore] = useState(true);
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    //Retrieve User's email
    // in the background
    const helper = async () => {
      await getUserEmail("userToken")
        .then((res) => setUserEmail(res))
        .catch((error) => console.log("error getting id"));
    };
    helper();
  }, []);

  const handleSignOut = async () => {
    await deleteToken("userToken")
      .then((response) => {
        navigation.replace("Login");
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error signing out!");
      });
  };

  const OnPressViewStore = () => {
    // return haveStore
    //   ? navigation.navigate("UpdatedStorePage")
    //   : navigation.navigate("EmptyStorePage");
    navigation.navigate("FilledStorePage");
  };

  return (
    <SafeAreaView style = {{flex: 1}}>

      <View style = {{height:250, backgroundColor: COLORS.secondary, justifyContent:'center', alignItems: 'center'}}>
        <Icon name = "account-tie" size = {200}></Icon>
        <Text style = {{fontFamily : 'Rockwell'}}>Signed in with: {userEmail}</Text>
      </View>

      <View style = {{marginTop: 20}}>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("EditProfilePage")}>
          <Icon name = "account-edit" color = "#FF9AA2" size = {30} style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Edit Profile</Text>
          <Icon name = "chevron-right" color = "grey" size = {30} style = {{marginLeft: 182}}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={OnPressViewStore}>
          <Icon name = "storefront" color = "#FFB7B2" size = {30} style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>View Store</Text>
          <Icon name = "chevron-right" color = "grey" size = {30} style = {{marginLeft: 182}}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("EmptyStoreTemplate")}>
          <Icon name = "store-edit" color = "#FFDAC1" size = {30} style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Edit Store</Text>
          <Icon name = "chevron-right" color = "grey" size = {30} style = {{marginLeft: 190}}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("ListProductsPage")}>
          <Icon name = "package-variant-closed" color = "#E2F0CB" size = {30} style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Add Products</Text>
          <Icon name = "chevron-right" color = "grey" size = {30} style = {{marginLeft: 157}}/>
 
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={handleSignOut}>
          <Icon name = "logout" color = "#B5EAD7" size = {30} style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Sign Out</Text>
          <Icon name = "chevron-right" color = "grey" size = {30} style = {{marginLeft: 201}}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white',
      borderBottomColor: '#edeff2',
      borderBottomWidth: 2,
      height: 80,
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',

    },
    buttonText: {
      fontFamily: 'Verdana',
      fontSize: 20,
      marginLeft: 10,
    },
    buttonIcon: {
      marginLeft: 10,
    },

})

export default NewProfilePage

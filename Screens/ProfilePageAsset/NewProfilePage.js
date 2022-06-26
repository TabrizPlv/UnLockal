import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZE, } from '../../assets/constants'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const NewProfilePage = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>

      <View style = {{height:250, backgroundColor: COLORS.secondary}}/>

      <View style = {{marginTop: 20}}>
        <TouchableOpacity style = {styles.button}>
          <Icon name = "account-edit" color = "#FF9AA2" size = '30' style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Edit Profile</Text>
          <Icon name = "chevron-right" color = "grey" size = '30'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "storefront" color = "#FFB7B2" size = '30' style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>View Store</Text>
          <Icon name = "chevron-right" color = "grey" size = '30'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "store-edit" color = "#FFDAC1" size = '30' style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Edit Store</Text>
          <Icon name = "chevron-right" color = "grey" size = '30'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "package-variant-closed" color = "#E2F0CB" size = '30' style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Add Products</Text>
          <Icon name = "chevron-right" color = "grey" size = '30'/>
 
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Icon name = "logout" color = "#B5EAD7" size = '30' style = {styles.buttonIcon}/>
          <Text style = {styles.buttonText}>Sign Out</Text>
          <Icon name = "chevron-right" color = "grey" size = '30'/>
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
      marginRight: 200
    },
    buttonIcon: {
      marginLeft: 10,
    },
})

export default NewProfilePage

import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/core";

export default function EditProfilePage() {
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Edit Profile coming soon</Text>
      <View style = {styles.buttonView}>
        <Pressable onPress={() => navigation.navigate("MainContainer")}>
          <Text style={styles.ButtonText}>Back to home</Text>
        </Pressable>
      </View>
    </View>




    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom:30
  },
  buttonView: {
    backgroundColor: 'teal',
    borderRadius: 10,
    padding: 15
  },
  Buttontext: {
    color: 'white'
  }
})
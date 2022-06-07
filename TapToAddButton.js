import React from 'react'
import {
    Text,
    Pressable,
    StyleSheet,
    TextInput,
  } from "react-native";

const TapToAddButton = (props) => {
    return (
        <TextInput style={props.style} placeholder={props.placeholder}>
        </TextInput>
    );
}

const styles = StyleSheet.create({
    DefaultText : {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },})

  export default TapToAddButton;
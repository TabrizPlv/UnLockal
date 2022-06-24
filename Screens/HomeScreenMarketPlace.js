import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function HomeScreenMarketPlace({ navigation }) {
  const navigationn = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.message}>
          Marketplace coming soon!
        </Text>
        <TouchableOpacity style = {styles.button} onPress = {() => navigationn.navigate("EmptyStoreTemplate")}>
          <Text>Edit your store instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  message: {
    color: "black",
    padding: 20,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'teal',
    borderRadius: 10
  }
});

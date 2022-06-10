import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreenMarketPlace({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.message}>
          Marketplace coming soon!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "black",
  },
});

import {
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { handleCreateOrder } from "../../src/ClientRequests/Order/addOrder";
import { getUserEmail } from "../../src/User-Info-Functions";

const ProductOrderPage = ({ route, navigation }) => {
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

  const { listing, seller } = route.params;
  const [qty, setQty] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 30, padding: 20 }}>{listing.productName}</Text>
      <Text style={{ fontSize: 20, marginTop: 100 }}>
        Place your order below!
      </Text>
      <Text style={{ fontSize: 25, marginTop: 100 }}>Enter quantity: </Text>
      <TextInput
        onChangeText={setQty}
        style={styles.qtyInput}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        onPress={() =>
          handleCreateOrder({
            product: listing,
            quantity: qty,
            buyer: userEmail,
            seller: seller,
            status: "received",
          })
            .then((response) => alert("Order received!"))
            .catch((error) => alert("Error submitting your order. Try again!"))
        }
        style={styles.placeOrder}
      >
        <Text style={{ fontSize: 20 }}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  qtyInput: {
    backgroundColor: "#e8e8e3",
    width: 100,
    height: 50,
    textAlign: "center",
  },
  placeOrder: {
    justifyContent: "center",
    backgroundColor: "teal",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
});
export default ProductOrderPage;

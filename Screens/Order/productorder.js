import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from "react";
import { handleCreateOrder } from '../../src/ClientRequests/Order/addOrder';
import { getUserEmail } from '../../src/User-Info-Functions';


const ProductOrderPage = ({route, navigation}) => {

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

  // product = use listing
  // seller = use seller
  // buyer = need to retrieve
  // qty = use qty
  // status = idk
  
  return (
    <SafeAreaView style = {{flex: 1, alignItems: 'center'}}>
        <Text style = {{fontSize: 30, padding: 20}}>{listing.productName}</Text>
        <Text style = {{fontSize: 20, marginTop: 100}}>Place your order below!</Text>
        <Text style = {{fontSize: 25, marginTop: 100}}>Enter qty: </Text>
        <TextInput
          onChangeText={setQty}
          style = {{backgroundColor: '#e8e8e3', width: 100, height: 50, alignItems: 'center'}}/>
        <TouchableOpacity 
          onPress = {() => handleCreateOrder({product: listing, quantity: qty, buyer: userEmail, seller: seller, status: "received"})}
          style = {{justifyContent: 'center', backgroundColor: 'teal',  marginTop: 20, padding: 10, borderRadius: 10}}
        >
          <Text style = {{fontSize: 20}}>Place Order</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProductOrderPage
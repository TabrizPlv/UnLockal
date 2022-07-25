import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useEffect, useState} from "react";
import { handleCreateOrder } from '../src/ClientRequests/addOrder';
import { getUserEmail } from '../src/User-Info-Functions';


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
    <View style = {{flex: 1, justifyContent:'center'}}>
      <Text>qty: </Text>
      <TextInput
        onChangeText={setQty}/>
      <TouchableOpacity>
        <Text onPress = {() => handleCreateOrder({product: listing, quantity: qty, buyer: userEmail, seller: seller, status: "received"})}>Place Order</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductOrderPage
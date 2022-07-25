import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { handleGetPendingOrders } from '../src/ClientRequests/getPendingOrders';

  const Item = ({ product, productqty, seller, status }) => (
    <View style={styles.item}>
      <Text>Product: {product}</Text>
      <Text>Qty: {productqty}</Text>
      <Text>Seller: {seller}</Text>
      <Text>Status: {status}</Text>
    </View>
  );

const OrdersPage = () => {

  const renderItem = ({ item }) => (
    <Item product = {item.product.productName} productqty = {item.quantity} seller = {item.seller} status = {item.status}/>
  );

  const [data, setData] = useState(null);

  useEffect(() => {
    const helper = async () => {
        const data1 = await handleGetPendingOrders();
        setData(data1);
    };
    helper();
    }
  , []);


  return (

      <SafeAreaView style = {styles.container}>

        {/*header*/}
        <View style = {styles.headerView}>
          <Text>My Orders</Text>
        </View>

        {/*orders*/}
        <FlatList
          data ={data}
          renderItem={renderItem}
        />
      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerView: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'teal',
    paddingVertical: 10
  },

  ordersView: {
    paddingLeft: 50,
    marginTop: 40
  },

  item: {
    backgroundColor: '#f5f0c6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
})

export default OrdersPage;
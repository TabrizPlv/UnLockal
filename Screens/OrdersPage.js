import { tokTypes } from '@babel/parser';
import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      product: 'watch',
      productqty: '1',
      seller: 'bob',
      status : 'shipped'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      product: 'headband',
      productqty: '2',
      seller: 'jack',
      status : 'seller accepted'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      product: 'chair',
      productqty: '3',
      seller: 'benji',
      status : 'delivered'
    },
  ];

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
    <Item product = {item.product} productqty = {item.productqty} seller = {item.seller} status = {item.status}/>
);

  return (

      <SafeAreaView style = {styles.container}>

        {/*header*/}
        <View style = {styles.headerView}>
          <Text>My Orders</Text>
        </View>

        {/*orders*/}
        <FlatList
          data ={DATA}
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
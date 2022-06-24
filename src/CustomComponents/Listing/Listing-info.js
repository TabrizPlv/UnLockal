import React from 'react'
import { Text, View } from 'react-native';

export default function ListingInfo({listingProp}) {
  return (
    <View>
        <Text>Product Name: {listingProp.productName}</Text>
        <Text>Product Description: {listingProp.productDescription}</Text>
        <Text>Product Price: {listingProp.productPrice}</Text>
    </View>
  )
}

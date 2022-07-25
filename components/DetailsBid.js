import { View, Text, Image, TouchableOpacity } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../assets/constants'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { handleLogin } from '../src/ClientRequests/login'

const DetailsBid = ({listing, seller}) => {
  const navigation = useNavigation();
  return (
    <View style = {{marginLeft: 14}}>
      <Text style = {{fontSize: SIZES.small, marginTop: 20, marginBottom: 5, color: COLORS.primary}}>{listing.productName}</Text>
      <Text onPress = {() => navigation.navigate("ProductOrdersPage", {listing: {listing}.listing, seller: seller})}>Click to Order</Text>
      <View style = {{flexDirection:'row', justifyContent: 'space-between'}}>
        <Image
          source = {{uri: listing.productImages[0]}}
          resizeMode = "contain"
          style = {{width:90, height:90, flex: 1}}
        />
        <Image
          source = {{uri: listing.productImages[0]}}
          resizeMode = "contain"
          style = {{width:90, height:90, flex: 1}}
        />
        <Image
          source = {{uri: listing.productImages[2]}}
          resizeMode = "contain"
          style = {{width:90, height:90, flex: 1}}
        />
        <Image
          source = {{uri: listing.productImages[2]}}
          resizeMode = "contain"
          style = {{width:90, height:90, flex: 1}}
        />
      </View>
    </View>
  )
}

export default DetailsBid
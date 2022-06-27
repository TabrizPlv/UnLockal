import { View, Text, Image } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../assets/constants'
import React from 'react'

const DetailsBid = ({listing}) => {
  return (
    <View>
      <Image
        source = {{uri: listing[1]}}
        resizeMode = "contain"
        style = {{width:48, height:48}}
      />
    </View>
  )
}

export default DetailsBid
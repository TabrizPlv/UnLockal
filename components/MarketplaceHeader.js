import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../assets/constants'

const MarketplaceHeader = ({onSearch}) => {
  return (
    <View style = {{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style = {{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View>
          <Text style = {{fontFamily: 'Rockwell', color: '#ffbb00', fontSize: 20}}>Unlockal</Text>
          <Text style = {{fontFamily: 'Rockwell', color: COLORS.white, fontSize: 10}}>a platform for local businesses</Text>
        </View>
        <View style = {{width: 45, height:45}}>
          <Image
            source = {assets.person01}
            resizeMode = "contain"
            style = {{ width: '100%', height: '100%' }}
          />
          <Image
            source = {assets.badge}
            resizeMode = "contain"
            style = {{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0}}
          />
        </View>
      </View>

      <View style = {{marginVertical: SIZES.font}}>
        <Text style = {{fontSize:SIZES.small, color: COLORS.white}}> 
            Hello, Bryan 👋 
        </Text>
        <Text style = {{fontSize:SIZES.large, color: COLORS.white, fontWeight: 'bold',marginTop: SIZES.base / 2}}> 
            Support your local businesses
        </Text>
      </View>

      <View style = {{marginTop: SIZES.font}}>
        <View style = {{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image
            source = {assets.search}
            resizeMode= "contain"
            style = {{ width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
            placeholder='Search Local Business'
            style = {{flex: 1}}
            onChangeText= {onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default MarketplaceHeader




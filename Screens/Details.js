import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../assets/constants'
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid } from '../components'

const DetailsHeader = ({data, navigation}) => (
  <View style = {{ width: '100%', height: 373}}>
    <Image 
      source = {{uri: data.business.store.storeImageURL}}
      resizeMode = "cover"
      style = {{width : '100%', height: '100%'}}
    />
    
    <CircleButton
      imgUrl={assets.left}
      handlePress = {() => navigation.goBack()}
      left = {15}
      top = {10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right = {15}
      top = {10}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params;



  return (
    <SafeAreaView style = {{flex: 1}}>
      <FlatList
        data = {data.business.listings}
        renderItem = {({item}) => <DetailsBid listing = {item}
        keyExtractor = {(item) => item.id}/>}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle = {{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent= {() => (
          <React.Fragment>
            <DetailsHeader data = {data} navigation = {navigation}/>
            <SubInfo/>
            <View style = {{paddingHorizontal: SIZES.font, paddingTop: SIZES.font}}>
              <DetailsDesc data = {data} />
              <Text style = {{fontSize:SIZES.font, color:COLORS.primary, marginTop: 20, marginBottom: -25}}>Products</Text>
              {data.business.listings.length > 0 && (
                <Text style = {{
                  fontSize: SIZES.font,
                  color: COLORS.primary
                }}></Text>
              )}
            </View>
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  )
}

export default Details
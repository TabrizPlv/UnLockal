import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../assets/constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.business.store.storeDescription.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style = {{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title = {data.business.store.storeTitle}
          subTitle = {data.email}
          titleSize = {SIZES.extraLarge}
          subTitleSize = {SIZES.font}
        />

        <EthPrice price = {data.business.store.storeTitle} />
      </View>

      <View style = {{marginTop: SIZES.extraLarge}}>
        <Text style = {{
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>Description</Text>
        <View style = {{marginTop: SIZES.base}}>
          <Text style = {{
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && '...'}
            <Text 
              style = {{
                fontSize: SIZES.small,
                color: COLORS.primary,    
              }}
              onPress={() => {
                if(!readMore) {
                  setText(data.business.store.storeDescription);
                  setReadMore(true);
                } else {
                  setText(data.business.store.storeDescription.slice(0, 100));
                  setReadMore(false);                    
                }
              }}
            >
              {readMore ? ' Show less': " Show more"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc
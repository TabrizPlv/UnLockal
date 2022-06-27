import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {handleGetUserDetails} from '../../src/ClientRequests/getUserDetails'

export default function Test() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const helper = async () => {
            const data1 = await handleGetUserDetails();
            setData(data1);
        };
        helper();
      }
    , []);

    const uri = data.business.store.storeImageURL

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {console.log('-------------------------------------'); console.log(data.business.store.storeImageURL)}}><Text>test</Text></TouchableOpacity>
            <Image 
              style = {{width:'100%', height:'50%'}}
              source = {{uri: uri}}/>
        </View>
    )
}

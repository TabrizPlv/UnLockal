import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {handleGetUserDetails} from '../../src/ClientRequests/getUserDetails'
import { handleGetAllUsersWithListings } from '../../src/ClientRequests/getAllUserWithListings';

export default function Test() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const helper = async () => {
            const data1 = await handleGetAllUsersWithListings();
            console.log(data1);
            setData(data1);
        };
        helper();
      }
    , []);

  

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {console.log('-------------------------------------'); }}><Text>test</Text></TouchableOpacity>
        </View>
    )
}

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { handleGetUserListing } from '../../src/ClientRequests/getUserDetails'

const Test = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const helper = async () => {
            const data1 = await handleGetUserListing();
            setData(data1);
        };
        helper();
    }
        , []);

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => console.log(data)}><Text>test</Text></TouchableOpacity>
        </View>
    )
}

export default Test
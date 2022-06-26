import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { handleGetUserListing } from '../../src/ClientRequests/getUser'

const test = () => {
    const [data, setData] = useState(null);
    useEffect(async () => {
        const data1 = await handleGetUserListing();
        setData(data1);
    }, []);

    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => console.log(data)}><Text>test</Text></TouchableOpacity>
        </View>
    )
}

export default test
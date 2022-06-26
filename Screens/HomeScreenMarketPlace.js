import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Image, View } from "react-native";
import { COLORS, NFTData } from "../assets/constants";
import { NFTCard, MarketplaceHeader } from "../components";

export default function HomeScreenMarketPlace() {

  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(value.length === 0) setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{flex: 1}}>
        <View style = {{zIndex: 0}}>
          <FlatList
            data = {nftData} // dummy data is drawn from dummy.js under assets > constants
            renderItem = {({item}) => <NFTCard data = {item}/>}
            keyExtractor={(item) => item.id} // states the id is the unique identifier
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<MarketplaceHeader onSearch={handleSearch}/>}
          />
        </View>

        <View style = {{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style ={{ height:300, backgroundColor: COLORS.primary}}/>
          <View style ={{ flex: 1, backgroundColor: COLORS.secondary}}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Image, View } from "react-native";
import { COLORS, NFTData } from "../assets/constants";
import { NFTCard, MarketplaceHeader } from "../components";
import { handleGetAllUsersWithListings } from "../src/ClientRequests/getAllUserWithListings";

export default function HomeScreenMarketPlace() {

  const [data, setData] = useState(null);

  useEffect(() => {
      const helper = async () => {
          const data1 = await handleGetAllUsersWithListings();
          setData(data1);
      };
      helper();
    }
  , []);
  
  const [searchData, setSearchData] = useState(data);

  const handleSearch = (value) => {
    if(value.length === 0) setSearchData(data);

    const filteredData = data.filter((item) =>
      item.email.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setSearchData(filteredData);
    } else {
      setSearchData(data);
    }
  }

  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{flex: 1}}>
        <View style = {{zIndex: 0}}>
          <FlatList
            data = {data} 
            renderItem = {({item}) => <NFTCard data = {item}/>}
            keyExtractor={(item) => item._id} // states the id is the unique identifier
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

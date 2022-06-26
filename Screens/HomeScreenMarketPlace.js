import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Image, View } from "react-native";



const BASE_URI = 'https://source.unsplash.com/random?sig=1';

export default function HomeScreenMarketPlace() {

  const [data, setDate] = useState([]);
  useEffect(() => {
    fetchMore();
  }, []);
  const fetchMore = () => {
    setDate(prevState => [
      ...prevState,
      ...Array.from({length:20}).map((_, i) => i + 1 + prevState.length),
    ]);
  };

  return (
    <SafeAreaView>
      <View style = {styles.unlockalView}>
        <Text style = {styles.unlockalText}>Unlockal</Text>
        <Text style = {styles.unlockalcaptionText}>a platform for local businesses</Text>
      </View>
      <FlatList 
        data = {data}
        onEndReached={fetchMore}
        renderItem = {({item}) => (
          <Image source = {{uri: BASE_URI + item}} style = {styles.item}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  unlockalView: {
    alignItems:"center",
    backgroundColor:"black",
    padding: 10
  },
  unlockalText:{
    fontFamily: "Rockwell",
    fontSize:20,
    color: '#ffae0d'
  },
  unlockalcaptionText: {
    fontSize:10,
    fontFamily: 'Rockwell',
    color: "white"
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    borderRadius: 30,
    marginTop: 10
  }
});

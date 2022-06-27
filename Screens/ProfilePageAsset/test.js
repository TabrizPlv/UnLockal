import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { handleGetAllUsersWithListings } from "../../src/ClientRequests/getAllUserWithListings";

export default function Test() {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //     const helper = async () => {
  //         const data1 = await handleGetUserDetails();
  //         setData(data1);
  //     };
  //     helper();
  // }
  //     , []);
  const tez = handleGetAllUsersWithListings()
    .then((res) => {
      setData(res);
      console.log();
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => console.log(tez)}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
}

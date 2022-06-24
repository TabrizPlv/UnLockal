import React from "react";
import { FlatList } from "react-native";
import { handleGetListing } from "../../ClientRequests/getListing";
import { ListingInfo } from "./Listing-info";

export default function Listing() {
  const { listings } = handleGetListing();

  return (
    <FlatList
      data={listings}
      renderItem={({ item: listing }) => {
        return <ListingInfo key={listing._id} listingProp={listing}/>;
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({ first });

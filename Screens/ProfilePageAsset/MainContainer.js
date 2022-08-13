// This file is used for the bottom navigation bar implementation
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreenMarketPlace from '../MarketPlace/HomeScreenMarketPlace';
import NewProfilePage from "./NewProfilePage";
import OrdersPage from "../Order/OrdersPage";
import OrdersPageSeller from "../Order/OrdersPageSeller";

//Screen names
const HomeScreenName = 'Home';
const ProfilePageName = 'Profile';
const OrdersPageName = 'Orders';
const OrdersPageSellerName = 'OrdersSeller';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
        <Tab.Navigator initialRouteName={HomeScreenMarketPlace}
         screenOptions={({route})=>({
            tabBarIcon : ({focused, color, size}) => {
                let iconName;
                let routeName = route.name;
                //Depending on focused, assign an icon
                if (routeName === HomeScreenName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (routeName === ProfilePageName) {
                    iconName = focused ? 'person' : 'person-outline'
                } else if (routeName === OrdersPageName) {
                    iconName = focused ? 'heart' : 'heart'
                } else if (routeName == OrdersPageSellerName) {
                    iconName = focused ? 'person': 'person'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            }, tabBarStyle : {backgroundColor : 'white'}, tabBarActiveTintColor : 'teal',
                tabBarInactiveTintColor : 'grey', headerShown : false,
         }) 
        }>
            <Tab.Screen name={HomeScreenName} component={HomeScreenMarketPlace}/>
            <Tab.Screen name={ProfilePageName} component={NewProfilePage}/>
            <Tab.Screen name={OrdersPageName} component={OrdersPage}/>
            <Tab.Screen name={OrdersPageSellerName} component={OrdersPageSeller}/>

            
        </Tab.Navigator>
  );
}

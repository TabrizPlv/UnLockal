import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import EmptyStoreTemplate from "./Screens/Store/EmptyStoreTemplate";
import EmptyStorePage from "./Screens/Store/EmptyStorePage";
import HomeScreenMarketPlace from "./Screens/MarketPlace/HomeScreenMarketPlace";
import MainContainer from './Screens/ProfilePageAsset/MainContainer';
import LoginScreen from "./Screens/Login/LoginScreen";
import ListProductsPage from "./Screens/ProfilePageAsset/ListProductsPage";
import UpdatedStorePage from './Screens/Store/UpdatedStorePage';
import EditProfilePage from "./Screens/ProfilePageAsset/EditProfilePage";
import Details from "./Screens/MarketPlace/Details";
import NewProfilePage from "./Screens/ProfilePageAsset/NewProfilePage";
import FilledStorePage from "./Screens/Store/FilledStorePage";
import OrdersPage from "./Screens/Order/OrdersPage";
import ProductOrderPage from "./Screens/Order/productorder";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options ={{headerShown: false}} name="Login" component={LoginScreen} /> 
        <Stack.Screen options ={{headerShown : false}} name="MainContainer" component={MainContainer}/> 
        <Stack.Screen options ={{headerShown : false}} name="EmptyStoreTemplate" component={EmptyStoreTemplate}/>
        <Stack.Screen options ={{headerShown : false}} name="EmptyStorePage" component={EmptyStorePage}/>
        <Stack.Screen options ={{headerShown : false}} name="HomeScreenMarketPlace" component={HomeScreenMarketPlace}/>
        <Stack.Screen options ={{headerShown : false}} name="ListProductsPage" component={ListProductsPage}/>
        <Stack.Screen options ={{headerShown : false}} name="UpdatedStorePage" component={UpdatedStorePage}/> 
        <Stack.Screen options ={{headerShown : false}} name="EditProfilePage" component = {EditProfilePage}/>
        <Stack.Screen options ={{headerShown : false}} name="Details" component = {Details}/>
        <Stack.Screen options ={{headerShown : false}} name="newProfilePage" component = {NewProfilePage}/>
        <Stack.Screen options ={{headerShown : false}} name="FilledStorePage" component = {FilledStorePage}/>
        <Stack.Screen options ={{headerShown : false}} name="OrdersPage" component = {OrdersPage}/>
        <Stack.Screen options ={{headerShown : false}} name="ProductOrdersPage" component = {ProductOrderPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

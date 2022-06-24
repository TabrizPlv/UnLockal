import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import EmptyStoreTemplate from "./Screens/EmptyStoreTemplate";
import EmptyStorePage from "./Screens/EmptyStorePage";
import HomeScreenMarketPlace from "./Screens/HomeScreenMarketPlace";
import MainContainer from './Screens/ProfilePageAsset/MainContainer';
import LoginScreen from "./Screens/LoginScreen";
import ListProductsPage from "./Screens/ListProductsPage";
import UpdatedStorePage from './Screens/UpdatedStorePage';
import EditProfile from "./Screens/EditProfilePage";
import EditProfilePage from "./Screens/EditProfilePage";

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

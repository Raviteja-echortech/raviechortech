import {View,Text,Image,StyleSheet,} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './Screens/SearchScreen';
import WalletScreen from './Screens/WalletScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Home from './Home';
import ModalScreen from './Screens/ModalScreen';
import Linear from './Screens/Linear';
import Homepic from "../img/Homepic.svg"
import Wallet from "../img/Wallet.svg"
import Profile from "../img/Profile.svg"
import Handbag from "../img/Handbag.svg"
import MagnifyingGlass from "../img/MagnifyingGlass.svg"
import AnimationPic from "./Screens/Animationpic";
import Keepbox from "./Screens/Keepbox";
const Tab = createBottomTabNavigator();

export const Footer=()=>{
  return(
    <Tab.Navigator initialRouteName="Keepbox" screenOptions={{headerShown:false}} >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:()=>(
       <Homepic width={20} color={"blue"} fill={'red'} />
      )}} />
      <Tab.Screen name="search" component={SearchScreen} options={{tabBarIcon:()=>(
        <MagnifyingGlass size={30}  />
      )}} />
      <Tab.Screen name="wallet" component={WalletScreen} options={{tabBarIcon:()=>(
       <Wallet size={30} fill={"green"} />
      )}}  />
      <Tab.Screen name="cart" component={CartScreen} options={{tabBarIcon:()=>(
        <Handbag size={30}  width={100}  />
      )}}  />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:()=>(
        <Profile size={30}   />
      )}}  />
      <Tab.Screen name="Modalbox" component={ModalScreen}  />
       <Tab.Screen name='Linear' component={Linear} />
       <Tab.Screen name="animation" component={AnimationPic} />
       <Tab.Screen name="Keepbox" component={Keepbox} />
    </Tab.Navigator>
  )
}

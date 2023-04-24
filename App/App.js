
import React from 'react';
import {View,Text} from "react-native"
import { ScaledSheet } from 'react-native-size-matters';
import Body from './Components/Body';
const App=()=>{
  return(
    <View>
     <Body/>
    </View>
  )
}
export default App
const styles=ScaledSheet.create({
    name:{
      color:"red",
      fontSize:"19@s",
      fontWeight:"900",
    },
    second:{
      color:"green",
      fontSize:"19@s",
      fontWeight:"700"
    }
})
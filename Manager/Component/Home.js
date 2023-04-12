import { View,Text,StyleSheet } from "react-native"
import React from 'react';
import Group from "../img/Group.svg"
import Vector from "../img/Vector.svg"

const Home=()=>{
    
    return(
        <View>
        <Group  />
        <Vector/>
        <Text style={styles.text} >Raviteja</Text>
        <Text style={styles.text1} >Vijay Ram chandran</Text>
        </View>
    )
}
export default Home
const styles=StyleSheet.create({
   text:{
   fontFamily:"DancingScript-VariableFont_wght",
   fontSize:20
   },
   text1:{
    fontFamily:"DancingScript-VariableFont_wght",
    fontSize:40,
   }
})
import React, {useState} from 'react';
import PhoneIcon from "../../img/PhoneIcon.svg"
import { View,StyleSheet } from 'react-native';
const AnimationPic=()=>{
    return(
        <View style={{justifyContent:"center",alignItems:"center",height:"100%"}}>
             <View style={styles.circle} justifyContent={'center'} alignItems={"center"} >
                <PhoneIcon/>
             </View>
        </View>
    )
}
export default AnimationPic
const styles=StyleSheet.create({
          circle:{
            height:100,
            width:100,
            borderRadius:100/2,
            backgroundColor:"blue"
          }
})
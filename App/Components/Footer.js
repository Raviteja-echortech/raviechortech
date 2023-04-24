import { View} from "react-native"
import Playback from "../img/Playback"
import SettingsIcon from "../img/SettingsIcon.svg"
import Catalog from "../img/Catalog.svg"
import Basket from "../img/Basket.svg"
import Profile from "../img/Profile.svg"
import React  from "react"
import { scale, ScaledSheet } from 'react-native-size-matters';

const Footer=()=>{
    return(
        <View style={styles.bottombar} >
      <Playback/>
     <SettingsIcon/>
     <Catalog/>
     <Basket/>
     <Profile/>
     </View>
    )
}
export default Footer
const styles= ScaledSheet.create({
    bottombar:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"50@s",
    }
  
})
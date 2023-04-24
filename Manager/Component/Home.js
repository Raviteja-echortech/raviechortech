import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Group from "../img/Group"
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

const Home = () => {
  return (
    <ScrollView style={styles.roll}>
      <View style={styles.back}>
        <View>
          <Image
            style={styles.backimg}
            source={require('../img/imageback.png')}
          />
        </View>
        <View position={'absolute'}>
          <View style={styles.frontview}>
            <Image
              source={require('../img/Vector.png')}
              style={styles.vector}
            />
            <Text style={styles.welcome}>
              Welcome,HUBO !
            </Text>
          </View>
          <View style={styles.timearround} >
          <Text style={styles.time}>12:48</Text>
          </View>
        <View style={styles.belowtime} >
          <TouchableOpacity style={styles.btn}>
            <View style={styles.singpore}>
              <Text
                style={styles.singporeText}>
                Singapore
              </Text>
              <Image
                source={require('../img/Polygon.png')}
                style={styles.polygon}
              />
            </View>
          </TouchableOpacity>
         </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.group}>
           <Group  style={styles.groupIcon}  />
          <View style={styles.contactbox}>
            <Text
              style={styles.connected}>
              connected
            </Text>
            <Text style={styles.date}>
              112.684.195.1.3
            </Text>
          </View>
        </View>
        <View style={styles.speedbtn}>
          <TouchableOpacity> 
            <View
              style={styles.butimg1 }>
              <Image
                source={require('../img/Downarrow.png')}
                style={styles.dowarrow}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity  >
            <View
              style={styles.butimg}>
              <Image
                source={require('../img/Uparrow.png')}
                style={styles.uparrow}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = ScaledSheet.create({
  back: {
    backgroundColor: 'black',
    height: '270@s',
  },
  
  bottom: {
    backgroundColor: '#4F73F5',
    height: "500@s",
    borderTopLeftRadius: "30@s",
    borderTopRightRadius: "30@s",
    width: '350@s',
    alignItems:"center",
   
  },
  btn: {
    marginLeft: '60@s',
    marginTop: '10@s',
    height:"40@s",
    width:"55@s",
    alignContent:"center",
    justifyContent:"center",
    
  },
  time: {
    fontSize: "55@s",
    color: '#FFFFFF',
    fontFamily:"A Love of Thunder",
    marginLeft:"90@s",
    
  },
  timearround:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"20@s",
    marginTop:"30@s",
  },
  frontview: {
    flexDirection: 'row',
    marginLeft: '15@s',
    marginTop: '8@s',

  },
  singpore: {
    borderWidth: "0.4@s",
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    width: '110@s',
    padding: '11@s',
    marginLeft:"8@s",
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: "6@s",
    justifyContent: 'space-evenly',
  },
  group: {
    width: "185@s",
    borderRadius: '1000@s',
    alignItems:"center",
    marginTop:"50@s",
    marginBottom:"10@s",
    justifyContent:"center",
    height:"185@s",
    backgroundColor: 'white',
    elevation: 25,
  },
  contactbox: {
    marginTop: '5@s',
    marginLeft: '20@s',
    marginBottom:"10@s",
  },
  speedbtn: {
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    marginTop: "30@s",
  },
  connected:{
    marginLeft: "10@s",
    fontSize: "16@s",
    fontWeight: '800',
    color: '#4F73F5',
    lineHeight: "30@s",
    fontFamily:"Poppins-Bold",
    marginLeft:"-3@s",
  },
  date:{
    color: '#000000',
     fontWeight: 'bold',
      fontSize:"14@s",
      fontFamily:"Poppins-SemiBold",
      marginLeft:"-15@s",
      marginRight:"10@s",
  },
  singporeText:{
    color: '#FFFFFF',
     marginRight: '8@s',
      fontSize: "10@s",
      fontWeight:"600", 
      fontFamily:"Poppins-SemiBold"
  },
  butimg:{
        padding: "20@s",
        marginLeft: "15@s",
        marginBottom:"10@s",
        borderRadius: "10@s",
       width:"140@s",
       height:"50@s",
       paddingLeft:"25@s",
       justifyContent:"center",
       alignItems:"center",
      backgroundColor: 'rgba(255,255,255,0.3)',
  },
  butimg1:{
    padding: "20@s",
    marginLeft: "2@s",
    marginBottom:"10@s",
    borderRadius: "10@s",
   width:"150@s",
   height:"50@s",
   paddingLeft:"25@s",
   justifyContent:"center",
   alignItems:"center",
  backgroundColor: 'rgba(255,255,255,0.3)',
  },
  polygon:{
    width: "9@s", 
    height: "10@s", 
    marginTop: "3@s",
    justifyContent:"center",
    alignItems:"center"
  },
  welcome:{
    color: '#FFFFFF', 
    fontSize: "20@s",
    fontFamily:"A Love of Thunder",
    marginBottom:"20@s",
    marginTop:"15@s",
    marginLeft:"5@s",
  },
  vector:{
    width: "30@s", 
    height: "30@s", 
    marginRight: '8@s',
    marginTop:"15@s"
  },
  backimg:{
    height: "900@s", 
    opacity: "0.2@s",

  },
  roll:{
    backgroundColor:"black",
    flex:1
  },
  dowarrow:{
    width: "95@s", 
    height: "20@s",
  },
  uparrow:{
    width: "95@s", 
    height: "20@s"
  },
  belowtime:{
    marginTop:"10@s",
    marginLeft:"60@s"
  },
  groupIcon:{
    size:"70@s"
  }
});

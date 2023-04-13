import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';


const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"black"}} > 
      <View style={styles.back}>
        <View>
          <Image
            style={{height: 700, opacity: 0.3}}
            source={require('../img/imageback.png')}
          />
        </View>
        <View position={'absolute'}>
          <View style={styles.frontview}>
            <Image
              source={require('../img/Vector.png')}
              style={{width: 30, height: 30, marginRight: '10%'}}
            />
            <Text style={{color: '#FFFFFF', fontSize: 25,fontWeight:"900"}}>Welcome,HUBO !</Text>
          </View>
          <Text style={styles.time}>12:48</Text>
          <TouchableOpacity style={styles.btn}>
            <View style={styles.singpore}>
              <Text style={{color: '#FFFFFF', marginRight: '10%',fontSize:20}}>
                Singapore
              </Text>
              <Image
                source={require('../img/Polygon.png')}
                style={{width: 10, height: 10, marginTop: 7}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom} >
        <View  style={styles.group} >
        <Image
        source={require('../img/Group1.png')}
        style={{width:75,height: 78,marginLeft:30}}
        />
        <View style={styles.contactbox} >
        <Text style={{marginLeft:10,fontSize:20,fontWeight:"800",color:"#4F73F5",lineHeight:39}}>connected</Text>
        <Text style={{color:"#000000",fontWeight:"800"}} >112.684.195.1.3</Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  back: {
    backgroundColor: 'black',
    height: '60%',
    
  },
  text: {
    fontFamily: 'DancingScript-VariableFont_wght',
    color: 'white',
    fontSize: 20,
  },
  bottom:{
  backgroundColor:"#4F73F5",
  height:"40%",
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  width:"100%"
  
  },
  btn: {
    marginLeft: '30%',
    marginTop: '10%',
  },
  time: {
    fontSize: 80,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: '30%',
    marginTop: '20%',
  },
  frontview: {
    flexDirection: 'row',
    marginLeft: '10%',
    marginTop: '15%',
  },
  singpore: {
    borderWidth: 1,
    borderColor:"#FFFFFF",
    flexDirection: 'row',
    width: '70%',
    padding: '8%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  group:{
   marginLeft:"20%",
   width:"58%",
   marginTop:"10%",
   padding:"10%",
   borderRadius:168,
   borderWidth:1,
   borderColor:"white",
   backgroundColor:"white",
   elevation:1,
  },
  contactbox:{
     marginTop:"10%",
     marginLeft:"20%",
  }
});

import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import Albumone from '../Albums/Albumone';
import Albumthree from '../Albums/Albumthree';
import Albumtwo from '../Albums/Albumtwo';
import Slider from '@react-native-community/slider';
import Arrowleft from '../img/Arrowleft.svg';
import Heart from '../img/Heart.svg';
import React, {useState} from 'react';
import Hambergmenu from '../img/Hambergmenu.svg';
import Download from '../img/Download.svg';
import Pause from '../img/Pause.svg';
import SkipBackward from '../img/SkipBackward.svg';
import Playicon from '../img/Playicon.svg';
import Skipforward from '../img/Skipforward.svg';
import Dolby from '../img/Dolby.svg';
import {scale} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import albums from './Albums';
import Sharesvg from '../img/Sharesvg';
import Footer from './Footer';

const Body = () => {
 
  const [state, setstate] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.navbar}>
        <Arrowleft marginTop={scale(8)} />
        <View style={styles.textrealated}>
          <Text style={styles.nowplay}>Now Playing</Text>
          <Text style={styles.playlist}>Playlist "Playlist of the day"</Text>
        </View>
        <Heart marginRight={scale(5)} marginTop={scale(5)}  />
        <Hambergmenu marginLeft={scale(-20)} marginTop={scale(1)} />
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.card}>
            <Albumone marginBottom={scale(50)}  marginRight={scale(30)} width={scale(250)}  />
            <View style={styles.text1} >
            <View style={styles.nameview} >
              <Text style={styles.name}>{albums[0].name}</Text>
              <Text style={styles.singer}>{albums[0].singer}</Text>
              </View>
              <View style={styles.shareIcon}>
                <Sharesvg />
                <Text style={{color:"white",marginLeft:scale(10),fontSize:scale(25),marginTop:scale(-15)}} >...</Text>
                </View>
            </View>
          </View>
          <View style={styles.card}>
            <Albumtwo marginBottom={scale(50)}  marginLeft={scale(-40)} marginRight={scale(40)} />
          </View>
          <View style={styles.card}>
            <Albumthree marginBottom={scale(50)} marginLeft={scale(-40)}  />
          </View>
        </ScrollView>
      </View>
      <View >
        {/* withslidersection */}
        <View style={styles.slider}  >
        <Slider
          maximumValue={15}
          minimumValue={0}
          minimumTrackTintColor="#7A51E2"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#7A51E2"
          step={2}
          value={0.5}
        />
        <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:scale(15),marginRight:scale(15)}} >
            <Text style={{color:"#FFFFFF",fontSize:scale(10)}} >
                1:25
            </Text>
            <Text style={{color:"#FFFFFF",fontSize:scale(10)}}  >
             3:15
            </Text>
        </View>
        </View>
        <View style={styles.buttonsection}>
          <Dolby marginTop={scale(15)} marginLeft={scale(-10)} />
          <Skipforward marginTop={scale(10)} />
          <View style={styles.round}>
            <Pressable onPress={() => setstate(!state)}>
              {state ? <Pause /> : <Playicon />}
            </Pressable>
          </View>
          <SkipBackward marginTop={scale(10)} />
          <Download marginTop={scale(10)} />
        </View>
      </View>
      <Footer/>
    </SafeAreaView>
  );
};
export default Body;
const styles = ScaledSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20@s',
    marginLeft: '15@s',
    marginRight: '20@s',
  },
  nowplay: {
    color: '#ABABAB',
    fontSize: '11@s',
    marginLeft: '40@s',
  },
  playlist: {
    color: '#F4EFEF',
    fontSize: '13@s',
    lineHeight: '25@s',
  },
  background: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: '700@s',
  },
  textrealated: {
    marginLeft: '30@s',
  },
  Albums: {
    flexDirection: 'row',
  },
  songname: {
    color: 'white',
    marginLeft:"10@s",
    fontSize: '10@s',
  },
  buttonsection: {
    flexDirection: 'row',
    marginTop: '40@s',
    justifyContent: 'space-evenly',
  },
  card: {
    marginLeft: '20@s',
    marginRight: '1@s',
    marginTop: '50@s',
    marginBottom: '20@s',
  },
  name: {
    color: '#FFFFFF',
    fontSize: '16@s',

  },
  singer: {
    color: '#ABABAB',
  },
  round: {
    height: '60@s',
    width: '60@s',
    borderRadius: '30@s',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-11@s',
    backgroundColor: '#7A51E2',
  },
  imagestyles: {
    shadowColor: 'blue',
    elevation: 100,
    shadowOpacity: '0.2',
  },
  text1:{
     flexDirection:"row", 
     marginRight:"-30@s",
  },
  textview:{
  marginLeft:"100@s"
  },
  nameview:{
    marginLeft:"10@s"
  },
  slider:{
    width:"330@s",
    marginLeft:"10@s"
  },
  shareIcon:{
    flexDirection:"row",
    marginLeft:"200@s"
  }
});

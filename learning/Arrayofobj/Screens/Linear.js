import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Switch,
  SafeAreaView,
  Button,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import * as Progress from 'react-native-progress';
import {useEffect, useRef, useState} from 'react';
import Slider from '@react-native-community/slider';
import {Circle, Svg} from 'react-native-svg';

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1F4';

const Linear = () => {
  const first = useRef(new Animated.Value(0)).current;
  const secondanimation = useRef(new Animated.Value(0)).current;
  const thirdanimation = useRef(new Animated.Value(0)).current;
  //   const [range, setRange] = useState("50%");
  //   const[sliding,setSliding]=useState('Inactive')
  // const{width,height}=Dimensions.get('window')
  // const[count,setcount]=useState(0.1)
  // const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // const CIRClE_LENGTH=1000;
  // const R=CIRClE_LENGTH/(2*Math.PI)
  // useEffect(()=>{
  //  setInterval(() => {
  //   setcount((pre)=>pre+0.1)
  // }, 1000);
  // },[])
  useEffect(() => {
    Animated.loop(
      Animated.stagger(1000, [
        Animated.timing(first, {
          toValue: 2,
          useNativeDriver: true,
        }),
        Animated.timing(secondanimation, {
          toValue: 2,
          useNativeDriver: true,
        }),
        Animated.timing(thirdanimation, {
          toValue: 2,
          useNativeDriver: true,
        }),
      ]),
  
    ).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Svg>
      <Circle cx={width/2} cy={height/2} r={R} stroke={BACKGROUND_STROKE_COLOR} strokeWidth={30}  />
      <Circle cx={width/2} cy={height/2} r={R} stroke={STROKE_COLOR} strokeWidth={15} strokeDasharray={CIRClE_LENGTH} strokeDashoffset={CIRClE_LENGTH*`${count}`} />
    </Svg> */}

      {/* <Switch
         trackColor={{false: '#767577', true: '#81b0ff'}}
         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
         value={isEnabled}
       />  */}

      {/* <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
          <View></View>
        <Text style={styles.buttonText}>Sign-Up</Text>
      </LinearGradient>

      <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 42}}
        locations={[0, 1]}
        colors={['yellow', 'green']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <Text>THIS IS TEXT GRADIENT</Text>
      </LinearTextGradient>  */}

      {/* <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={2}
          value={0.5}
          onValueChange={
            (value) => setRange(parseInt(value*100)+'%')
          }
          onSlidingStart={()=>setSliding("Sliding")}
          onSlidingComplete={()=>setSliding("Inactive")}
          style={{marginTop:"60%",padding:10}}
        /> */}
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'yellow',
          marginBottom: 10,

          opacity: first,
        }}></Animated.View>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'yellow',
          marginBottom: 10,
          opacity: secondanimation,
          delay: 2000,
        }}></Animated.View>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'yellow',
          marginBottom: 10,
          opacity: thirdanimation,
          delay: 2000,
        }}></Animated.View>
    </SafeAreaView>
  );
};
var styles = StyleSheet.create({
  // linearGradient: {
  //   paddingRight: 10,
  //   borderRadius: 10,
  //   height: 60,
  //   width: '55%',
  // },
  // buttonText: {
  //   fontSize: 18,
  //   fontFamily: 'Gill Sans',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: '#ffffff',
  //   margin:10,
  //   backgroundColor: 'transparent',
  // },
  // slider:{
  //   justifyContent:"center",
  //   alignItems:"center"
  // }
});
export default Linear;

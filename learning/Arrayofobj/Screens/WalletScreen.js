import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
//import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const WalletScreen = () => {
  //const [count, setCount] = React.useState(0);
  const Progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(0)).current;
  // const onPress = () => {
  //   setCount(count + 1);
  // };
  const SIZE = 100.0;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(scale, {toValue: 1, useNativeDriver: true}),
          Animated.spring(scale, {toValue: 0.5, useNativeDriver: true}),
        ]),
        Animated.sequence([
          Animated.spring(Progress, {toValue: 2, useNativeDriver: true}),
          Animated.spring(Progress, {toValue: 1, useNativeDriver: true}),
        ]) 
      ]),
      
    ).start()
  
  

  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: Progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            opacity: Progress,
            transform: [ {scale}],
          },
        ]}></Animated.View>
      {/* <TouchableWithoutFeedback 
       onPress=
         {onPress} >
        <View>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text>{count}</Text> */}
      {/* <Pressable onPress={()=>onPress()} >
        <View style={{backgroundColor:"red",width:"60%",marginTop:"10%",marginLeft:"6%",padding:"10%"}} >
          <Text  style={{fontSize:25,color:"white"}}>text Press</Text>
        </View>
      </Pressable>
      <Text>{count}</Text> */}
    </View>
  );
};
export default WalletScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0,0,225,0.5)',
  },
});

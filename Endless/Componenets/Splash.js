import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet} from 'react-native-size-matters';
import Splashlogo from '../assests/Logos/Splashlogo.svg';
import React from 'react';
import {StatusBar} from 'react-native';
const Splash = () => {
  return (
    <LinearGradient
      start={{x: 4, y: 1.25}}
      end={{x: -5, y: 2}}
      colors={['#D10FBE', '#FCA206']}
      style={Styles.splashgradient}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <Splashlogo />
    </LinearGradient>
  );
};
export default Splash;

const Styles = ScaledSheet.create({
  splashgradient: {
    width: '350@s',
    justifyContent: 'center',
    alignItems: 'center',
    height: '740@s',
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Endlesslogo from '../assests/Logos/Endlesslogo.svg';
import Clouds from '../assests/Logos/Clouds.svg';
import Birdlogo from '../assests/Logos/Birdlogo.svg';
import Eyeclose from '../assests/Logos/Eyeclose.svg';
import Eyeopen from '../assests/Logos/Eyeopen.svg';
import Tickmark from '../assests/Logos/Tickmark.svg';
import {LinearTextGradient} from 'react-native-text-gradient';

const Signup = () => {
  const [eye, seteye] = useState(true);
  const [email, setemail] = useState('');
  const [tick, settick] = useState(true);
  return (
    <ScrollView>
      <SafeAreaView style={styles.fullview}>
        <View>
          <LinearGradient
            start={{x: 0.5, y: -0.7}}
            end={{x: 1, y: 1}}
            colors={['#FCA206', '#D10FBE', '#465AED']}
            style={styles.lineargradient}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.namelogo}>
              <Endlesslogo elevation={5} />
              <Text style={styles.endlessname}>Endless</Text>
            </View>
            <View style={styles.birdlogo}>
              <Birdlogo marginTop={scale(38)} />
            </View>
          </LinearGradient>
          <Clouds marginTop={scale(-80)} width={scale(350)} />
          <View style={styles.signinbox}>
            <Text style={styles.singinText}>Sign In</Text>
            <Text style={styles.singinmatter}>sign In to Your Account</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.emailid}>Email Address/Mobile Number</Text>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor={'#6A6A6A'}
              style={styles.inputbox1}
            />
            <Text style={styles.password}>Password</Text>
            <View style={styles.inputcontainer}>
              <TextInput
                placeholder="endless@05"
                style={styles.inputbox1}
                secureTextEntry={eye}
                placeholderTextColor={'#6A6A6A'}
              />
              <Pressable onPress={() => seteye(!eye)} style={styles.Eye}>
                {eye ? <Eyeclose /> : <Eyeopen />}
              </Pressable>
            </View>

            <LinearTextGradient
              locations={[0, 1]}
              colors={['#E82E5D', '#AA1B6F']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linear}>
              <Text style={styles.forgotpass}>Forgot Password?</Text>
            </LinearTextGradient>
          </View>
          <View style={styles.bottombox}>
            <Pressable onPress={() => settick(!tick)}>
              <View style={styles.chequebox}>
                {tick ? (
                  <Tickmark marginTop={scale(2)} marginLeft={scale(2)} />
                ) : null}
              </View>
            </Pressable>
            <View style={{width: scale(300), marginLeft: scale(10)}}>
              <Text style={styles.chequeboxtext}>
                By Continuing you accept Our Privacy Policy and Terms{' '}
              </Text>
              <Text style={styles.chequeboxtext}> of Use</Text>
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.buttonstyle}>
              <Text style={styles.signinbtntext}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.createaccount}>
            <Text style={{color: '#6A6A6A', fontFamily: 'OpenSans-medium'}}>
              New user ?
            </Text>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#E82E5D', '#AA1B6F']}
              start={{x: 0.5, y: 1}}
              end={{x: 1, y: 0}}
              style={{marginLeft: scale(3), marginTop: scale(-2)}}>
              <Text
                style={{fontFamily: 'OpenSans-SemiBold', fontSize: scale(15)}}>
                Create Account
              </Text>
            </LinearTextGradient>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Signup;
const styles = ScaledSheet.create({
  lineargradient: {
    height: '180@s',
  },
  chequeboxtext: {
    color: '#898D9E',
    fontSize: '10@s',
    fontFamily: 'OpenSans-Regular',
  },
  bottombox: {
    flexDirection: 'row',
    marginTop: '50@s',
    justifyContent: 'center',
  },
  linear: {
    marginLeft: '180@s',
    marginTop: '20@s',
  },
  chequebox: {
    borderWidth: 1,
    height: '20@s',
    borderColor: '#898D9E',
    marginLeft: '30@s',
    borderRadius: '3@s',
    width: '20@s',
  },
  endlogo: {
    height: '40@s',
    width: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: '100@s',
    marginTop: '60@s',
  },
  password: {
    marginTop: '16@s',
    color: '#2B2B2B',
    marginLeft: '30@s',
    fontFamily: 'OpenSans-Medium',
    fontSize: '13@s',
  },
  endlessname: {
    fontFamily: 'OpenSans-Bold',
    fontSize: '20@s',
    color: '#FFFFFF',
    marginLeft: '5@s',
    marginTop: '4@s',
  },
  signinbox: {
    marginTop: '-40@s',
    marginLeft: '30@s',
  },
  namelogo: {
    flexDirection: 'row',
    justifyContent: 'center',

    alignContent: 'center',
    marginTop: '60@s',
  },
  singinmatter: {
    fontSize: '12@s',
    color: 'grey',
    fontFamily: 'OpenSans-Regular',
  },
  singinText: {
    fontSize: '30@s',
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  birdlogo: {
    marginLeft: '230@s',
    marginTop: '-140@s',
  },
  fullview: {
    height: '800@s',
    backgroundColor: '#FFFFFF',
  },
  emailid: {
    color: '#1E1E1E',
    marginTop: '30@s',
    marginLeft: '35@s',
    fontSize: '13@s',
    fontFamily: 'OpenSans-Medium',
  },
  form: {
    marginTop: '10@s',
  },
  inputbox1: {
    backgroundColor: '#F5F6FA',
    color: 'gray',
    fontWeight: '600',
    marginLeft: '30@s',
    marginTop: '10@s',
    padding: '13@s',
    borderRadius: '7@s',
    width: '280@s',
  },
  inputcontainer: {
    flexDirection: 'row',
  },
  forgotpass: {
    fontSize: '14@s',
    fontFamily: 'OpenSans-SemiBold',
  },
  buttonstyle: {
    padding: '10@s',
    width: '280@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginLeft: '30@s',
    marginTop: '20@s',
    borderRadius: '5@s',
    elevation: 2,
  },
  signinbtntext: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Bold',
    fontSize: '17@s',
  },
  createaccount: {
    flexDirection: 'row',
    marginTop: '10@s',
    marginBottom: '10@s',

    justifyContent: 'center',
  },
  Eye: {
    marginTop: '25@s',
    marginLeft: '-35@s',
    width: '40@s',
    height: '30@s',
  },
});

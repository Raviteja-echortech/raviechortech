import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Endlesslogo from '../assests/Logos/Endlesslogo.svg';
import Clouds from '../assests/Logos/Clouds.svg';
import Birdlogo from '../assests/Logos/Birdlogo.svg';
import Eyeclose from '../assests/Logos/Eyeclose.svg';
import Eyeopen from '../assests/Logos/Eyeopen.svg';
import Nodata from '../assests/Logos/Nodata.svg';
import Greentick from '../assests/Logos/Greentick.svg';
import Calendargradient from '../assests/Logos/Calendargradient.svg';
import {LinearTextGradient} from 'react-native-text-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
//OpenSans-Medium OpenSans-Regular OpenSans-Regular OpenSans-SemiBold
const Createaccount = () => {
  const [eye, seteye] = useState(true);
  const [userdetails, setdetails] = useState({
    email: '',
    mobile: '',
    password: '',
  });
  const [modal, setmodal] = useState(false);
  const [Dateofbirth, setDateofbirth] = useState('');
  const [selecteddate, setSelecteddate] = useState('');
  const [date, setdate] = useState(new Date());
  const ToggelDatapicker = () => {
    setmodal(!modal);
  };
  const onHandlechange = ({type}, selecteddate) => {
    if (type == 'set') {
      const currentdate = selecteddate;
      setSelecteddate(currentdate);
      if (Platform.OS === 'android') {
        ToggelDatapicker();
        setDateofbirth(currentdate.toDateString());
      }
    } else {
      ToggelDatapicker();
    }
  };
  const Handlechange = (key, value) => {
    setdetails({...userdetails, [key]: value});
  };
  var lowercase = /[a-z]/;
  var uppercase = /[A-Z]/;
  var specialcharater = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var numerics = /[0-9]/;
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <SafeAreaView style={{height: scale(890)}}>
        <View>
          <LinearGradient
            start={{x: 0.33, y: -0.8}}
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
            <Text style={styles.singinText}>Create Account</Text>
            <Text style={styles.singinmatter}>
              Fill your Details to Create your Account
            </Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.emailid}>Mobile Number</Text>
            <TextInput
              placeholder="967 698 9240"
              style={styles.inputbox1}
              keyboardType="numeric"
              value={userdetails.mobile}
              placeholderTextColor={'#6A6A6A'}
              onChangeText={Handlechange}
              maxLength={10}
            />
            <Text style={styles.emailid}>Email Address</Text>
            <TextInput
              placeholder="example@gmail.com"
              style={styles.inputbox1}
              Value={userdetails.email}
              placeholderTextColor={'#6A6A6A'}
              onChangeText={text => Handlechange('email', text)}
            />
            <Text style={styles.password}>Password</Text>
            <View style={styles.inputcontainer}>
              <TextInput
                placeholder="endless@05"
                style={styles.inputbox1}
                value={userdetails.password}
                onChangeText={text => Handlechange('password', text)}
                placeholderTextColor={'#6A6A6A'}
                secureTextEntry={eye}
              />
              <Pressable onPress={() => seteye(!eye)} style={styles.Eye}>
                {eye ? <Eyeclose /> : <Eyeopen />}
              </Pressable>
            </View>
          </View>
          <View style={{marginTop: scale(10)}}>
            <View style={styles.passwordlimits}>
              {userdetails.password.length >= 8 ? (
                <Greentick marginRight={scale(10)} />
              ) : (
                <Nodata marginRight={scale(10)} />
              )}
              <Text style={styles.passwordconditontext}>
                Atleast 8 characters
              </Text>
            </View>
            <View style={styles.passwordlimits}>
              {lowercase.test(userdetails.password) &&
              uppercase.test(userdetails.password) ? (
                <Greentick marginRight={scale(10)} />
              ) : (
                <Nodata marginRight={scale(10)} />
              )}
              <Text style={styles.passwordconditontext}>
                Both Uppercase and lowercase characters
              </Text>
            </View>
            <View style={styles.passwordlimits}>
              {specialcharater.test(userdetails.password) ||
              numerics.test(userdetails.password) ? (
                <Greentick marginRight={scale(10)} />
              ) : (
                <Nodata marginRight={scale(10)} />
              )}
              <Text style={styles.passwordconditontext}>
                Atleast one number or symbol
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.password}>Date of Birth</Text>
            <TextInput
              placeholder="17-02-1996"
              style={styles.inputbox1}
              value={Dateofbirth}
              onPressIn={ToggelDatapicker}
              onChangeText={setDateofbirth}
              editable={false}
              placeholderTextColor={'#6A6A6A'}
            />
            <Pressable
              onPress={ToggelDatapicker}
              style={styles.calendarpressable}>
              <Calendargradient />
            </Pressable>
            {modal && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onHandlechange}
              />
            )}
          </View>
          <TouchableOpacity>
            <View style={styles.buttonstyle}>
              <Text style={styles.signinbtntext}>Create account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.createaccount}>
            <Text
              style={{
                color: '#6A6A6A',
                fontFamily: 'OpenSans-medium',
              }}>
              Already Have an Account ?
            </Text>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#E82E5D', '#AA1B6F']}
              start={{x: 0.5, y: 1}}
              end={{x: 1, y: 0}}
              style={{marginLeft: scale(3), marginTop: scale(-3)}}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: scale(15),
                }}>
                Sign in
              </Text>
            </LinearTextGradient>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Createaccount;
const styles = ScaledSheet.create({
  lineargradient: {
    height: '170@s',
  },
  chequeboxtext: {
    color: '#898D9E',
    fontSize: '13@s',
    fontFamily: 'OpenSans-Regular ',
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
    fontSize: '15@s',
  },
  endlessname: {
    fontFamily: 'OpenSans-Bold',
    fontSize: '20@s',
    color: '#FFFFFF',
  },
  signinbox: {
    marginTop: '-40@s',
    marginLeft: '30@s',
  },
  namelogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60@s',
  },
  singinmatter: {
    fontSize: '10@s',
    color: 'grey',
    fontFamily: 'OpenSans-Regular',
  },
  singinText: {
    fontSize: '25@s',
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  birdlogo: {
    marginLeft: '230@s',
    marginTop: '-140@s',
  },

  emailid: {
    color: '#1E1E1E',
    marginTop: '30@s',
    marginLeft: '35@s',
    fontSize: '15@s',
    fontFamily: 'OpenSans-Medium',
  },
  form: {
    marginTop: '10@s',
  },
  inputbox1: {
    backgroundColor: '#F5F6FA',
    color: 'gray',
    fontWeight: '500',
    marginLeft: '33@s',
    marginTop: '10@s',
    padding: '13@s',
    borderRadius: '5@s',
    width: '280@s',
  },
  inputcontainer: {
    flexDirection: 'row',
  },
  forgotpass: {
    fontSize: '17@s',
    fontFamily: 'OpenSans-Bold',
  },
  buttonstyle: {
    padding: '10@s',
    width: '280@s',
    marginLeft: '30@s',
    marginTop: '30@s',
    borderRadius: '5@s',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
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
  passwordlimits: {
    flexDirection: 'row',
    marginLeft: '30@s',
    marginTop: '6@s',
    marginRight: '10@s',
  },
  calendarpressable: {
    width: '50@s',
    height: '50@s',
    marginLeft: '270@s',
    marginTop: '-40@s',
  },
  Eye: {
    marginTop: '25@s',
    marginLeft: '-35@s',
    width: '30@s',
    height: '30@s',
  },
  passwordconditontext: {
    fontFamily: 'OpenSans-Regular',
    color: '#898D9E',
    fontSize: '11@s',
  },
});

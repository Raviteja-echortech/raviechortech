import {View, Text, TouchableOpacity, Pressable, StatusBar} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import React, {useState} from 'react';
import Man from '../assests/Logos/Man.svg';
import Woman from '../assests/Logos/Woman.svg';
import Whitetick from '../assests/Logos/Whitetick.svg';
import LinearGradient from 'react-native-linear-gradient';
const GenderSelection = () => {
  const [male, setmale] = useState(false);
  const [female, setfemale] = useState(false);
  const [netrual, setnetural] = useState(false);
  const femalebutton = () => {
    setfemale(true);
    setmale(false);
    setnetural(false);
  };
  const malebutton = () => {
    setmale(true);
    setfemale(false);
    setnetural(false);
  };
  const neturalbutton = () => {
    setnetural(true);
    setfemale(false);
    setmale(false);
  };
  return (
    <View style={Styles.Totalpage}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={Styles.childboxwidth}>
        <View>
          <Text
            style={{
              color: '#000000',
              fontSize: scale(50),
              marginBottom: scale(30),
              fontFamily: 'OpenSans-SemiBold',
              marginLeft: scale(13),
            }}>
            I am a
          </Text>
        </View>
        <TouchableOpacity>
          <Pressable onPress={femalebutton}>
            {female ? (
              <LinearGradient
                start={{x: 0.33, y: -1}}
                end={{x: 1, y: 1}}
                colors={['#E82E5D', '#AA1B6F']}
                style={Styles.selected}>
                <View style={Styles.textarrangeinner}>
                  <Woman />
                  <Text style={Styles.gendertext}>Female</Text>
                  <Whitetick marginLeft={scale(150)} marginTop={scale(6)} />
                </View>
              </LinearGradient>
            ) : (
              <View style={Styles.unselected}>
                <Text style={Styles.nothiglitedtext}>Female</Text>
              </View>
            )}
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable onPress={malebutton}>
            {male ? (
              <LinearGradient
                start={{x: 0.33, y: -1}}
                end={{x: 1, y: 1}}
                colors={['#E82E5D', '#AA1B6F']}
                style={Styles.selected}>
                <View style={Styles.textarrangeinner}>
                  <Man />
                  <Text style={Styles.gendertext}>Male</Text>
                  <Whitetick marginLeft={scale(160)} marginTop={scale(6)} />
                </View>
              </LinearGradient>
            ) : (
              <View style={Styles.unselected}>
                <Text style={Styles.nothiglitedtext}>Male</Text>
              </View>
            )}
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable onPress={neturalbutton}>
            {netrual ? (
              <LinearGradient
                start={{x: 0.33, y: -1}}
                end={{x: 1, y: 1}}
                colors={['#E82E5D', '#AA1B6F']}
                style={Styles.selected}>
                <View>
                  <View style={Styles.textarrangeinner}>
                    <Text style={{color: '#FFFFFF', fontSize: scale(17)}}>
                      Other
                    </Text>
                    <Whitetick marginLeft={scale(180)} marginTop={scale(5)} />
                  </View>
                </View>
              </LinearGradient>
            ) : (
              <View style={Styles.unselected}>
                <Text style={Styles.nothiglitedtext}>Other</Text>
              </View>
            )}
          </Pressable>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.continue}>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: scale(17),
              fontFamily: 'OpenSans-Bold',
            }}>
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default GenderSelection;
const Styles = ScaledSheet.create({
  Totalpage: {
    backgroundColor: '#FFFFFF',
    height: '900@s',
    width: '360@s',
    alignItems: 'center',
  },
  childboxwidth: {
    width: '330@s',
    marginTop: '70@s',
  },
  selected: {
    borderWidth: 1,
    borderColor: '#E8E6EA',
    padding: '13@s',
    justifyContent: 'center',
    width: '300@s',
    height: '55@s',
    marginLeft: '8@s',
    marginTop: '20@s',
    borderRadius: '10@s',
    elevation: 5,
  },
  unselected: {
    borderWidth: 1,
    borderColor: '#E8E6EA',
    padding: '8@s',
    width: '300@s',
    height: '50@s',
    marginLeft: '10@s',
    marginTop: '20@s',
    borderRadius: '10@s',
  },
  continue: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '290@s',
    width: '290@s',
    marginLeft: '-15@s',
    padding: '15@s',
    borderRadius: '8@s',
    elevation: 5,
    backgroundColor: '#000000',
  },
  textarrangeinner: {
    flexDirection: 'row',
  },
  gendertext: {
    color: '#FFFFFF',
    marginLeft: '10@s',
    fontSize: '16@s',
  },
  nothiglitedtext: {
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: '15@s',
    marginTop: '3@s',
    marginLeft: '10@s',
  },
});

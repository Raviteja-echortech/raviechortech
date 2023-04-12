import * as React from 'react';
import {View, Button, Text} from 'react-native';
import Forminput from './FormInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
const Forms = ({navigation, route}) => {
  //const isFocused = useIsFocused();
  const [inisial, setinisial] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const Handlechange = (key, value) => {
    setinisial({...inisial, [key]: value});
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  React.useEffect(()=>{
    if(route?.params?.details){
     let nam= route?.params?.details.name;
     let mail= route?.params?.details.email;
     let password= route?.params?.details.password;
      setinisial({
        name:nam,
        email:mail,
        password:password,
      })
      }
      
     
  },[route?.params?.details])
  const handleSubmit = async () => {
    var b = validateEmail(inisial.email);
    if (!b) {
      return;
    }
    let r = JSON.parse(await AsyncStorage.getItem('@storage_Key'));
    if (r && r.length) {
      if (route?.params?.id || route?.params?.id === 0) {
        r[route?.params?.id].name = inisial.name;
        r[route?.params?.id].email = inisial.email;
        r[route?.params?.id].password = inisial.password;
      } else {
        r = [...r, inisial];
        
      }
    } else {
      r = [inisial];
     
    }
    await AsyncStorage.setItem('@storage_Key', JSON.stringify(r));
    setinisial({
      name: '',
      email: '',
      password: '',
    });
    navigation.navigate('Table');

  };

  return (
    <View style={{margin: 20}}>
      <Forminput
        holder="enter_name"
        value={inisial.name}
        type="default"
        Handlechange={text => Handlechange('name', text)}
      />
      <Forminput
        holder="email_id"
        value={inisial.email}
        type="email-address"
        Handlechange={text => Handlechange('email', text)}
      />
      {/* {accroding?<Text style={{color:"red"}} >This is not valid email formate</Text>:<Text style={{color:"green"}} >This is Valid!</Text>} */}
      <Forminput
        holder="password"
        value={inisial.password}
        Bool={true}
        type="decimal-pad"
        Handlechange={text => Handlechange('password', text)}
      />
      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};
export default Forms;

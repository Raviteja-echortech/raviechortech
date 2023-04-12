import {TextInput, View} from 'react-native';
import * as React from 'react';

const FormInput = props => {  
  const {holder, Bool,type,Handlechange} = props;

  return (
    <View>
      <TextInput
        placeholder={holder}
        secureTextEntry={Bool}
        style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
        keyboardType={type} 
        onChangeText={Handlechange} 
       {...props}
      />
    </View>
  );
};
export default FormInput;

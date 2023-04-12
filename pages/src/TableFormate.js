import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
const TableFormate = ({navigation}) => {
  const isFocused = useIsFocused();
  const [DATA, setmatter] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const storedata = await AsyncStorage.getItem('@storage_Key');
        //console.log(String(storedata))
        if (storedata !== null) {
          setmatter(JSON.parse(storedata));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  },[isFocused]);
  const Edit=(index,item)=>{
  console.log(index,item)
    navigation.navigate('Forms',{id:index,details:item})
  }
 const  HandleDelete=async(index)=>{
     let remaining=DATA.filter((_,id)=>id!==index)
     setmatter(remaining)
    await AsyncStorage.setItem('@storage_Key',JSON.stringify(remaining));
  }
  return (
    <View>
      <View style={styles.table_head}>
        <Text style={styles.table_head_row}>S. No</Text>
        <Text style={styles.table_head_row}>name</Text>
        <Text style={styles.table_head_row}>Email_Id</Text>
        <Text style={styles.table_head_row}>password</Text>
        <Text style={styles.table_head_row}>edit</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item,index}) => {
          return (
            <View key={index} style={styles.table_body}>
            <Text
              style={{
                width: '10%',
                padding: '3%',
                marginTop:"2%",
                fontWeight: 'bold',
                color:"black",
              }}>
              {index+1}
            </Text>
            <Text numberOfLines={1}  style={styles.table_body_row}>{item.name}</Text>
            <Text numberOfLines={1} style={styles.table_body_row}>
              {item.email}
            </Text>
            <Text numberOfLines={1} style={styles.table_body_row}>
              {item.password}
            </Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={()=>HandleDelete(index)} >
                <View style={styles.button_style}>
                  <Text style={{padding: 2, color: 'white', fontSize: 17}}>
                    Delete
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Edit(index,item)} >
                <View style={styles.edit}>
                  <Text style={{padding: 2, color: 'white', fontSize: 17}}>
                    Edit
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          )
        }
          
        }
         keyExtractor={(_,index)=>index}
      />
      
    </View>
  );
};
export default TableFormate;

const styles = StyleSheet.create({
  table_head: {
    flexDirection: 'row',
    backgroundColor: '#32CD32',
  },
  table_head_row: {
    margin: 13,
    color: 'white',
  },
  table_body: {
    flexDirection: 'row',
    padding: 2,
  },
  table_body_row: {
    width: '20%',
    padding: '5%',
    color: 'black',
    fontSize: 11,
  },
  button: {
    padding: '2%',
    width: '25%',
    marginLeft: '1%',
  },
  button_style: {
    paddingLeft: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit: {
    paddingRight: 8,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

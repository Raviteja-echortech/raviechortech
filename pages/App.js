/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './src/About';
import Cards from './src/Cards';
import Forms from './src/Forms';
import TableFormate from './src/TableFormate';


const Tab = createBottomTabNavigator();

function MyTabs({navigator}) {
  return (
    <Tab.Navigator
    // initialRouteName='Forms'
    screenOptions={{
      tabBarHideOnKeyboard: true,
  }}
    >
      <Tab.Screen name="Table" component={TableFormate} />
      <Tab.Screen name="Settings" component={About} />
      <Tab.Screen name="cards" component={Cards} />
      <Tab.Screen name="Forms" component={Forms} />
    </Tab.Navigator>
  );
}

 const App=()=>{
  return(
   
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
 }
 export default App
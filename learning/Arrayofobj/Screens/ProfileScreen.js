import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View,SafeAreaView,ScrollView,RefreshControl} from 'react-native';


const ProfileScreen=()=>{
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 10000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Pull down to see RefreshControl indicator</Text>
    </ScrollView>
    

  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // shadowProp: {
    //   shadowColor: '#171717',
    //   shadowOffset: {width: -2, height: 4},
    //   shadowOpacity: 0.2,
    //   shadowRadius: 3,
    // },
});
  
export default ProfileScreen
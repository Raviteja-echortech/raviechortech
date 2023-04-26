import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
  } from 'react-native';
  import { navbar } from './Array';
  import {milkpacket} from './Array';
  import Wallet from "../img/Wallet.svg";
  import {Hamberge} from './Hamberge';
  
  const Home= () => {
    return (
      <ScrollView>
        <Hamberge />
        <View style={styles.heading}>
            <Text
           
              style={{
                fontFamily: 'Bitter',
                fontStyle: 'normal',
                fontWeight: '700',
                color: '#2D2D2D',
                marginTop: '2%',
                marginLeft:"3%"
              }}>
              207, Abacus it Park, Uppal, Hyderbad{' '}
              <Image
                source={require('../img/downarrow.png')}
              />{' '}
            </Text>
          <View style={styles.cost}>
            <Text>
              {' '}
              <Wallet  size={30}/>{' '}
              <Text  numberOfLines={1} style={{fontWeight:"900"}} >₹ 333.00</Text>
            </Text>
          </View>
        </View>
        <View style={styles.arrange}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
              fontStyle: 'normal',
              fontFamily: 'Ubuntu',
              letterSpacing: 0.035,
              color: '#121926',
            }}>
            Shop by Category
          </Text>
          <Text
            style={{
              color: '#2FA52D',
              fontSize: 20,
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontWeight: '400',
              letterSpacing: 0.035,
            }}>
            See all
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={navbar}
          renderItem={({item, id}) => (
            <View key={id} style={styles.outlinemain}>
              <View style={styles.outline}>
                <Image
                  source={{uri: item.image}}
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{marginTop: 10}}>
                <Text style={styles.milk}>{item.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.card1}>
          <ImageBackground
            borderRadius={8}
            source={require('../img/milkbucket.png')}>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 30,
              }}>
              <View style={{marginTop: '5%', marginLeft: '3%', marginBottom:"5%"}}>
                <TouchableOpacity style={styles.btncolor2}>
                  <View style={styles.subscribe}>
                    <Text numberOfLines={1}
                      style={{
                        fontWeight: '500',
                        fontFamily: 'Bitter',
                        color: '#000000',
                        fontSize: 17,
                      }}>
                      Subscribe
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: '900',
                    fontFamily: 'Ubuntu',
                    fontSize: 15,
                    color: '#000000',
                  }}>
                  Fresh Milk Every Morning
                </Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#000000'}}>
                  Click on Get Started to get Milk every day{' '}
                </Text>
                <TouchableOpacity
                  style={styles.btncolor}
                  onPress={() => Alert.alert('windows application')}>
                  <View>
                    <Text style={styles.textstyle}>Get Started</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.boxcss}>
          <Text
            style={{
              fontWeight: '400',
              fontFamily: 'Ubuntu',
              fontStyle: 'normal',
              fontSize: 19,
              marginBottom: '8%',
              marginLeft:"4%",
              color: '#121926',
            }}>
            Quick Actions
          </Text>
          <View style={styles.dialogue1}>
            <View style={styles.dialogue2}>
              <Image
                source={{
                  uri: 'https://www.shutterstock.com/image-vector/external-link-icon-sign-symbol-260nw-1707807994.jpg',
                }}
                style={{width: 50, height: 40, marginTop:"15%"}}
              />
              <View style={{paddingLeft:"10%"}} >
                <Text
                  style={{marginLeft: '45%', fontWeight: '600', fontSize: 20,color:"#222222",paddingLeft:"7%"}}numberOfLines={1} >
                  EDIT
                </Text>
                <Text numberOfLines={1}
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color:"#222222"
                  }}>
                  Subscription
                </Text>
              </View>
            </View>
            <View style={styles.dialogue3}>
              <Image
                source={require('../img/pause.png')}
                style={{width: 30, height: 30}}
              />
              <View>
                <Text
                numberOfLines={1}
                  style={{
                    marginLeft: '40%',
                    fontWeight: '900',
                    fontSize: 15,
                    fontFamily: 'Ubuntu',
                    color: '#222222',
                  }}>
                  PAUSE
                </Text>
                <Text
                  style={{
                    marginLeft: '25%',
                    fontFamily: 'Open Sans',
                    fontWeight: '400',
                    color: '#222222',
                    fontWeight: '600',
                  }} numberOfLines={1}>
                  Deliveries
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontWeight: '400',
            marginTop: '10%',
            marginHorizontal: '4%',
            marginBottom:'4%',
            fontSize: 20,
            color: '#121926',
            fontFamily: 'Ubuntu',
            fontStyle: 'normal',
          }}>
          Popular Products{' '}
        </Text>
        <FlatList
          data={milkpacket}
          numColumns={2}
          renderItem={({item, id}) => (
            <View key={id} style={styles.box}>
              <View style={styles.inner}>
                <Image
                  source={{uri: item.photo}}
                  style={{width: 100, height: 100}}
                />
                <View style={styles.innerimage}>
                  <Image
                    source={require('../img/square1.png')}
                    style={{width: 20, height: 20}}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: '400',
                    color: '#000000',
                    fontFamily: 'Ubuntu',
                  }}>
                  {item.milk}
                </Text>
                <Text>{item.gms}</Text>
                <Text
                  style={{
                    fontSize: 14.04,
                    fontWeight: '400',
                    fontFamily: 'Open Sans',
                    color: '#000000',
                    lineHeight:40,
                  }}>
                  {item.cost}
                </Text>
              </View>
  
              <View>
                <Text style={styles.milk}>{item.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.footer}>
          <Text style={{fontSize: 36, color: '#CFCFD3', fontWeight: '500'}}>
            100%
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontFamily: 'Bitter',
              color: '#CFCFD3',
              fontWeight: '700',
              marginBottom: '3%',
            }}>
            Natural Products
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#AAAAAA',
              fontWeight: '500',
              fontFamily: 'Bitter',
            }}>
            Created with
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/1129532102/vector/3d-heart-icon.jpg?s=612x612&w=0&k=20&c=KcysN7gBltt-1IenAjLrbEuiknDW2SeJUI4oNN7P9cA=',
              }}
              style={{width: 20, height: 20}}
            />{' '}
            in Hyderbad,India
          </Text>
        </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    parentView: {
      flex: 1,
      height: 'auto',
      width: '100%',
      flexDirection: 'row',
      marginVertical: '20%',
      flexWrap: 'wrap',
    },
    dots:{
   position:"relative"
    },
    box: {
      width: '45%',
      height: 'auto',
      padding: 5,
      marginHorizontal:2,
      marginVertical: 2,
      borderRadius: 40,
      marginLeft: '5%',
     paddingBottom:"4%",
    },
    inner: {
      flex: 1,
      backgroundColor:"white",
      padding: 1,
      elevation: 0.8,
      marginLeft: '4%',
      paddingLeft: '4%',
      marginRight:"10%",
      borderRadius: 4,
      position: 'relative',
    },
    innerimage: {
      position: 'absolute',
      marginLeft: '85%',
      marginTop: '12%',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: '6%',
    },
  
    outline: {
      borderColor: 'gray',
      padding: 20,
      backgroundColor: '#FFFFFF',
      elevation: 1,
      borderWidth:0.5,
      borderColor:"#F3F4F7",
      borderRadius: 10,
      paddingRight:7,
      marginLeft:5,
      
    },
    maincontainer: {
      justifyContent: 'space-evenly',
    },
    arrange: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: '4%',
      marginRight: '4%',
    },
    outlinemain: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginTop: 30,
      marginBottom: '10%',
    },
    card: {
      padding: 30,
      width: '100%',
      borderRadius: 20,
      backgroundColor: '#E5F2D0',
      flexDirection: 'row',
    },
    heading: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '10%',
      marginLeft: '1%',
      marginRight: '1%',
  
    },
    cost: {
      borderWidth: 1,
      paddingBottom: 5,
      paddingLeft:3,
      paddingRight:4,
      marginRight:4,
      borderColor:"#000000",
      borderRadius: 5,
      color:"#2D2D2D",
    },
    card1: {
      marginTop: '5%',
      marginLeft: '5%',
      marginRight: '5%',
      borderWidth:0.1,
      elevation:20,  
    },
    milk: {
      fontSize: 18,
      color: '#000000',
    },
    textstyle: {
      color: '#FFFFFF',
      marginLeft: '10%',
      padding: '4%',
      fontSize:15,
      fontWeight:"700",
      fontFamily: 'Open Sans',
    },
    boxinner: {
      position: 'absolute',
      justifyContent: 'flex-start',
      marginLeft: '5%',
      marginTop: '3%',
    },
    btncolor: {
      backgroundColor: '#2FA52D',
      width: '50%',
      padding: 10,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 20,
    },
    btncolor2: {
      backgroundColor: 'white',
      width: '60%',
      padding: 0,
      borderRadius: 8,
      marginBottom: '10%',
    },
    subscribe: {
      backgroundColor: '#FFFFFF',
      borderWidth: 0.5,
      width: '50%',
      marginLeft:"20%",
      marginTop:"5%",
      borderColor: 'white',
      marginBottom: "6%",
      backgroundColor: 'white',
    },
    dialogue1: {
      display:'flex',
      flexDirection: 'row',
      padding:10,
      backgroundColor: '#F3F4F7',
      marginBottom: '10%',
      borderRadius: 10,
      marginRight: '4%',
      marginLeft:'3%'
    },
    dialogue2: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#FFFFFF',
     borderColor: '#FFFFFF',
      borderRadius: 10,
      width:"85%",
      paddingRight:"18%",
      justifyContent: 'space-between',
    },
    dialogue3: {
      flex: 1,
      flexDirection: 'row',
      padding: 22,
      backgroundColor: '#F3F4F7',
      borderColor: '#FFFFFF',
      marginLeft: '5%',
      borderWidth: 0.5,
      width: '69%',
      borderRadius: 10,
      justifyContent: 'space-between',
    },
    boxcss: {
      marginTop: '10%',
      marginLeft: '3%',
    },
    footer: {
      marginBottom: 10,
      marginLeft: '5%',
    },
  });
  export default Home;
  
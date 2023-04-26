import { View,Image,StyleSheet,Text} from "react-native"

export const Hamberge=()=>{
    return(
        < View style={styles.topspecification}  >
        <View style={styles.blocked} >
            <Image
             source={require("../img/Vector.png")}
             style={{width:20,height:20}}
            />
            <Text style={styles.textstyle} >PRAHDARA DIARY</Text>
            <Image
             source={require("../img/bell.png")}
             style={{width:20,height:25}}
            />
        </View>
        <View style={styles.separator} ></View>
        </View>
    )
}
const styles=StyleSheet.create({
      blocked:{
        flex:1,
        marginBottom:"5%",
        marginTop:"4%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginLeft:"4%",
      marginRight:"8%",
      },
      separator:{
        height:1,
        width:"100%",
        backgroundColor:"#ddd",
        marginBottom:"5%",
      },
      textstyle:{
         height:24,
         fontFamily:'Open Sans',
         fontStyle:"normal",
         fontWeight:"800",
         fontSize:18,
         color:"#384250",
      },
      topspecification:{
       marginTop:"8%"
      }
})


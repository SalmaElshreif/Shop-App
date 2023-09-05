import { View , Text , Image , StyleSheet} from "react-native";


export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.myTxt}>My Shop</Text>

            <Image style={styles.myImg} source={require('../../assets/logo.jpg')} />

        </View>
    )
}

const styles = StyleSheet.create({
container:{
    height:130 ,
    backgroundColor :'#25316D' ,
    flexDirection:'row' ,
    alignItems:'center' ,
    justifyContent:'center' ,
} ,

myImg:{
    width:75 ,
    height:75 ,
    borderRadius:40 ,
    marginLeft:20 ,
    marginTop:25
} ,

myTxt:{
    color:'white' ,
    fontSize:25 ,
    fontWeight:'bold' ,
    marginTop:20 ,
    textDecorationLine :"underline"
}
})






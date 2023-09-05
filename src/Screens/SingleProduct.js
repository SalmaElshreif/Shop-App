import {View , Image , Text , StyleSheet , TouchableOpacity , Alert} from "react-native"

export default function SingleProduct({route}){

    return(
        <View style={styles.container}>

            <Image style={styles.myImg} source={route.params.imgUrl} />

            <View style={styles.txtCon}>
                <Text style={styles.name}>Name : {route.params.name} </Text>

                <Text style={styles.price}>Price : {route.params.price} </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=> Alert.alert("Purchased Successfully 😀")}>

            <Text style={styles.btnTxt}> Buy </Text>

 </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    myImg:{
        width:300 ,
        height:400,
        marginBottom:50 ,
    } ,
    container:{
        alignItems:'center' ,
        justifyContent:'center' ,
    } ,

    txtCon:{
        backgroundColor:'#F9F9F9' ,
        alignSelf:'stretch' ,
        alignItems:'center' ,
        marginVertical: 30 ,
    } ,
    name:{
        fontSize:'30px' ,
        fontWeight:'bold' ,
        marginTop:20 ,
        color:'#25316D'
    } ,

    price :{
        fontSize:'30px' ,
        fontWeight:'bold' ,
        marginTop:20 ,
        marginBottom:20 ,
        color:'#25316D'
    } ,

    button:{
        backgroundColor:'#277BC0' ,
        padding:10 ,
        textAlign:'center' ,
        margin: 4 ,
        borderRadius : 10 ,
        alignSelf:'stretch' , 
        marginHorizontal:30,
        marginVertical:20 ,
        alignItems:'center'
      } , 
      btnTxt:{
        fontSize:20 ,
        fontWeight:'bold' , 
        color:'white',
     
      }


})
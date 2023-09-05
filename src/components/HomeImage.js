import { View , Text , Image , StyleSheet} from "react-native";


export default function HomeImage(){
    return(
        <View>


            <Image style={styles.myImg} source={require('../../assets/home1.jpg')} />

            <View style={styles.txtCon}>

            <Text style={styles.txt}>Products</Text>


            </View>

             </View>
    )
}

const styles = StyleSheet.create({

    txtCon:{
        marginVertical:10 ,
        marginHorizontal:20 ,
    } ,
    
    myImg:{
        height:300 ,
        width:'auto' ,
    } ,
    
    txt:{
        fontSize:40 ,
        fontWeight:'bold' ,
        textAlign:'center' , 
        color: '#25316D' ,
        textDecorationLine :"underline"
        } ,

})


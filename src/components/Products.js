import { useNavigation } from "@react-navigation/native";
import { View , Text , Image , StyleSheet, TouchableOpacity} from "react-native";


export default function Products({name , price , imgUrl}){

    const navigation = useNavigation()

    return(

        <TouchableOpacity onPress={()=> {
            navigation.navigate('SingleProduct' , {name , price , imgUrl})
        }}>

        <View style={styles.container}>

        <Image style={styles.myImg} source={imgUrl} />

        <View>

        <Text style={styles.myTxt}>{name}</Text>

        <Text style={styles.myTxt}>{price}</Text>

        </View>
        </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{
        height:100 ,
        marginTop:20 ,
        flexDirection:'row' ,
        alignItems:'center' ,
        backgroundColor : '#FFF4CF'
    },

    myImg:{
        width:75 ,
        height:75 ,
    } ,

    myTxt:{
        fontSize:25 ,
        fontWeight:"bold" ,
        marginLeft : 15 ,
        color : '#25316D' ,
    }
})

// backgroundColor : '#FFF4CF'

// backgroundColor : '#FFF7AE'

// backgroundColor : '#F6D167'

// backgroundColor : '#EED180'

// backgroundColor : '#FFE162'

// backgroundColor : '#FFC4C4'

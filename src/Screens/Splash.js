import{Image , View , StyleSheet} from "react-native"

export default function Splash({navigation}){

    setTimeout(()=>{
        navigation.navigate("Home")
    },5000)

    return(
        <View style={styles.myImg}>
            <Image source = {require('../../assets/splash1.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    myImg:{
        width:200 ,
        height:800
    }
})
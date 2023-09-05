import { View , ScrollView, FlatList } from "react-native";
import Header from "../components/Header"
import HomeImage from "../components/HomeImage"
import Products from "../components/Products"


export default function HomeScreen (){
      const myProducts = [

    {
      name : 'Apple Watch' ,
      price : '30000$' ,
      imgUrl : require('../../assets/watch.jpg')
    } ,

    {
      name : 'IPhone XS Max' ,
      price : '25000$' ,
      imgUrl : require('../../assets/iphonexsmax2.jpg')
    } ,

    {
      name : 'PlayStation 4' ,
      price : '50000$' ,
      imgUrl : require('../../assets/playstation4.jpg')
    } ,

    {
      name : 'Iphone 13 Pro Max' ,
      price : '20000$' ,
      imgUrl : require('../../assets/iphone13.jpg')
    } ,

    {
      name : 'Apple Watch' ,
      price : '30000$' ,
      imgUrl : require('../../assets/watch.jpg')
    } ,

    {
      name : 'IPhone XS Max' ,
      price : '25000$' ,
      imgUrl : require('../../assets/iphonexsmax.png')
    } ,

    {
      name : 'PlayStation 4' ,
      price : '50000$' ,
      imgUrl : require('../../assets/playstation4.jpg')
    } ,

    {
      name : 'Iphone 13 Pro Max' ,
      price : '20000$' ,
      imgUrl : require('../../assets/iphone13.jpg')
    } ,
  ]

  return(
    <FlatList data={myProducts} renderItem={({item})=>{
      return <Products name = {item.name}  price = {item.price} imgUrl = {item.imgUrl} />
    }} 

    ListHeaderComponent={()=>
      <View>
        <Header></Header>
        <HomeImage></HomeImage>
      </View>
    }

    // ListFooterComponent={()=>
    //   <View>
    //     <HomeImage></HomeImage>
    //   </View>
    // }

    />
      
  )

}

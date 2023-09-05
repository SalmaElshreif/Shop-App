import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import SingleProduct from "./src/Screens/SingleProduct";
import Splash from "./src/Screens/Splash";

export default function App(){

  const Stack = createNativeStackNavigator()

  return(

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Splash">

        <Stack.Screen name = "Home" component={HomeScreen} />

        <Stack.Screen name = "SingleProduct" component={SingleProduct} />


        {/* <Stack.Screen name = "SingleProduct" component={SingleProduct} options={{headerBackVisible:false}} /> */}

        <Stack.Screen name = "Splash" component={Splash} options={{headerShown:false}} />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

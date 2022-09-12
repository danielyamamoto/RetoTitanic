import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSwiper from './screens/HomeSwiper';
import HomeScreen from './screens/HomeScreen';
import Alg1Screen from "./screens/Alg1Screen";
import Alg2Screen from "./screens/Alg2Screen";
import SelectionScreen from "./screens/SelectionScreen";
import PredictionScreen from "./screens/PredictionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='HomeSwiper' component={HomeSwiper} 
            options={{ headerShown: false }}/>
          <Stack.Screen name='Home' component={HomeScreen} 
            options={{ headerShown: false }}/>
          <Stack.Screen name='Alg1' component={Alg1Screen} 
            options={{ headerShown: false }}/>
          <Stack.Screen name='Alg2' component={Alg2Screen} 
            options={{ headerShown: false }}/>  
          <Stack.Screen name='Selection' component={SelectionScreen} 
            options={{ headerShown: false }}/> 
          <Stack.Screen name='Prediction' component={PredictionScreen} 
            options={{ headerShown: false }}/>            
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

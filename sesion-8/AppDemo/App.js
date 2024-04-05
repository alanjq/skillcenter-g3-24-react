import { NavigationContainer } from '@react-navigation/native';
import CalculadoraScreen from './screens/CalculadoraScreen';
import SaludoScreen from './screens/SaludoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { APP_SCREENS } from './screens/AppScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Las pantallas de la aplicación */}
        <Stack.Screen name={APP_SCREENS.HOME} component={CalculadoraScreen} options={{ title: 'La calcu' }} />
        <Stack.Screen name={APP_SCREENS.SALUDO} component={SaludoScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

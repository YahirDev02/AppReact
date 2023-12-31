//Librerías -> Que su ejecución sea primordial ya que son recursos externos.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Documentos locales hasta el final.
import Login from './src/pages/login';
import Register from './src/pages/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

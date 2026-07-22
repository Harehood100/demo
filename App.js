import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './screens/SplashScreen'
import CreateProfileScreen from './screens/CreateProfileScreen'
import LoginScreen from './screens/LoginScreen'
import WelcomeBackScreen from './screens/WelcomeBackScreen'
import HomeScreen from './screens/HomeScreen'
import AddCaregiverScreen from './screens/AddCaregiverScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, animation: 'fade' }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddCaregiver" component={AddCaregiverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

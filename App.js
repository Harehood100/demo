import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupScreen from './screens/SignupScreen'
import SignupScreen2 from './screens/SignupScreen2'
import LoginScreen from './screens/LoginScreen'
import WelcomeBackScreen from './screens/WelcomeBackScreen'
import HomeScreen from './screens/HomeScreen'
import AddCaregiverScreen from './screens/AddCaregiverScreen'
import GenerateCodeScreen from './screens/GenerateCodeScreen'
import EnterAccessCodeScreen from './screens/EnterAccessCodeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signup2" component={SignupScreen2} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddCaregiver" component={AddCaregiverScreen} />
        <Stack.Screen name="GenerateCode" component={GenerateCodeScreen} />
        <Stack.Screen name="EnterAccessCode" component={EnterAccessCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

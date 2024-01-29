import { NavigationContainer as Container } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WellcomeScreen from "./components/wellome-screen";
import Signup from "./components/signup";
import Login from "./components/login";
const { Navigator, Screen} = createNativeStackNavigator();

const App = ()=>{
  return (
    <Container>
      <Navigator>
        <Screen 
          name="wellcome-screen" 
          component={WellcomeScreen} 
          options={{headerShown: false}} 
        />
        <Screen 
          name="sign-up" 
          component={Signup} 
          options={{title: "Create an account"}}
        />
        <Screen name="login" component={Login} />
      </Navigator>
    </Container>
  )
}

export default App;
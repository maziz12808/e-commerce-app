import { NavigationContainer as Container } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WellcomeScreen from "./components/wellome-screen";
import Signup from "./components/signup";
import Login from "./components/login";
import Forgot from "./components/forgot";
import Ott from "./components/ott";

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
        <Screen 
          name="login" 
          component={Login} 
          options={{title: "Login"}}
        />
        <Screen 
          name="forgot" 
          component={Forgot} 
          options={{title: "Forgot Password"}} 
        />
        <Screen 
          name="ott"
          component={Ott}
          options={{title: "verify"}}
        />
      </Navigator>
    </Container>
  )
}

export default App;
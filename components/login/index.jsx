import { 
     Text, 
     TextInput, 
     View,
     TouchableOpacity
} from "react-native";
import Social from "../reusable/social";

const Login = ({navigation})=>{
     const fields = [
          {
               label: "Email",
               inputProps : {
                    name: "email",
                    placeholder: "example@gmail.com"
               }
          },
          {
               label: "Password",
               inputProps : {
                    name: "password",
                    placeholder: "*********"
               }
          }
     ]
     return (
          <View style={{flex:1,backgroundColor: "white",padding:20}}>
               <View>
                    {
                         fields.map((fieldItem,fieldIndex)=>(
                              <View key={fieldIndex} style={{marginBottom:8}}>
                                   <Text style={{fontSize:18,marginBottom:8}}>{fieldItem.label}</Text>
                                   <TextInput {...fieldItem.inputProps} style={{
                                        borderWidth:1,
                                        borderColor: "#ccc",
                                        paddingHorizontal: 10,
                                        paddingVertical: 10
                                   }} />
                              </View>
                         ))
                    }
                    <TouchableOpacity onPress={()=> navigation.navigate("ott")} style={{backgroundColor: "#752FFF",paddingVertical: 12,marginVertical:12}}>
                         <Text style={{textAlign: "center",color: "white",fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{alignItems:"flex-end", marginBottom:20}}>
                         <TouchableOpacity onPress={()=> navigation.navigate("forgot")}>
                              <Text>Forgot Password</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={{alignItems: "center"}}>
                         <Text style={{marginBottom: 16}}>Or</Text>
                         <Social />
                    </View>
               </View>
          </View>
     )
}

export default Login;
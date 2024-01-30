import { 
     Text, 
     TextInput, 
     View,
     TouchableOpacity
} from "react-native";

const Forgot = ()=>{
     
     return (
          <View style={{flex:1,backgroundColor: "white",padding:20}}>
               <View>
                    <View  style={{marginBottom:8}}>
                         <Text style={{fontSize:18,marginBottom:8}}>Enter Email Address To Forgot</Text>
                         <TextInput name="email" placeholder="example@gmail.com"  style={{
                              borderWidth:1,
                              borderColor: "#ccc",
                              paddingHorizontal: 10,
                              paddingVertical: 10
                         }} />
                    </View>
               
                    <TouchableOpacity style={{backgroundColor: "#752FFF",paddingVertical: 12,marginVertical:12}}>
                         <Text style={{textAlign: "center",color: "white",fontSize:18}}>Reset password</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default Forgot;
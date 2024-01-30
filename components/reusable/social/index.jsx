import { View,TouchableOpacity,Image } from "react-native";

const Social = ()=>{
     return (
          <View style={{flexDirection: "row", justifyContent:"center",}}>
               <TouchableOpacity style={{marginRight:12}}>
                    <Image source={require("../../../assets/icons/twitter.png")} style={{
                         width: 40,
                         height:40
                    }} />
               </TouchableOpacity>
               <TouchableOpacity style={{marginRight:12}}>
                    <Image source={require("../../../assets/icons/facebook.png")} style={{
                         width: 37,
                         height:37
                    }} />
               </TouchableOpacity>
               <TouchableOpacity style={{marginRight:12}}>
                    <Image source={require("../../../assets/icons/g.png")} style={{
                         width: 40,
                         height:40
                    }} />
               </TouchableOpacity>
          </View>
     )
}

export default Social;
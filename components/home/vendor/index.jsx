import { Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { danger, error, info, primary, secondary, warning } from "../../reusable/colors";

const menus = [
     {
          image: require("../../../assets/brands/brand1.png")
     },
     {
          image: require("../../../assets/brands/brand2.png")
     },
     {
          image: require("../../../assets/brands/brand3.png")
     },
     {
          image: require("../../../assets/brands/brand4.png")
     },
     {
          image: require("../../../assets/brands/brand4.png")
     },
     {
          image: require("../../../assets/brands/brand5.png")
     }
]

const Vendor = ({style})=>{
     return (
          <View {...style}>
               <Text style={{fontSize:18,color: "#424242",marginBottom: 8}}>Popular vendor</Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: "row"}}>
                         {
                              menus.map((menuItem,menuIndex)=>(
                                   <View key={menuIndex}>
                                        <View style={{
                                             width : 200,
                                             height : 80,
                                             borderRadius: 4,
                                             marginRight: 8,
                                             borderWidth: 1,
                                             borderColor: "#f5f5f5",
                                             padding: 12,
                                             borderRadius: 4
                                        }}>
                                             <Image source={menuItem.image} style={{width: "100%",height: "100%"}} />
                                        </View>
                                   </View>
                              ))
                         }
                    </View>
               </ScrollView>
          </View>
     )
}

export default Vendor;
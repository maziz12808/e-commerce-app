import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { danger, error, info, primary, secondary, warning } from "../../reusable/colors";

const categories = [
     {
          label: "Fashion",
          image: require("../../../assets/icons/fashion.png"),
          backgroundColor: warning
     },
     {
          label: "Women",
          image: require("../../../assets/icons/women.png"),
          backgroundColor: danger
     },
     {
          label: "Device",
          image: require("../../../assets/icons/device.png"),
          backgroundColor: secondary
     },
     {
          label: "Kids",
          image: require("../../../assets/icons/kids.png"),
          backgroundColor: info
     },
     {
          label: "Fashion",
          image: require("../../../assets/icons/fashion.png"),
          backgroundColor: warning
     },
     {
          label: "Electronic",
          image: require("../../../assets/icons/fashion.png"),
          backgroundColor: error
     }
]

const Categories = ({style})=>{
     return (
          <View {...style}>
               <Text style={{fontSize:18,color: "#424242",marginBottom: 8}}>Categories</Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: "row"}}>
                         {
                              categories.map((categoryItem,categoryIndex)=>(
                                   <TouchableOpacity key={categoryIndex}>
                                        <View>
                                             <View style={{
                                                  backgroundColor : categoryItem.backgroundColor,
                                                  width : 60,
                                                  height : 60,
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  borderRadius: 4,
                                                  marginRight: 8
                                             }}>
                                                  <Image source={categoryItem.image} style={{width:48,height:48}} />
                                             </View>
                                             <Text style={{fontSize:14,color: "#424242"}}>{categoryItem.label}</Text>
                                        </View>
                                   </TouchableOpacity>
                              ))
                         }
                    </View>
               </ScrollView>
          </View>
     )
}

export default Categories;
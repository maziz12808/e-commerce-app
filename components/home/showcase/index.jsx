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

const Showcase = ({style})=>{
     return (
          <View {...style}>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: "row"}}>
                         {
                              categories.map((categoryItem,categoryIndex)=>(
                                   <View key={categoryIndex}>
                                        <View style={{
                                             backgroundColor : categoryItem.backgroundColor,
                                             width : 250,
                                             height : 150,
                                             justifyContent: "center",
                                             alignItems: "flex-start",
                                             borderRadius: 4,
                                             marginRight: 8,
                                             paddingHorizontal: 10
                                        }}>
                                             <Text style={{fontSize: 18,fontWeight: "bold",marginBottom: 6}}>For all summer clothing needs.</Text>
                                             <TouchableOpacity>
                                                  <View style={{backgroundColor: "white", paddingHorizontal: 8,paddingVertical: 6,borderRadius: 4}}>
                                                       <Text>Buy now</Text>
                                                  </View>
                                             </TouchableOpacity>
                                        </View>
                                   </View>
                              ))
                         }
                    </View>
               </ScrollView>
          </View>
     )
}

export default Showcase;
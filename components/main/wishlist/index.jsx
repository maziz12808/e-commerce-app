import { Text, TouchableOpacity, View } from "react-native";
import Header from "../../reusable/header";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const Wishlist = ()=>{
     const [wishlist,setWishlist] = useState([
          {
               thimbnail: "image_url",
               title: "Low Blush Bean",
               subtitle: "Country to popular belief",
               price: "$98",
               date: "Feb 18 at 7:00 PM"
          },
          {
               thimbnail: "image_url",
               title: "Low Blush Bean",
               subtitle: "Country to popular belief",
               price: "$98",
               date: "Feb 18 at 7:00 PM"
          },
          {
               thimbnail: "image_url",
               title: "Low Blush Bean",
               subtitle: "Country to popular belief",
               price: "$98",
               date: "Feb 18 at 7:00 PM"
          },
          {
               thimbnail: "image_url",
               title: "Low Blush Bean",
               subtitle: "Country to popular belief",
               price: "$98",
               date: "Feb 18 at 7:00 PM"
          },
     ])

     const deleteWishlist = (index)=> {
          const tmp = [...wishlist];
          tmp.splice(index,1);
          setWishlist(tmp);
     }

     return (
          <Header title="Wishlist">
               <View className="px-6 gap-y-3">
                    {
                         wishlist.map((item,index)=>(
                              <View className="bg-white flex-row p-3 rounded-lg" key={index}>
                                   <View className="w-16 h-24 bg-gray-400 p-4 mr-3" />
                                   <View className="flex-grow">
                                        <Text className="text-base">{item.title}</Text>
                                        <Text className="text-sm text-gray-500">{item.subtitle}</Text>
                                        <Text className=" font-semibold text-base mt-1">{item.price}</Text>
                                        <View className="flex-row justify-between">
                                             <Text className="text-sm text-gray-500">{item.date}</Text>
                                             <TouchableOpacity onPress={()=> deleteWishlist(index)}>
                                                  <Icon name="trash-outline" size={18} color="#424242" />
                                             </TouchableOpacity>
                                        </View>
                                   </View>
                              </View>
                         ))
                    }
               </View>
          </Header>
     )
}


export default Wishlist;
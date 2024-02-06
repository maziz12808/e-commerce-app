import { useState } from "react";
import { TextInput, TouchableOpacity, View,Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Search = ()=> {
     const [recentSearches, setRecentSearches] = useState([
          "kids fishion",
          "kids fishion",
          "kids fishion",
          "kids fishion",
          "kids fishion",
          "kids fishion"
     ])

     const [inputSearches, setInputSearches] = useState([
          "kids fishion 1",
          "kids fishion",
          "kids fishion",
          "kids fishion",
          "kids fishion",
          "kids fishion"
     ])

     const deleteSearch = (index)=> {
          const tmp = [...recentSearches];
          tmp.splice(index,1);
          setRecentSearches(tmp)
     }

     const deleteInputSearch = (index)=> {
          const tmp = [...inputSearches];
          tmp.splice(index,1);
          setInputSearches(tmp)
     }

     return (
          <View className="p-6 gap-y-6">
               <View className="flex-row">
                    <TextInput name="search" className="border border-r-0 border-gray-400 flex-grow px-3 bg-white py-1" />
                    <TouchableOpacity className="border border-l-0 border-gray-400 px-1 pt-2 bg-white">
                         <Icon name="search" size={18} />
                    </TouchableOpacity>
               </View>
               
               <View>
                    <View className=" gap-y-1">
                         {
                              inputSearches.map((item,index)=>(
                                   <TouchableOpacity key={index} className="flex-row items-center justify-between py-0.5" onPress={()=> deleteInputSearch(index)}>
                                       
                                        <Text>{item}</Text>
                                        <Text className=" text-gray-500 text-xs">Remove</Text>
                                        
                                   </TouchableOpacity>
                              ))
                         }
                    </View>
               </View>

               <View>
                    <Text className=" text-base font-semibold">Recent Searches</Text>
                    <View className=" flex-row flex-wrap gap-3 mt-3">
                         {
                              recentSearches.map((item,index)=>(
                                   <TouchableOpacity key={index} className="bg-white py-0.5 px-2 rounded" onPress={()=> deleteSearch(index)}>
                                        <View className=" flex-row items-center">
                                             <Text>{item}</Text>
                                             <Icon name="close-outline" />
                                        </View>
                                   </TouchableOpacity>
                              ))
                         }
                    </View>
               </View>
          </View>
     )
}

export default Search;
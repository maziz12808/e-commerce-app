import { useState } from "react";
import { Text,View,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../reusable/header";

const productCategories = ["All","Men's","Kids","Women's"];


const Toolbar = ()=> {
     const [menuIndex,setMenuIndex] = useState(0);
     return (
          <View className="flex-row items-start justify-between">
               <View className="flex-row gap-2 flex-wrap" style={{width: 200}}>
                    {
                         productCategories.map((item,index)=>(
                              <TouchableOpacity 
                                   onPress={()=> setMenuIndex(index)}
                                   className={`px-4 py-2 rounded-full ${menuIndex === index ? "bg-purple-500" : "bg-white "}`} 
                                   key={index}
                              >
                                   <Text className={`${index == menuIndex ? "text-white" : "text-inherit"}`}>{item}</Text>
                              </TouchableOpacity>
                         ))
                    }
                    
               </View>
               <View className="flex-row gap-x-2">
                    <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                         <Icon name="search" size={20} color="purple" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                         <Icon name="filter" size={20} color="purple" />
                    </TouchableOpacity>
               </View>
          </View>
     )
}

const Products = ()=>{
     
     return (
          <Header toolbar={<Toolbar />} title="Products">
               <View className="flex-1 bg-gray-100 pb-5">
                    
                    <View className="px-6 flex-row flex-wrap gap-2 mt-1">
                    {
                         Array(12).fill(0).map((item,index)=>(
                              <TouchableOpacity className="bg-white p-2 flex-grow rounded-lg" key={index}>
                                   <View className="items-end mb-1">
                                        <TouchableOpacity>
                                             <Icon name="ellipsis-horizontal" />
                                        </TouchableOpacity>
                                   </View>
                                   <View>
                                        <View className=" bg-gray-400" style={{width:"100%",height:50}} />
                                   </View>
                                   <Text>Men's cap</Text>
                                   <View className=" flex-row justify-between items-center gap-x-1 mt-1">
                                        <Text>$23</Text>
                                        <View className=" flex-row items-center gap-x-1">
                                             <Icon name="star" color="#f78a05" />
                                             <Text>5.0</Text>
                                             <Icon name="heart-outline" color="#807e7d" />
                                        </View>
                                   </View>
                              </TouchableOpacity>
                         ))
                    }
                    </View>
               </View>
          </Header>
     )
}

export default Products;
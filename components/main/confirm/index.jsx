import { useState } from "react";
import { TextInput, TouchableOpacity, View,Image } from "react-native";
import { Text,ScrollView,Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Confirm = ()=>{
     const [save,setSave] = useState(false);
     return (
          <ScrollView>
               <View className="flex-1 bg-gray-100">
                    <View className="px-6 pt-4 gap-y-5 pb-3">
                         <View className="flex-row items-center gap-x-6">
                              <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                                   <Icon name="chevron-back-outline" size={24} color="purple" />
                              </TouchableOpacity>
                              <Text className="text-xl font-semibold">Confirm</Text>
                         </View>
                         <View className="gap-y-4">
                              <View className="flex-row items-center">
                                   <View className="h-2 w-2 bg-purple-500 rounded" />
                                   <View className="h-0.5 w-2 bg-purple-300 flex-grow " />
                                   <View className="h-2 w-2 bg-purple-500 rounded" />
                                   <View className="h-0.5 w-2 bg-purple-300 flex-grow " />
                                   <View className="h-2 w-2 bg-purple-500 rounded" />
                                   <View className="h-0.5 w-2 bg-purple-500 flex-grow " />
                                   <View className="h-2 w-2 bg-purple-500 rounded" />
                              </View>
                              <View className="flex-row items-center">
                                   <Text className="text-xs">Address</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">Delivery</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">Payment</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">confirm</Text>
                              </View>
                         </View>
                    </View>
                    <View className="flex-1 bg-white rounded-t-2xl p-6 justify-between">
                         <View className="gap-y-4">
                              <View  className=" gap-y-2">
                              <Text className="text-lg">In your cart</Text>
                                   {
                                        Array(3).fill(0).map((item,index)=>(
                                             <View className="flex-row border border-gray-100 gap-x-4">
                                                  <Image
                                                       source={require("../../../assets/products/p1.jpg")}
                                                       style={{width:96,height:96}}
                                                       resizeMode="contain"
                                                  />
                                                  <View>
                                                       <Text className="font-semibold">Product title</Text>
                                                       <Text className="text-slate-800">brand</Text>
                                                       <Text className="text-slate-800">color</Text>
                                                       <Text className="text-slate-800">$343</Text>
                                                  </View>
                                             </View>
                                        ))
                                   }
                              </View>
                              <View  className=" gap-y-2">
                                   <Text className="text-lg">Delivery</Text>
                                   <View className="border border-gray-100 p-4">
                                        <Text>Expires $8.45</Text>
                                        <Text>Next day delivery</Text>
                                   </View>
                              </View>
                              <View  className=" gap-y-2">
                                   <Text className="text-lg">Payment</Text>
                                   <View className=" flex-row justify-between items-center border border-gray-100">
                                        <Text className="text-lg">**** **** **** 7878</Text>
                                        <Image source={(require("../../../assets/card/visa.png"))} style={{width:96,height:96}} />
                                   </View>
                              </View>
                              <View>
                                   <Text>Save credit card information</Text>    
                                   <TouchableOpacity className="bg-purple-500 py-3 rounded w-full">
                                        <Text className="text-center text-white text-lg">Next</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               </View>
          </ScrollView>
     )
}

export default Confirm;
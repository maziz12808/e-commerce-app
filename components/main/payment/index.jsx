import { useState } from "react";
import { TextInput, TouchableOpacity, View,Image } from "react-native";
import { Text,ScrollView,Switch } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const cardImages = [
     require("../../../assets/card/master-card.png"),
     require("../../../assets/card/paypal.png"),
     require("../../../assets/card/visa.png"),
     require("../../../assets/card/visa.png"),
     require("../../../assets/card/visa.png")
]

const Payment = ()=>{
     const [save,setSave] = useState(false);
     return (
          <View className="flex-1 bg-gray-100">
               <View className="px-6 pt-4 gap-y-5 pb-3">
                    <View className="flex-row items-center gap-x-6">
                         <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                              <Icon name="chevron-back-outline" size={24} color="purple" />
                         </TouchableOpacity>
                         <Text className="text-xl font-semibold">Payment</Text>
                    </View>
                    <View className="gap-y-4">
                         <View className="flex-row items-center">
                              <View className="h-2 w-2 bg-purple-500 rounded" />
                              <View className="h-0.5 w-2 bg-purple-300 flex-grow " />
                              <View className="h-2 w-2 bg-purple-500 rounded" />
                              <View className="h-0.5 w-2 bg-purple-300 flex-grow " />
                              <View className="h-2 w-2 bg-purple-500 rounded" />
                              <View className="h-0.5 w-2 bg-purple-500 flex-grow " />
                              <View className="h-2 w-2 bg-gray-300 rounded" />
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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={{height: 96}}>
                         <View className="flex-row gap-x-4">
                              {
                                   cardImages.map((cardImage,cardIndex)=>(
                                        <TouchableOpacity key={cardIndex}>
                                             <Image source={cardImage} style={{width: 96,height: 96}} />
                                        </TouchableOpacity>
                                   ))
                              }
                         </View>
                    </ScrollView>
                    <View className="gap-y-3">
                         <View>
                              <Text className="text-sm font-semibold">Card Number</Text>
                              <TextInput inputMode="numeric" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                              <View>
                                   <Text className="text-sm font-semibold">Card Holder Name</Text>
                                   <TextInput inputMode="text" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                              <View className="flex-row gap-x-5">
                                   <View className="flex-grow">
                                        <Text className="text-sm font-semibold">Expiry Date</Text>
                                        <TextInput inputMode="text" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                                   </View>
                                   <View className="flex-grow">
                                        <Text className="text-sm font-semibold">CVV</Text>
                                        <TextInput inputMode="numeric" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                                   </View>
                              </View>
                    </View>
                   <View>
                         <View className="flex-row justify-between items-center">
                              <Text>Save credit card information</Text>
                              <Switch
                                   trackColor={{false: '#767577', true: '#81b0ff'}}
                                   thumbColor={save ? '#f5dd4b' : '#f4f3f4'}
                                   onValueChange={()=> setSave(!save)}
                                   value={save}
                              />
                         </View>
                         <TouchableOpacity className="bg-purple-500 py-3 rounded w-full mt-3">
                              <Text className="text-center text-white text-lg">Next</Text>
                         </TouchableOpacity>
                   </View>
               </View>
          </View>
     )
}

export default Payment;
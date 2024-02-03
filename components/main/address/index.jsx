import { TextInput, TouchableOpacity, View } from "react-native";
import { Text,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Address = ()=>{
   
     return (
          <ScrollView>
               <View className="flex-1 bg-gray-100">
                    <View className="px-6 pt-4 gap-y-8 pb-6">
                         <View className="flex-row items-center gap-x-6">
                              <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                                   <Icon name="chevron-back-outline" size={24} color="purple" />
                              </TouchableOpacity>
                              <Text className="text-xl font-semibold">Address</Text>
                         </View>
                         <View className="gap-y-4">
                              <View className="flex-row items-center">
                                   <View className="h-2 w-2 bg-purple-500 rounded" />
                                   <View className="h-0.5 w-2 bg-purple-500 flex-grow " />
                                   <View className="h-2 w-2 bg-gray-300 rounded" />
                                   <View className="h-0.5 w-2 bg-gray-200 flex-grow " />
                                   <View className="h-2 w-2 bg-gray-300 rounded" />
                                   <View className="h-0.5 w-2 bg-gray-200 flex-grow " />
                                   <View className="h-2 w-2 bg-gray-300 rounded" />
                              </View>
                              <View className="flex-row items-center">
                                   <Text className="text-xs">Address</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">Address</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">Address</Text>
                                   <View className="h-0.5 flex-grow " />
                                   <Text className="text-xs">Address</Text>
                              </View>
                         </View>
                    </View>
                    <View className="flex-1 bg-white rounded-t-2xl p-6 justify-between">
                         <View className="gap-y-8 pb-5">
                              <View>
                                   <Text className="text-sm font-semibold">Name</Text>
                                   <TextInput inputMode="text" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                              <View>
                                   <Text className="text-sm font-semibold">Email</Text>
                                   <TextInput inputMode="email" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                              <View className="flex-row gap-x-5">
                                   <View className="flex-grow">
                                        <Text className="text-sm font-semibold">City</Text>
                                        <TextInput inputMode="text" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                                   </View>
                                   <View className="flex-grow">
                                        <Text className="text-sm font-semibold">Pincode</Text>
                                        <TextInput inputMode="numeric" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                                   </View>
                              </View>
                              <View>
                                   <Text className="text-sm font-semibold">State</Text>
                                   <TextInput inputMode="text" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                              <View>
                                   <Text className="text-sm font-semibold">Mobile</Text>
                                   <TextInput inputMode="tel" name="name" className="border-b border-gray-300 text-lg text-gray-600 no-underline" />
                              </View>
                         </View>
                         <TouchableOpacity className="bg-purple-500 py-3 rounded">
                              <Text className="text-center text-white text-lg">Next</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </ScrollView>
     )
}

export default Address;
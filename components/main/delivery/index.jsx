import { TextInput, TouchableOpacity, View } from "react-native";
import { Text,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Address = ()=>{
   
     return (
          <View className="flex-1 bg-gray-100">
               <View className="px-6 pt-4 gap-y-5 pb-3">
                    <View className="flex-row items-center gap-x-6">
                         <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                              <Icon name="chevron-back-outline" size={24} color="purple" />
                         </TouchableOpacity>
                         <Text className="text-xl font-semibold">Address</Text>
                    </View>
                    <View className="gap-y-4">
                         <View className="flex-row items-center">
                              <View className="h-2 w-2 bg-purple-500 rounded" />
                              <View className="h-0.5 w-2 bg-purple-300 flex-grow " />
                              <View className="h-2 w-2 bg-purple-500 rounded" />
                              <View className="h-0.5 w-2 bg-purple-500 flex-grow " />
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
               <View className="flex-1 bg-purple-50 rounded-t-2xl p-6 justify-between">
                    <View className="gap-y-3">
                         <View className="bg-white p-4 gap-y-0.5 rounded-lg shadow-lg shadow-indigo-500/50">
                              <Text>Free Delivery -$0.00</Text>
                              <Text>2-5 Days Delivery</Text>
                         </View>
                         <View className="bg-purple-500 gap-y-0.5 p-5 rounded-lg shadow-lg shadow-indigo-500/50">
                              <Text className="text-white">Free Delivery -$0.00</Text>
                              <Text className="text-white">2-5 Days Delivery</Text>
                         </View>
                         <View className="bg-white gap-y-0.5 p-5 rounded-lg shadow-lg shadow-indigo-500/50">
                              <Text>Free Delivery -$0.00</Text>
                              <Text>2-5 Days Delivery</Text>
                         </View>
                    </View>
                   <View className="items-center">
                    <Text className="w-3/5 text-center">Free Shiping over 49+ free return and exchange</Text>
                    <TouchableOpacity className="bg-purple-500 py-3 rounded w-full mt-3">
                              <Text className="text-center text-white text-lg">Next</Text>
                         </TouchableOpacity>
                   </View>
               </View>
          </View>
     )
}

export default Address;
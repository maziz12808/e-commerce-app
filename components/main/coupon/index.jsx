import {Text, View} from "react-native";
import Header from "../../reusable/header";
const Coupons = ()=> {
     return (
          <Header title="Coupons">
               <View className="px-6 gap-y-4">
                    <View className=" bg-red-400 h-40 flex-row overflow-hidden rounded-2xl items-center justify-between">
                         <View className="w-8 h-8 rounded-full bg-white -ml-3" />
                         <View className="flex-grow px-4">
                              <View className="border-b border-dashed border-white items-center">
                                   <Text className=" font-bold text-white text-5xl">10%</Text>
                              </View>
                              <Text className="text-center text-white">Applies to first purchase</Text>
                              <Text className="text-center text-white">Applies to first</Text>
                         </View>
                         <View className="w-8 h-8 bg-white rounded-full -mr-3" />
                    </View>

                    <View className=" bg-orange-400 h-40 flex-row overflow-hidden rounded-2xl items-center justify-between">
                         <View className="w-8 h-8 rounded-full bg-white -ml-3" />
                         <View className="flex-grow px-4">
                              <View className="border-b border-dashed border-white items-center">
                                   <Text className=" font-bold text-white text-5xl">10%</Text>
                              </View>
                              <Text className="text-center text-white">Applies to first purchase</Text>
                              <Text className="text-center text-white">Applies to first</Text>
                         </View>
                         <View className="w-8 h-8 bg-white rounded-full -mr-3" />
                    </View>

                    <View className=" bg-purple-400 h-40 flex-row overflow-hidden rounded-2xl items-center justify-between">
                         <View className="w-8 h-8 rounded-full bg-white -ml-3" />
                         <View className="flex-grow px-4">
                              <View className="border-b border-dashed border-white items-center">
                                   <Text className=" font-bold text-white text-5xl">10%</Text>
                              </View>
                              <Text className="text-center text-white">Applies to first purchase</Text>
                              <Text className="text-center text-white">Applies to first</Text>
                         </View>
                         <View className="w-8 h-8 bg-white rounded-full -mr-3" />
                    </View>
               </View>  
          </Header>
     )
}

export default Coupons;
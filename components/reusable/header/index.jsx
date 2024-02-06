import { TouchableOpacity, View } from "react-native";
import { Text,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Header = ({children,toolbar,title="Title"})=>{
     return (
          <ScrollView>
               <View className="flex-1 bg-gray-100">
                    <View className="px-6 pt-4 gap-y-5 pb-3">
                         <View className="flex-row items-center gap-x-6">
                              <TouchableOpacity className="bg-white rounded p-2 border border-slate-200">
                                   <Icon name="chevron-back-outline" size={24} color="purple" />
                              </TouchableOpacity>
                              <Text className="text-xl font-semibold">{title}</Text>
                         </View>
                         <View>
                              {toolbar && toolbar}
                         </View>
                    </View>
                    {children}
               </View>
          </ScrollView>
     )
}

export default Header;
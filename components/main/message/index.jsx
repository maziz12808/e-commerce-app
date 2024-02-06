import { TouchableOpacity,View,Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Message = ()=>{
     return (
          <View className="flex-1 bg-white justify-center items-center px-10">
              <View className="bg-violet-700 rounded-3xl items-center pb-8 px-4 gap-y-5">
                    <Icon name="checkmark-circle" color="#FFBE00" size={96} />
                    <Text className="text-white text-center">
                         You have successfully placed in order.
                         We will call to verity the order , Do more
                         then pay attention to the phone. 
                    </Text>
                    <TouchableOpacity className=" bg-amber-400 px-10 py-3 rounded-lg">
                         <Text>Back To Home</Text>
                    </TouchableOpacity>
               </View> 
          </View>
     )
}

export default Message;
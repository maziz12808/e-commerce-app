import {View,Text, TextInput, TouchableOpacity} from "react-native"
import Header from "../../reusable/header";
import Icon  from "react-native-vector-icons/Ionicons";

const conversations = [
     {
          user: true,
          message: "hi How are you freind ?"
     },
     {
          user: false,
          message: "I am fine"
     },
     {
          user: true,
          message: "I am fine"
     },
     {
          user: true,
          message: "I am fine"
     },
     {
          user: true,
          message: "I am fine"
     },
     {
          user: true,
          message: "I am fine"
     },
     {
          user: false,
          message: "I am fine"
     },
     {
          user: false,
          message: "I am fine"
     },
] 

const Supports = ()=> {
     return (
          <Header title="Supports">
               <View className="px-6 pb-4">
                    <View className=" items-center pb-2 gap-y-14">
                         <View>
                              {
                                   Array(3).fill(0).map((item,index)=>(
                                        <View key={index} className={`w-[50px] h-[50px] border border-white rounded-full bg-gray-400 absolute z-${(10*index)} -left-${index * 5}`} />
                                   ))
                              }
                         </View>
                         <Text className=" text-lg">Our Sopports Teams</Text>
                    </View>
                    <View>
                         {
                              conversations.map((item,index)=>(
                                   <View key={index}>
                                        {
                                             !item.user && 
                                             <View>
                                                  <View className=" w-8 h-8 bg-gray-400 rounded-full" />
                                                  <View className="items-center w-3/5 py-5 bg-purple-200 ml-8 mt-2 rounded-bl-xl rounded-r-xl">
                                                       <Text>hi How are you freind ?</Text>
                                                  </View>
                                             </View>
                                        }
                                        {
                                             item.user && <View className="self-end items-center h-16 w-3/5 py-5 bg-violet-400 ml-8 mt-2 rounded-br-xl rounded-l-xl">
                                                  <Text>hi How are you freind ?</Text>
                                             </View>
                                        }
                                   </View>
                              ))
                         }
                         
                         
                    </View>
                    <View className="py-4 gap-y-3">
                         <View className="flex-row gap-x-3 items-center">
                              <Icon name="happy-outline" size={24} color="#424242" />
                              <Icon name="camera-outline" size={24} color="#424242" />
                              <Icon name="image-outline" size={24} color="#424242" />
                         </View>
                         <View className="flex-row items-center gap-x-3">
                              <TextInput 
                                   className="border flex-grow border-gray-400 py-1 text-lg bg-white rounded" 
                                   multiline
                                   numberOfLines={2}
                                   
                              />
                              <TouchableOpacity>
                                   <Icon name="send-outline" size={24} color="#424242" />
                              </TouchableOpacity>
                         </View>
                    </View>
               </View>
          </Header>
     )
}

export default Supports;
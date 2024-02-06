import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../reusable/header";
const Profile = ()=> {
     return (
          <Header title="Profile">
               <View className="px-6 pb-4">
                    <View className=" w-28 h-28 bg-gray-500 rounded-full self-center z-30 relative top-6" />
                    <View className="bg-white gap-y-7 py-4 rounded-md px-3">
                         <View>
                              <Text>Name</Text>
                              <TextInput name="name" className="border-b border-slate-400" placeholder="Your Name" />
                         </View>
                         <View>
                              <Text>Email</Text>
                              <TextInput name="email" className="border-b border-slate-400" placeholder="example@gmail.com" />
                         </View>
                         <View>
                              <Text>Address</Text>
                              <TextInput name="address" multiline className="border-b border-slate-400" />
                         </View>
                         <View>
                              <Text>Mobile</Text>
                              <TextInput name="mobile" keyboardType="numeric" className="border-b border-slate-400" />
                         </View>
                         <TouchableOpacity className=" bg-violet-200 py-3.5 rounded">
                              <Text className=" text-center text-lg text-slate-700">Update Profile</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </Header>
     )
}

export default Profile;
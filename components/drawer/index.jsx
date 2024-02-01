import { createDrawerNavigator } from "@react-navigation/drawer";
import Tab from "../tab";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = ()=>{
     const screenOptions = {
          headerRight: ()=>(
               <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                         <View style={{marginRight: 12}}>
                              <Icon name="notifications-outline" size={24} />
                         </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{marginRight: 16}}>
                         <Icon name="filter-outline" size={24} />
                    </View>
                    </TouchableOpacity>
               </View>
          )
     }
     return (
          <Navigator screenOptions={screenOptions}>
               <Screen name="tab" component={Tab} options={{title: ""}} />
          </Navigator>
     )
}

export default Drawer;
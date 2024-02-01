import { 
     Text, 
     View,
     StatusBar,
     TextInput,
     ScrollView
} from "react-native";
import {
     primary,
     error,
     secondary,
     warning,
     info,
     danger,
     success
} from "../reusable/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Categories from "./categories";
import Showcase from "./showcase";
import Vendor from "./vendor";
import BestSelling from "./best-selling";
const Home = ()=>{
     return (
          <ScrollView>
               <View style={{flex:1,backgroundColor:"white"}}>
                    <StatusBar backgroundColor={primary}/>
                    <View style={{padding: 20}}>
                         <TextInput 
                              name="search"
                              placeholder="Search Products"
                              style={{
                                   borderWidth : 1,
                                   borderColor : "#ccc",
                                   paddingHorizontal:10,
                                   paddingVertical:5,
                                   marginBottom: 16                         
                              }}
                         />
                         <Categories style={{marginBottom:16,marginRight: -20}} />
                         <Showcase style={{marginBottom:16,marginRight: -20}} />
                         <Vendor style={{marginBottom:16,marginRight: -20}} />
                         <BestSelling style={{marginBottom:16,marginRight: -20}} />
                    </View>
               </View>
          </ScrollView>
     )
}

export default Home;
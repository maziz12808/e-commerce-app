import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"

const Tab = ({data,color="#752FFF"})=>{
     const [tabIndex,setTabIndex] = useState(0)
     return (
          <View>
               <View style={{flexDirection: "row"}}>
                    {
                         data.map((item,index)=>(

                              <TouchableOpacity 
                                   onPress={()=> setTabIndex(index)}
                                   style={{
                                        flexGrow: 1,
                                        marginRight: (index == (data.length - 1) ? null: 16)
                                   }} 
                                   key={index}
                              >
                                   <View 
                                        style={{
                                             borderBottomWidth: (index == tabIndex ? 2 : null),
                                             borderColor: (index == tabIndex ? color : null),
                                             paddingTop: 16,
                                             paddingBottom: 3
                                             }}
                                        >
                                        <Text>{item.label}</Text>
                                   </View>
                              </TouchableOpacity>
                         ))
                    }
               </View>
               <View style={{flexDirection: "row",marginTop: 6}}>
                    {
                         data.map((item,index)=>(
                              <View>
                                   {index == tabIndex &&item.content}
                              </View>
                         ))
                    }
               </View>
          </View>
     )
}

export default Tab;
import { useEffect, useRef, useState } from "react";
import { 
     Text, 
     TextInput, 
     View,
     TouchableOpacity
} from "react-native";

const Ott = ()=>{
     const [inputValue,setInputValue] = useState([]);
     const first = useRef(null);
     const second = useRef(null);
     const third = useRef(null);
     const fourth = useRef(null);

     const handleInput = (value)=>{
          setInputValue(oldValue=>[...oldValue,value])
     }
     useEffect(()=>{
          first.current.focus()
     },[])
     return (
          <View style={{
               flex:1,
               justifyContent: "space-between",
               backgroundColor: "white",
               padding:40
          }}> 
               <View style={{marginBottom:8,alignItems:"center"}}>
                    <Text style={{marginBottom:16,fontSize:16}}>Enter pin to verify your account</Text>
                    <View style={{flexDirection:"row"}}>
                         <TextInput 
                              keyboardType="numeric" 
                              maxLength={1}
                              onChangeText={handleInput}
                              ref={first}
                              onChange={({nativeEvent})=> nativeEvent.text == "" ? null : second.current.focus()}
                              style={{
                                   width:60,
                                   height:60,
                                   borderWidth:1,
                                   borderColor: "#ccc",
                                   paddingHorizontal: 10,
                                   paddingVertical: 10,
                                   borderRadius:60/1,
                                   textAlign:"center",
                                   marginRight:8,
                                   fontSize: 20,
                                   fontWeight:"bold"
                              }}
                         />
                         <TextInput 
                              keyboardType="numeric" 
                              maxLength={1}
                              onChangeText={handleInput}
                              ref={second}
                              onChange={({nativeEvent})=> nativeEvent.text == "" ? first.current.focus() :  third.current.focus()}
                              style={{
                                   width:60,
                                   height:60,
                                   borderWidth:1,
                                   borderColor: "#ccc",
                                   paddingHorizontal: 10,
                                   paddingVertical: 10,
                                   borderRadius:60/1,
                                   textAlign:"center",
                                   marginRight:8,
                                   fontSize: 20,
                                   fontWeight:"bold"
                              }}
                         />
                         <TextInput 
                              keyboardType="numeric" 
                              maxLength={1}
                              onChangeText={handleInput}
                              ref={third}
                              onChange={({nativeEvent})=> nativeEvent.text == "" ? second.current.focus() : fourth.current.focus()}
                              style={{
                                   width:60,
                                   height:60,
                                   borderWidth:1,
                                   borderColor: "#ccc",
                                   paddingHorizontal: 10,
                                   paddingVertical: 10,
                                   borderRadius:60/1,
                                   textAlign:"center",
                                   marginRight:8,
                                   fontSize: 20,
                                   fontWeight:"bold"
                              }}
                         />
                         <TextInput 
                              keyboardType="numeric" 
                              maxLength={1}
                              onChangeText={handleInput}
                              ref={fourth}
                              style={{
                                   width:60,
                                   height:60,
                                   borderWidth:1,
                                   borderColor: "#ccc",
                                   paddingHorizontal: 10,
                                   paddingVertical: 10,
                                   borderRadius:60/1,
                                   textAlign:"center",
                                   marginRight:8,
                                   fontSize: 20,
                                   fontWeight:"bold"
                              }}
                              onChange={({nativeEvent})=> nativeEvent.text == "" ? third.current.focus() : null}
                         />
                    </View>
               </View>
          
               <View>
                    <View style={{justifyContent:"center",flexDirection:"row"}}>
                         <Text style={{textAlign: 'center', marginBottom: 4}}>Don't reciev it </Text>
                         <Text style={{textAlign: 'center', color: '#752FFF'}}>Resend Ott</Text>
                    </View>
               </View>
          </View>
     )
}

export default Ott;
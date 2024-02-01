import { useEffect,useState } from "react";
import { Image, Touchable, TouchableOpacity, View } from "react-native"
import Reanimated, {useSharedValue,useAnimatedStyle,withRepeat, withSequence, withTiming, interpolate} from "react-native-reanimated";
import  GestureRecognizer from "react-native-swipe-gestures"
const pics = [
     require("../../../assets/products/p1.jpg"),
     require("../../../assets/products/p2.jpg"),
     require("../../../assets/products/p3.jpg"),
     require("../../../assets/products/p4.jpg"),
     require("../../../assets/products/p5.jpg")
]

const ProductView = ()=>{
     const [value,setValue] = useState(0);
     const left = useSharedValue(200)
     const width = 200;

     const style = useAnimatedStyle(()=>({
          left: -interpolate(left.value,[0,1,2,3,4],[0,200,400,600,800])
     }))

     useEffect(()=>{
          left.value = withTiming(value,{duration: 1000})
     },[value])

     const onSwipeLeft = ()=>{
          if(value < (pics.length-1)) return setValue(value + 1)
          //setValue(0)
     }
     const onSwipeRight = ()=>{
          if(value > 0) return setValue(value-1)
          setValue(pics.length-1)
     }
     return (
          <View style={{flex: 1,backgroundColor:"white",alignItems: "center",paddingTop:20}}>
               <View style={{width,overflow: "hidden"}}>
                    <GestureRecognizer
                         onSwipeLeft={onSwipeLeft}
                         onSwipeRight={onSwipeRight}
                    >
                         <Reanimated.View style={[{flexDirection:"row",width:(width*pics.length),marginBottom: 8},style]}>
                              {
                                   pics.map((item,index)=>(
                                        <Image 
                                             source={item} 
                                             key={index} 
                                             style={{
                                                  width,
                                                  height: 250
                                             }} 
                                        />
                                   ))
                              }
                         
                         </Reanimated.View>
                    </GestureRecognizer>
               </View>
               <View style={{flexDirection: "row",justifyContent: "space-around",width}}>
                    {
                         pics.map((item,index)=>(
                              <TouchableOpacity key={index} onPress={()=> setValue(index)}>
                                   <View style={{
                                        width:20,
                                        height:20,
                                        backgroundColor: value == index ? "red" : "#ddd",
                                        borderRadius: 10
                                        }} 
                                   />
                              </TouchableOpacity>
                         ))
                    }
               </View>
          </View>
     )
}

export default ProductView;
import { useEffect,useState } from "react";
import { Image, TouchableOpacity, View } from "react-native"
import Reanimated, {useSharedValue,useAnimatedStyle, withTiming, interpolate} from "react-native-reanimated";
import  GestureRecognizer from "react-native-swipe-gestures"

const Carousel = ({data})=>{
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
          if(value < (data.length-1)) return setValue(value + 1)
          setValue(0)
     }
     const onSwipeRight = ()=>{
          if(value > 0) return setValue(value-1)
          setValue(data.length-1)
     }
     return (
          <View style={{flex: 1,backgroundColor:"white",paddingHorizontal:20}}>
               <View style={{alignItems: "center",paddingTop:20,marginBottom:16}}>
                    <View style={{width,overflow: "hidden"}}>
                         <GestureRecognizer
                              onSwipeLeft={onSwipeLeft}
                              onSwipeRight={onSwipeRight}
                         >
                              <Reanimated.View style={[{flexDirection:"row",width:(width*data.length),marginBottom: 8},style]}>
                                   {
                                        data.map((item,index)=>(
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
                              data.map((item,index)=>(
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
          </View>
     )
}

export default Carousel;
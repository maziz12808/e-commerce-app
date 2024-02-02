import { useEffect,useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import Reanimated, {useSharedValue,useAnimatedStyle,withRepeat, withSequence, withTiming, interpolate} from "react-native-reanimated";
import  GestureRecognizer from "react-native-swipe-gestures"
import Icon from "react-native-vector-icons/Ionicons";
import Tab from "../../reusable/tab";
const products = {
     pics: [
          require("../../../assets/products/p1.jpg"),
          require("../../../assets/products/p2.jpg"),
          require("../../../assets/products/p3.jpg"),
          require("../../../assets/products/p4.jpg"),
          require("../../../assets/products/p5.jpg")
     ],
     title: "Red Blue Shirt",
     brand: "brand name",
     rating: 4.5,
     price: 2000,
     discount: 10,
     color: ["tomato","blue","green","black"],
     sizes: ["s","m","lg","xl"]
}

const data = [
     {
          label : "About",
          content: <Text style={{color: "red"}}>about content</Text>
     },
     {
          label : "Review",
          content: <Text>Review content</Text>
     },
     {
          label : "Ask Question",
          content: <Text>Ask content</Text>
     }
]

const ProductView = ()=>{
     const [value,setValue] = useState(0);
     const [color,setColorIndex] = useState(0);
     const [size,setSizeIndex] = useState(0);
     const left = useSharedValue(200)
     const width = 200;

     const style = useAnimatedStyle(()=>({
          left: -interpolate(left.value,[0,1,2,3,4],[0,200,400,600,800])
     }))

     useEffect(()=>{
          left.value = withTiming(value,{duration: 1000})
     },[value])

     const onSwipeLeft = ()=>{
          if(value < (products.pics.length-1)) return setValue(value + 1)
          //setValue(0)
     }
     const onSwipeRight = ()=>{
          if(value > 0) return setValue(value-1)
          setValue(products.pics.length-1)
     }
     return (
          <View style={{flex: 1,backgroundColor:"white",paddingHorizontal:20}}>
               <View style={{alignItems: "center",paddingTop:20,marginBottom:16}}>
                    <View style={{width,overflow: "hidden"}}>
                         <GestureRecognizer
                              onSwipeLeft={onSwipeLeft}
                              onSwipeRight={onSwipeRight}
                         >
                              <Reanimated.View style={[{flexDirection:"row",width:(width*products.pics.length),marginBottom: 8},style]}>
                                   {
                                        products.pics.map((item,index)=>(
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
                              products.pics.map((item,index)=>(
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
               <View style={{flexDirection: "row",justifyContent: "space-between",marginBottom: 16}}>
                    <View>
                         <View style={{backgroundColor: "#752FFF",paddingVertical:4, paddingHorizontal: 16}}>
                              <Text style={{color: "white"}}>{products.rating}</Text>
                         </View>
                    </View>
                    <View>
                         <Text style={{color: "tomato"}}>
                              $ {products.price - (products.price * products.discount / 100)}
                         </Text>
                         <Text style={{color: "gray",textDecorationLine: "line-through"}}>
                              $ {products.price}
                         </Text>
                    </View>
               </View>
               <View style={{marginBottom: 16}}>
                    <Text style={{fontSize: 18,fontWeight: "bold"}}>
                         {products.title}
                    </Text>
                    <Text style={{color: "gray"}}>
                         {products.brand}
                    </Text>
               </View>
               <View style={{flexDirection: "row",justifyContent: "space-between",marginBottom:6}}>
                    <View style={{flexDirection: "row",alignItems: "flex-end"}}>
                         {
                              products.color.map((item,index)=>(
                                   <TouchableOpacity onPress={()=> setColorIndex(index)} key={index}>
                                        <View 
                                             style={{
                                             padding:3,
                                             justifyContent: "center",
                                             alignItems:"center",
                                             width:24,
                                             height:24,
                                             borderRadius:12,
                                             backgroundColor: item,
                                             marginRight: (index == (products.color.length-1) ? 0 : 12)
                                             }}
                                        >
                                             {
                                                  index == color && <Icon name="checkmark-outline" size={18} color="white" />
                                             }
                                        </View>
                                   </TouchableOpacity> 
                              ))
                         } 
                    </View>
                    <View style={{flexDirection: "row",alignItems: "flex-end"}}>
                         {
                              products.sizes.map((item,index)=>(
                                   <TouchableOpacity onPress={()=> setSizeIndex(index)} key={index}>
                                        <View 
                                             onPress={()=> setSizeIndex(index)}
                                             style={{
                                             justifyContent: "center",
                                             alignItems:"center",
                                             width:30,
                                             height:30,
                                             borderWidth: 1,
                                             borderColor: "gray",
                                             borderRadius:4,
                                             backgroundColor: (index == size ?  "#2D2E4A" : "white"),
                                             marginRight: (index == (products.color.length - 1) ? 0 : 12)
                                             }}
                                        >
                                             <Text style={{
                                                       color:(index == size ? "white" : "black"),
                                                       fontSize: 18
                                                  }}
                                             >{item}</Text>
                                        </View> 
                                   </TouchableOpacity>
                              ))
                         } 
                    </View>
               </View>
               <Tab data={data} />
          </View>
     )
}

export default ProductView;
import { useEffect,useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Reanimated, {
     useSharedValue,
     useAnimatedStyle,
     withSequence, 
     withTiming, 
     withSpring
} from "react-native-reanimated";
import  GestureRecognizer from "react-native-swipe-gestures"
import Icon from "react-native-vector-icons/Ionicons";
import Tab from "../../../reusable/tab";
import Carousel from "../../../reusable/carousel";

const products = {
     pics: [
          require("../../../../assets/products/p1.jpg"),
          require("../../../../assets/products/p2.jpg"),
          require("../../../../assets/products/p3.jpg"),
          require("../../../../assets/products/p4.jpg"),
          require("../../../../assets/products/p5.jpg")
     ],
     title: "Red Blue Shirt",
     brand: "brand name",
     rating: 4.5,
     price: 2000,
     discount: 10,
     color: ["tomato","blue","green","black"],
     sizes: ["s","m","lg","xl"]
}

const About = ()=>{
     return (
          <View style={{backgroundColor:"red",height:300,width:300}}>
               <Text>about</Text>
          </View>
     )
}
const Review = ()=>{
     return (
          <View style={{backgroundColor:"red",height:300,width:300}}>
               <Text>Review</Text>
          </View>
     )
}
const Ask = ()=>{
     return (
          <View style={{backgroundColor:"red",height:300,width:300}}>
               <Text>Ask</Text>
          </View>
     )
}
const data = [
     {
          label : "About",
          content: <About />
     },
     {
          label : "Review",
          content: <Review />
     },
     {
          label : "Ask Question",
          content: <Ask />
     }
]

const ProductView = ()=>{
     const [color,setColorIndex] = useState(0);
     const [size,setSizeIndex] = useState(0);

     const colorZoom = useSharedValue(1);
     const colorZoomEffect = useAnimatedStyle(()=>({
          transform: [{
               scale: withSpring(colorZoom.value)
          }]
     }))

     const sizeZoom = useSharedValue(1);
     const sizeZoomEffect = useAnimatedStyle(()=>({
          transform: [{
               scale: withSpring(sizeZoom.value)
          }]
     })); 


     useEffect(()=>{
          colorZoom.value = withSequence(
               withTiming(1.5,{duration: 50}),
               withTiming(1,{duration: 50})
          )
     },[color])

     useEffect(()=>{
          sizeZoom.value = withSequence(
               withTiming(2,{duration: 50}),
               withTiming(1,{duration: 50})
          )
     },[size])

     return (
          <ScrollView>
               <View style={{flex: 1,backgroundColor:"white",paddingHorizontal:20}}>
                    <Carousel data={products.pics} />
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
                                             <Reanimated.View 
                                                  key={index}
                                                  style={[{
                                                  padding:3,
                                                  justifyContent: "center",
                                                  alignItems:"center",
                                                  width:24,
                                                  height:24,
                                                  borderRadius:12,
                                                  backgroundColor: item,
                                                  marginRight: (index == (products.color.length-1) ? 0 : 12)
                                                  },
                                                  index == color ? colorZoomEffect : null
                                                  ]}
                                             >
                                                  {
                                                       index == color && <Icon name="checkmark-outline" size={18} color="white" />
                                                  }
                                             </Reanimated.View>
                                        </TouchableOpacity> 
                                   ))
                              } 
                         </View>
                         <View style={{flexDirection: "row",alignItems: "flex-end"}}>
                              {
                                   products.sizes.map((item,index)=>(
                                        <TouchableOpacity onPress={()=> setSizeIndex(index)} key={index}>
                                             <Reanimated.View 
                                                  onPress={()=> setSizeIndex(index)}
                                                  style={[{
                                                  justifyContent: "center",
                                                  alignItems:"center",
                                                  width:30,
                                                  height:30,
                                                  borderWidth: 1,
                                                  borderColor: "gray",
                                                  borderRadius:4,
                                                  backgroundColor: (index == size ?  "#2D2E4A" : "white"),
                                                  marginRight: (index == (products.color.length - 1) ? 0 : 12)
                                                  },
                                                  index == size ? sizeZoomEffect : null
                                             ]}
                                             >
                                                  <Text style={{
                                                            color:(index == size ? "white" : "black"),
                                                            fontSize: 18
                                                       }}
                                                  >{item}</Text>
                                             </Reanimated.View> 
                                        </TouchableOpacity>
                                   ))
                              } 
                         </View>
                    </View>
                    <Tab data={data} />
                    <View style={{flexDirection: "row",justifyContent: "center",marginTop: 20}}>
                         <TouchableOpacity 
                              style={{
                                   backgroundColor: "#752FFF",
                                   paddingVertical: 12,
                                   marginVertical:12,
                                   paddingHorizontal: 16,
                                   borderRadius: 4,
                                   marginRight: 8
                              }}
                         >
                              <Text style={{textAlign: "center",color: "white",fontSize:18}}>Buy Now</Text>
                         </TouchableOpacity>
                         <TouchableOpacity 
                              style={{
                                   backgroundColor: "#FF696A",
                                   paddingVertical: 12,
                                   marginVertical:12,
                                   paddingHorizontal: 16,
                                   borderRadius: 4,
                                   }}
                              >
                              <Text style={{
                                   textAlign: "center",
                                   color: "white",
                                   fontSize:18}}
                              >Add tto Cart</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </ScrollView>
     )
}

export default ProductView;
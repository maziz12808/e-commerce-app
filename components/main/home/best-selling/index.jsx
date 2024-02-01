import { View,Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { primary } from "../../reusable/colors";

const products = [
     {
          thumbnail: require("../../../assets/products/p1.jpg"),
          title: "product title",
          des: "product description",
          price: 23,
          rating: 4.3,
          soldOut: true
     },
     {
          thumbnail: require("../../../assets/products/p2.jpg"),
          title: "product title",
          des: "product description",
          price: 44,
          rating: 4.3,
          soldOut: false
     },
     {
          thumbnail: require("../../../assets/products/p3.jpg"),
          title: "product title",
          des: "product description",
          price: 45,
          rating: 4.3,
          soldOut: true
     },
     {
          thumbnail: require("../../../assets/products/p4.jpg"),
          title: "product title",
          des: "product description",
          price: 78,
          rating: 4.3,
          soldOut: false
     },
     {
          thumbnail: require("../../../assets/products/p5.jpg"),
          title: "product title",
          des: "product description",
          price: 67,
          rating: 4.3,
          soldOut: true
     },
     {
          thumbnail: require("../../../assets/products/p6.jpg"),
          title: "product title",
          des: "product description",
          price: 23,
          rating: 4.3,
          soldOut: false
     },
     {
          thumbnail: require("../../../assets/products/p1.jpg"),
          title: "product title",
          des: "product description",
          price: 45,
          rating: 4.3,
          soldOut: true
     },
]

const BestSelling = ({style})=>{
     return (
          <View {...style}>
               <Text style={{fontSize:18,color: "#424242",marginBottom: 8}}>Best Selling</Text>
               <View style={{flexDirection: "row"}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                         {
                              products.map((item,index)=>(
                                   <View key={index}>
                                        <View style={{
                                             width: 150,
                                             height: 180,
                                             borderRadius: 4,
                                             borderWidth: 1,
                                             borderColor: "#ddd",
                                             padding: 6,
                                             marginRight: 8
                                        }}>
                                             <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                                                  {
                                                       item.soldOut && 
                                                       <Text style={{paddingHorizontal: 6,paddingTop:3,backgroundColor: primary,color: "white",borderRadius: 4}}>Sold Out</Text>
                                                       || <Text></Text>
                                                  }
                                                  <Icon size={24}>more_horiz</Icon>
                                             </View>
                                             <View style={{alignItems: "center",justifyContent: "center",width: "100%", height: 80,marginVertical: 6}}>
                                                  <Image source={item.thumbnail} style={{width: "100%",height: "100%"}} />
                                             </View>
                                             <View>
                                                  <Text style={{marginBottom: 4}}>{item.title}</Text>
                                                  <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                                       <Text>${item.price}</Text>
                                                       <Text>{item.rating}</Text>
                                                  </View>
                                             </View>
                                        </View>
                                   </View>
                              ))
                         }
                    </ScrollView>
               </View>
          </View>
     )
}

export default BestSelling;
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const products = [
     {
          key: 1,
          title: "shows",
          description: "Your perfect pack for everyday use and walks in the forest.Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: require("../../../assets/products/p1.jpg"),
          price: 300,    
          quantity: 2
     },
     {
          key: 2,
          title: "shows",
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: require("../../../assets/products/p1.jpg"),
          price: 300,    
          quantity: 2    
     },
     {
          key: 3,
          title: "shows",
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: require("../../../assets/products/p1.jpg"),
          price: 300,    
          quantity: 2    
     },
     {
          key: 4,
          title: "shows",
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          image: require("../../../assets/products/p1.jpg"),
          price: 300,    
          quantity: 2   
     }
]
const renderItem = ({item})=>(
     <View style={{
          flexDirection: "row",
          backgroundColor: "white",
          marginTop:20,
          padding:8,
          marginHorizontal: 20,
          borderRadius: 12,
          elevation: 5,
          shadowColor: "gray"
     }}>
          <View>
               <Image source={item.image} style={{width: 80, height: 120,marginRight:8,marginBottom: 8}} />
               <View style={{flexDirection: "row",alignItems: "center"}}>
                    <TouchableOpacity>
                         <Icon name="remove-circle-outline" size={24} />
                    </TouchableOpacity>
                    <Text style={{marginHorizontal:8}}>{item.quantity}</Text>
                    <TouchableOpacity>
                         <Icon name="remove-circle-outline" size={24} />
                    </TouchableOpacity>
               </View>
          </View>
          <View style={{flexGrow: 1,justifyContent: "space-between"}}>
               <View style={{width: 230}}>
                    <Text style={{fontSize:16,fontWeight: "bold"}}>{item.title}</Text>
                    <Text style={{fontSize: 14,color: "#323232"}}>{item.description.slice(0,150)}...</Text>
               </View>
               <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                    <Text style={{fontWeight: "bold",fontSize:16}}>${item.price}</Text>
                    <TouchableOpacity>
                         <View style={{flexDirection: "row",alignItems: "center"}}>
                              <Icon name="trash" size={24} color="gray" />
                              <Text style={{color: "#424242"}}>Remove</Text>
                         </View>
                    </TouchableOpacity>
               </View>
          </View>
     </View>
)
const Cart = ()=>{
     return (
          <View style={{flex:1}}>
               <FlatList 
                    data={products} 
                    renderItem={renderItem} 
                    keyExtractor={item=>item.key}
               />
               <View style={{
                    padding: 20,
                    marginTop: 20,
                    backgroundColor: "white"
               }}>
                    <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                         <Text>Subtotal</Text>
                         <Text>:</Text>
                         <Text>230</Text>
                    </View>
                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop:8}}>
                         <Text>Subtotal</Text>
                         <Text>:</Text>
                         <Text>230</Text>
                    </View>
                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop:8}}>
                         <Text>Subtotal</Text>
                         <Text>:</Text>
                         <Text>230</Text>
                    </View>
                    <View style={{borderWidth:.3,borderColor: "gray",marginTop: 8}} />
                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop:8,marginBottom: 8}}>
                         <Text>Total</Text>
                         <Text>:</Text>
                         <Text>230</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: "#752FFF",paddingVertical: 12,marginVertical:12}}>
                         <Text style={{textAlign: "center",color: "white",fontSize:18}}>Checkout</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default Cart;
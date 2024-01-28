import { Image, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const WellcomeScreen = ()=>{
     const data = [
          {
               key: 1,
               image: require("../../assets/welcome-screen/a.png"),
               title: "Enjoy New Fashion Deals Today",
               subtitle: "Top brands and deals available only on bizWap"
          },
          {
               key: 2,
               image: require("../../assets/welcome-screen/b.png"),
               title: "Enjoy New Fashion Deals Today",
               subtitle: "Top brands and deals available only on bizWap"
          },
          {
               key: 3,
               image: require("../../assets/welcome-screen/c.png"),
               title: "Enjoy New Fashion Deals Today",
               subtitle: "Top brands and deals available only on bizWap"
          }
     ]

     const renderItem = ({item})=>(
          <View style={{flex:1,justifyContent:"center"}}>
               <Image 
                    resizeMode="contain"
                    source={item.image}
                    style={{
                         width: 325,
                         height: 399,
                         top: item.key === 3 ? -200 : 0,
                         right: item.key === 3 ? -120 : 0
                    }}
               />
               <View>
                    <Text style={{fontSize: 18,fontWeight: "bold",textAlign: "center"}}>
                         {item.title}
                    </Text>
                    <Text style={{fontSize: 16,textAlign:"center",marginTop:4}}>
                         {item.subtitle}
                    </Text>
               </View>
          </View>
     )
     const SkipButton = ()=>(
          <TouchableOpacity style={{paddingVertical:12,backgroundColor: "#752FFF"}}>
               <Text style={{textAlign:"center",color:"white"}}>Skip</Text>
          </TouchableOpacity>
     )
     const DoneButton = ()=>(
          <View>
               <TouchableOpacity 
                    style={{
                         paddingVertical:12
                         ,backgroundColor: "#752FFF",
                         marginBottom:8,
                         borderRadius:4
                    }}
               >
                    <Text style={{textAlign:"center",color:"white",fontSize:16}}>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{
                         paddingVertical:12,
                         backgroundColor: "#752FFF",
                         fontSize:16,
                         borderRadius:4
                    }}
               >
                    <Text style={{textAlign:"center",color:"white"}}>Create Account</Text>
               </TouchableOpacity>
          </View>
     )
     return (
          <View style={{flex:1}}>
               <AppIntroSlider 
                    data={data}
                    renderItem={renderItem}
                    showSkipButton
                    renderSkipButton={SkipButton}
                    bottomButton
                    showNextButton={false}
                    renderDoneButton={DoneButton}
               />
          </View>
     )
}

export default WellcomeScreen;
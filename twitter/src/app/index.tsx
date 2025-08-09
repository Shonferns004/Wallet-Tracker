import { Image, StatusBar, Text, View } from "react-native";
import imagePath from "../assets/images/imagePath";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from "react-native-reanimated"
import { useEffect } from "react";
import { router } from "expo-router";


export default function Index() {


  const ring1Padding = useSharedValue(0)
  const ring2Padding = useSharedValue(0)

  useEffect(()=>{
    ring1Padding.value= 0
    ring2Padding.value =0
    setTimeout(()=> ring1Padding.value= withSpring(ring1Padding.value+ hp(4)), 100)
    setTimeout(()=> ring2Padding.value= withSpring(ring2Padding.value+ hp(4.5)), 300)
    setTimeout(()=>router.replace("/(main)"), 2500)
  },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" />


      <Animated.View style={{padding: ring2Padding}} className="bg-white/20 rounded-full">
        <Animated.View style={{padding: ring1Padding}} className="bg-white/20 rounded-full">
          <Image style={{width: hp(20), height: hp(20)}} className="w-[200px] h-[200px]" source={imagePath.logo}></Image>
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
        <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest ">
          Foody
        </Text>
        <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
}

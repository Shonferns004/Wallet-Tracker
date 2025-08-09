import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, UserCircleIcon} from "react-native-heroicons/outline"


const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}} className='space-y-6 pt-14'>
        <View className='mx-4 flex-row justify-between items-center mb-2'>
          <UserCircleIcon size={hp(5)} color={"gray"} />
          <BellIcon size={hp(4)} color="gray"/>
        </View>
        <View className='mx-4 space-y-2 mb-2'>
          <Text> Helo, Shawn</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
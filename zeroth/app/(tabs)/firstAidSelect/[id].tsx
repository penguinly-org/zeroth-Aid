import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';

import firstAidDataIndex from '../../../Data/firstAidDataIndex.json';

const emergencyDetails = () => {
    const { id } = useLocalSearchParams();


   return (
    <View className='flex-1 px-4'>
    <FlatList
    contentContainerStyle={{ paddingTop: 40, paddingBottom: 120 }} 
    data={firstAidDataIndex.find(item => item.name === id.toString())?.content.map((contentItem, index) => ({ name: contentItem, index, content: [] })) || []}
    keyExtractor={(item) => item.name}
    renderItem={({ item }: { item: { name: string; index: number; content: string[] } }) => (
      <TouchableOpacity className='p-12 my-3 bg-white rounded-2xl flex-row items-center shadow-2xl' onPress={() => router.replace(`/firstAidInfo/${item.name}`)}>
      <Text className='text-2xl font-normal'>{item.name}</Text>
      </TouchableOpacity>
    )}
    />
  </View>
   )
}

export default emergencyDetails
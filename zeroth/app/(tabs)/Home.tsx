import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firstAidDataIndex from '../../Data/firstAidDataIndex.json'
import { router } from 'expo-router'


const Home = () => {


  return (
    <View className='flex-1 px-4'>
      <FlatList
      contentContainerStyle={{ paddingTop: 40, paddingBottom: 120 }} 
      data={firstAidDataIndex}
      keyExtractor={(item) => item.name}
      renderItem={({ item }: { item: { name: string; index: number; content: string[] } }) => (
        <TouchableOpacity className='p-12 my-3 bg-white rounded-2xl flex-row items-center shadow-2xl' onPress={() => router.replace(`/Settings`)}>
        <Text className='text-2xl font-normal'>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default Home
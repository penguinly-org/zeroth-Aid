import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import data from '../../Data/emergency'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
const Emergency = () => {
  return (
    <View className='flex-1 px-4'>
      <FlatList
        data={data} 
        renderItem={({ item }: { item: { ISO: string; countryName: string; fire: string; police: string; ambulance: string; } }) => (
          <View className='p-2 my-3 bg-white rounded-2xl flex-row items-center shadow-2xl'>
            <View className='p-4 my-4 mr-4 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg'>
              <Text style={{fontSize: 28}}>{getUnicodeFlagIcon(item.ISO)}</Text>
            </View>
            <Text className='text-xl font-normal'>{item.countryName}</Text>
          </View>
        )}
        ListHeaderComponent={() => {
          return (
          <Text className='text-3xl py-4 font-light'>Emergency Numbers</Text>)
        }}/>
    </View>
  )
}

export default Emergency
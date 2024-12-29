import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import data from '../../Data/emergency'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const Emergency = () => {
  const [searchText, setSearchText] = useState('')
  const [renderData, setRenderData] = useState(data)

  const handleSearch = (text: string) => {
    setSearchText(text)
    const filteredData = data.filter(item =>
      item.countryName.toLowerCase().includes(text.toLowerCase())
    )
    setRenderData(filteredData)
  }
  return (
    <View className='flex-1 px-4'>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <TextInput
          autoComplete="country"
          value={searchText}
          onChangeText={handleSearch}
          placeholder="Search"
          placeholderTextColor="#e0c987"
          className='p-4 my-4 mx-12 bg-black rounded-3xl shadow-2xl font-light text-base text-[#ebc55e]'
        />
      </View>
      <FlatList
        contentContainerStyle={{ paddingTop: 80 }} // Adjust padding to prevent overlap
        data={renderData}
        renderItem={({ item }: { item: { ISO: string; countryName: string; fire: string; police: string; ambulance: string; } }) => (
          <View className='p-2 my-3 bg-white rounded-2xl flex-row items-center shadow-2xl'>
            <View className='p-4 my-4 mr-4 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg'>
              <Text style={{ fontSize: 28 }}>{getUnicodeFlagIcon(item.ISO)}</Text>
            </View>
            <Text className='text-xl font-normal'>{item.countryName}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default Emergency
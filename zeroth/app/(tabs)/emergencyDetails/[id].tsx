import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { Linking } from 'react-native';

import emergencyData from '../../../Data/emergency.json';

const emergencyDetails = () => {
    const { id } = useLocalSearchParams();
    const countryData = emergencyData.find(country => country.ISO === id.toString());

    if (!countryData) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text>Data not found for {id}</Text>
            </View>
        );
    }

    const makeCall = (number: string) => {
        Linking.openURL(`tel:${number}`);
    }

    return (
        <View className='flex-1 items-center justify-center '>
            <View className='p-4 m-4 bg-white w-[80%] h-[80%] rounded-3xl shadow-2xl'>
                <View className='p-4 my-4 mr-4 h-32 bg-gray-100 rounded-3xl flex-row justify-center items-center shadow-2xl'>
                    <Text style={{ fontSize: 56 }}>{getUnicodeFlagIcon(id.toString())}</Text>
                    <Text className='px-4 text-[56px] font-bold'>{countryData.ISO}</Text>
                </View>
                <TouchableOpacity className='p-4 my-4 mr-4 h-28 bg-gray-100 rounded-3xl flex-row justify-center items-center shadow-2xl' onPress={() => makeCall(countryData.police)}>
                    <Text className='text-[28px] font-light'>Police: {countryData.police}</Text>
                </TouchableOpacity>
                <TouchableOpacity className='p-4 my-4 mr-4 h-28 bg-gray-100 rounded-3xl flex-row justify-center items-center shadow-2xl' onPress={() => makeCall(countryData.fire)}>
                    <Text className='text-[28px] font-light'>Fire: {countryData.fire}</Text>
                </TouchableOpacity>
                <TouchableOpacity className='p-4 my-4 mr-4 h-28 bg-gray-100 rounded-3xl flex-row justify-center items-center shadow-2xl' onPress={() => makeCall(countryData.ambulance)}>
                    <Text className='text-[28px] font-light'>Ambulance: {countryData.ambulance}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default emergencyDetails
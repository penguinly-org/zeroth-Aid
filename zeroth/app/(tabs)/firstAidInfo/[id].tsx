import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { Linking } from 'react-native';

import firstAidData from '../../../Data/firstAidData.json';

const emergencyDetails = () => {
    const { id } = useLocalSearchParams();

    const data = firstAidData.find((item: any) => Object.keys(item)[0] === id);

    if (!data) {
        return (
            <View>
                <Text>No data found for the given ID.</Text>
            </View>
        );
    } else {
        let details = data[Object.keys(data)[0] as keyof typeof data];
        if(!details) {
            return (
                <View>
                    <Text>No data found for the given ID.</Text>
                </View>
            );
        }       
        return (
            <View className=''>
                    <ScrollView className='px-4 pt-4' contentContainerStyle={{ paddingTop: 20, paddingBottom: 120 }}>
                        <Text className='text-3xl font-extrabold'>{Array.isArray(id) ? id[0].replace(/-/g, ' ') : id.replace(/-/g, ' ')}</Text>
                        <Text className="my-4 font-light text-xl">{details["Key action"]}</Text>
                        <Text className="my-4 font-light text-xl">{details["Introduction"]}</Text>
                        <Text className="my-4 font-light text-xl">{details["Guidelines"]}</Text>
                        <Text className="my-4 font-light text-xl">{details["Good practice points"]}</Text>
                        <Text className="my-4 font-light text-xl">{details["Chain of survival behaviours"]}</Text>
                    </ScrollView>
            </View>
            );
    }
}

export default emergencyDetails
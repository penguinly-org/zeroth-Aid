import { View, Text } from 'react-native'
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
                <View className='flex-1 px-4'>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{Array.isArray(id) ? id[0].replace(/-/g, ' ') : id.replace(/-/g, ' ')}</Text>
                    <Text style={{ marginVertical: 10 }}>{details["Key action"]}</Text>
                    <Text style={{ marginVertical: 10 }}>{details["Introduction"]}</Text>
                    <Text style={{ marginVertical: 10 }}>{details["Guidelines"]}</Text>
                    <Text style={{ marginVertical: 10 }}>{details["Good practice points"]}</Text>
                    <Text style={{ marginVertical: 10 }}>{details["Chain of survival behaviours"]}</Text>
                </View>
            );
    }
}

export default emergencyDetails
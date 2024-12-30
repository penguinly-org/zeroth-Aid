import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const emergencyDetails = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>emergencyDetails</Text>
        <Text>id: {id}</Text>
    </View>
  )
}

export default emergencyDetails
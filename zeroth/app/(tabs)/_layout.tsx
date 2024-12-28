import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props}  /> } screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='Scan' options={{title:"Scan"}}/>
        <Tabs.Screen name='Emergency' options={{title:"Emergency"}}/>
    </Tabs>
  )
}

export default _layout
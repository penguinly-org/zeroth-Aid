import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props}  /> } screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='Home' options={{title:"Home"}}/>
        <Tabs.Screen name='Emergency' options={{title:"Emergency"}}/>
        <Tabs.Screen name='Settings' options={{title:"Settings"}}/>
    </Tabs>
  )
}

export default _layout
import { View, Platform, TouchableOpacity } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icons: { [key: string]: (props: any) => JSX.Element } = {
    "Emergency": (props:any) => (<Icon name="phone" size={32} {...props}/>),
    "Scan": (props:any) => (<Icon name="scan-helper" size={32} {...props}/>)
  }
  return (
    <View className='absolute bottom-12 flex-row justify-between align-center bg-gray-950 mx-[25%] rounded-3xl p-4 shadow-lg'> 
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            className='flex-1 items-center justify-center'
            key={route.key}
          >
            {icons[route.name]({
              color: isFocused ? '#ebc55e' : '#fff',
            })}

          </TouchableOpacity>
        );
      })}
    </View>)
    }


export default TabBar;
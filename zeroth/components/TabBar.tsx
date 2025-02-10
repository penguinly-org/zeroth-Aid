import { View, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const icons: { [key: string]: (props: any) => JSX.Element } = {
    "Emergency": (props:any) => (<Icon name="phone" size={32} {...props}/>),
    "Home": (props:any) => (<Icon name="home" size={32} {...props}/>),
    "Settings": (props:any) => (<Icon name="cog" size={32} {...props}/>),
  }

  const filteredRoutes = state.routes.filter(route => route.name === "Emergency" || route.name === "Home" || route.name === "Settings");

  return (
    <View className='absolute bottom-12 flex-row justify-between align-center bg-gray-950 mx-[25%] rounded-3xl p-4 shadow-lg'> 
      {filteredRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            {icons[route.name] ? (
              icons[route.name]({
                color: isFocused ? '#ebc55e' : '#fff',
              })
            ) : null}

          </TouchableOpacity>
        );
      })}
    </View>)
    }

export default TabBar;
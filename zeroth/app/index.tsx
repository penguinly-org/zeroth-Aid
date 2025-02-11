
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defualtEmgDataSource, defaultFirstAidDataSource, defaultFirstAidIndexDataSource, updateAllData } from './(tabs)/Settings';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const initializeData = async () => {
      try {
        if (await AsyncStorage.getItem('emgDataSource') == null) {
          await AsyncStorage.setItem('emgDataSource', defualtEmgDataSource);
          await updateAllData();
        }
        if (await AsyncStorage.getItem('firstAidDataSource') == null) {
          await AsyncStorage.setItem('firstAidDataSource', defaultFirstAidDataSource);
          await updateAllData();
        }
        if (await AsyncStorage.getItem('firstAidIndexDataSource') == null) {
          await AsyncStorage.setItem('firstAidIndexDataSource', defaultFirstAidIndexDataSource);
          await updateAllData();
        }
      } catch (e) {
        console.log(e);
      }
    };

    initializeData();
  }, []);

  return (
    <Redirect href='Home'/>
  );
}
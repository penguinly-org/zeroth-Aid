import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';

const defualtEmgDataSource = "https://raw.githubusercontent.com/penguinly-org/zerothAidData/refs/heads/main/Latest/emergency.json"

const defaultFirstAidDataSource = "https://raw.githubusercontent.com/penguinly-org/zerothAidData/refs/heads/main/Latest/firstAidData.json"

const defaultFirstAidIndexDataSource = "https://raw.githubusercontent.com/penguinly-org/zerothAidData/refs/heads/main/Latest/firstAidDataIndex.json"


const saveEmgData = async (data:string) => {
  try {

    await AsyncStorage.setItem('emergencyData', data);
  } catch (error) {
    console.log(error);
  }
}

const saveFirstAidData = async (data:string) => {
  try {

    await AsyncStorage.setItem('firstAidData', data);
  } catch (error) {
    console.log(error);
  }
}

const saveFirstAidIndexData = async (data:string) => {
  try {

    await AsyncStorage.setItem('firstAidIndexData', data);
  } catch (error) {
    console.log(error);
  }
}

const getEmgData = async () => {
  try {
    const value = await AsyncStorage.getItem('emergencyData');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const getFirstAidData = async () => {
  try {
    const value = await AsyncStorage.getItem('firstAidData');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const getFirstAidIndexData = async () => {
  try {
    const value = await AsyncStorage.getItem('firstAidIndexData');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

//source settings

const saveEmgDataSoruce = async (data:string) => {
  try {
    if (data === "") {
      data = defualtEmgDataSource;
    }
    await AsyncStorage.setItem('emgDataSource', data);
  } catch (error) {
    console.log(error);
  }
}

const saveFirstAidDataSoruce = async (data:string) => {
  try {
    if (data === "") {
      data = defaultFirstAidDataSource;
    }
    await AsyncStorage.setItem('firstAidDataSource', data);
  } catch (error) {
    console.log(error);
  }
}
const saveFirstAidIndexDataSoruce = async (data:string) => {
  try {
    if (data === "") {
      data = defaultFirstAidIndexDataSource;
    }
    await AsyncStorage.setItem('firstAidIndexDataSource', data);
  } catch (error) {
    console.log(error);
  }
}

const getEmgDataSource = async () => {
  try {
    const value = await AsyncStorage.getItem('emgDataSource');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const getFirstAidDataSource = async () => {
  try {
    const value = await AsyncStorage.getItem('firstAidDataSource');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const getFirstAidIndexDataSource = async () => {
  try {
    const value = await AsyncStorage.getItem('firstAidIndexDataSource');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

const updateAllData = async () => {
  const emg = await getEmgDataSource();
  const firstAid = await getFirstAidDataSource();
  const firstAidIndex = await getFirstAidIndexDataSource();
  await saveEmgData(await fetch(emg||"").then((res) => JSON.stringify(res.json())));
  await saveFirstAidData(await fetch(firstAid||"").then((res) => JSON.stringify(res.json())));
  await saveFirstAidIndexData(await fetch(firstAidIndex||"").then((res) => JSON.stringify(res.json())));
}



      const Settings = () => {
        const [emgData, setEmgData] = useState<string | null>(null);
        const [showInput, setShowInput] = useState<boolean>(false);
        const [firstAidData, setFirstAidData] = useState<string | null>(null);
        const [firstAidIndexData, setFirstAidIndexData] = useState<string | null>(null);
        const [showFirstAidInput, setShowFirstAidInput] = useState<boolean>(false);
        const [showFirstAidIndexInput, setShowFirstAidIndexInput] = useState<boolean>(false);

        useEffect(() => {
          const fetchData = async () => {
            const emg = await getEmgDataSource();
            const firstAid = await getFirstAidDataSource();
            const firstAidIndex = await getFirstAidIndexDataSource();
            setEmgData(emg);
            setFirstAidData(firstAid);
            setFirstAidIndexData(firstAidIndex);
          };
          fetchData();
        }, []);

        return (
                <View className='m-4'>
                <Text className='font-semibold text-3xl'>Settings</Text>
                
                <Text>Emergency Data: {emgData}</Text>
                <Text className='font-semibold text-xl'>Change Emergency Data Source</Text>
                <Button
                title="Edit"
                onPress={() => setShowInput(!showInput)}
                />
                {showInput && (
                <>
                <TextInput
                  placeholder="Enter new emergency data source"
                  onChangeText={(text) => setEmgData(text)}
                />
                <Button
                  title="Submit"
                  onPress={async () => {
                  await saveEmgDataSoruce(emgData || "");
                  const updatedEmgData = await getEmgDataSource();
                  setEmgData(updatedEmgData);
                  setShowInput(false);
                  await saveEmgData(await fetch(updatedEmgData||"").then((res) => res.json()));
                  }}
                />
                </>
                )}

                <Text>First Aid Data: {firstAidData}</Text>
                <Text className='font-semibold text-xl'>Change First Aid Data Source</Text>
                <Button
                title="Edit"
                onPress={() => setShowFirstAidInput(!showFirstAidInput)}
                />
                {showFirstAidInput && (
                <>
                <TextInput
                  placeholder="Enter new first aid data source"
                  onChangeText={(text) => setFirstAidData(text)}
                />
                <Button
                  title="Submit"
                  onPress={async () => {
                  await saveFirstAidDataSoruce(firstAidData || "");
                  const updatedFirstAidData = await getFirstAidDataSource();
                  setFirstAidData(updatedFirstAidData);
                  setShowFirstAidInput(false);
                  await saveFirstAidData(await fetch(updatedFirstAidData||"").then((res) => res.json()));
                  }}
                />
                </>
                )}

                <Text>First Aid Index Data: {firstAidIndexData}</Text>
                <Text className='font-semibold text-xl'>Change First Aid Index Data Source</Text>
                <Button
                title="Edit"
                onPress={() => setShowFirstAidIndexInput(!showFirstAidIndexInput)}
                />
                {showFirstAidIndexInput && (
                <>
                <TextInput
                  placeholder="Enter new first aid index data source"
                  onChangeText={(text) => setFirstAidIndexData(text)}
                />
                <Button
                  title="Submit"
                  onPress={async () => {
                  await saveFirstAidIndexDataSoruce(firstAidIndexData || "");
                  const updatedFirstAidIndexData = await getFirstAidIndexDataSource();
                  setFirstAidIndexData(updatedFirstAidIndexData);
                  setShowFirstAidIndexInput(false);
                  await saveFirstAidIndexData(await fetch(updatedFirstAidIndexData||"").then((res) => res.json()));
                  }}
                />
                </>
                )}
                <Button title='Reset Default' onPress={
                async ()=>{
                  await saveEmgDataSoruce(defualtEmgDataSource);
                  await saveFirstAidDataSoruce(defaultFirstAidDataSource);
                  await saveFirstAidIndexDataSoruce(defaultFirstAidIndexDataSource);
                  await updateAllData();
                  setEmgData(defualtEmgDataSource);
                  setFirstAidData(defaultFirstAidDataSource);
                  setFirstAidIndexData(defaultFirstAidIndexDataSource);
                }
                }/>
                <Button title='Update Data' onPress={async ()=>{
                await updateAllData();
                alert('Data has been updated!');
                }}/>
                </View>
        );
      };




export default Settings
export {defualtEmgDataSource,defaultFirstAidDataSource,defaultFirstAidIndexDataSource,saveEmgData, saveFirstAidData, saveFirstAidIndexData, getEmgData, getFirstAidData, getFirstAidIndexData, saveEmgDataSoruce, saveFirstAidDataSoruce, saveFirstAidIndexDataSoruce, getEmgDataSource, getFirstAidDataSource, getFirstAidIndexDataSource, updateAllData}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Constants from 'expo-constants'

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import A2_Temperature from './src/pages/A2_Temperature'
import A2_Flow from './src/pages/A2_Flow'
import A2_Humidity from './src/pages/A2_Humidity'
import A2_Level from './src/pages/A2_Level'

import B2_Temperature from './src/pages/B2_Temperature'
import B2_Flow from './src/pages/B2_Flow'
import B2_Humidity from './src/pages/B2_Humidity'
import B2_Level from './src/pages/B2_Level' 

import NFT_Temperature from './src/pages/NFT_Temperature'
import NFT_Level from './src/pages/NFT_Level'

const TopTab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  );
}

function GroupA() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
    
          switch (route.name) {
            case 'A2_Temperature':
              iconName = 'thermometer';
              break;
            case 'A2_Flow':
              iconName = 'wind';
              break;
            case 'A2_percent':
              iconName = 'edit';
              break;
            case 'A2_Level':
              iconName = 'bell'
            default:
              iconName = 'bell';
              break;
          }
    
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#777',
        showLabel: false
      }}
    >
      <BottomTab.Screen name="A2_Temperature" component={A2_Temperature}/>
      <BottomTab.Screen name="A2_Flow" component={A2_Flow}/>
      <BottomTab.Screen name="A2_Humidity" component={A2_Humidity}/>
      <BottomTab.Screen name="A2_Level" component={A2_Level}/>
    </BottomTab.Navigator>
  );
}

function GroupB() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="B2_Temperature" component={B2_Temperature}/>
      <BottomTab.Screen name="B2_Flow" component={B2_Flow}/>
      <BottomTab.Screen name="B2_Humidity" component={B2_Humidity}/>
      <BottomTab.Screen name="B2_Level" component={B2_Level}/>
    </BottomTab.Navigator>
  );
}

function NFT() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="NFT_Temperature" component={NFT_Temperature}/>
      <BottomTab.Screen name="NFT_Level" component={NFT_Level}/>
    </BottomTab.Navigator>
  );
}

function ListPlot() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ListPlot</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ marginTop: Constants.statusBarHeight }}/>
      <TopTab.Navigator>
        <TopTab.Screen name="Home" component={Home} />
        <TopTab.Screen name="A" component={GroupA} />
        <TopTab.Screen name="B" component={GroupB} />
        <TopTab.Screen name="NFT" component={NFT} />
        <TopTab.Screen name="Plot" component={ListPlot} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}


import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Constants from 'expo-constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThermometerEmpty, faWind, faPercent, faRulerVertical } from "@fortawesome/free-solid-svg-icons"

import Home from './src/pages/Home'

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

import ListPlot from './src/pages/ListPlot'

const TopTab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()

function GroupA() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
    
          switch (route.name) {
            case 'Temperatura':
              iconName = faThermometerEmpty
              break;
            case 'Fluxo':
              iconName = faWind
              break;
            case 'Umidade':
              iconName = faPercent
              break;
            case 'Nível':
              iconName = faRulerVertical
            default:
              iconName = faRulerVertical;
              break;
          }
    
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />
        },
      })}
        tabBarOptions={{
        activeTintColor: '#FAA8A2',
        activeBackgroundColor: '#F0F0F0',
        inactiveTintColor: '#47566A',
        showLabel: true,
        style: {
          backgroundColor: '#f0f0f0',
          height: 55,
        }
      }}
    >
      <BottomTab.Screen name="Temperatura" component={A2_Temperature}/>
      <BottomTab.Screen name="Fluxo" component={A2_Flow}/>
      <BottomTab.Screen name="Umidade" component={A2_Humidity}/>
      <BottomTab.Screen name="Nível" component={A2_Level}/>
    </BottomTab.Navigator>
  );
}

function GroupB() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
    
          switch (route.name) {
            case 'Temperatura':
              iconName = faThermometerEmpty
              break;
            case 'Fluxo':
              iconName = faWind
              break;
            case 'Umidade':
              iconName = faPercent
              break;
            case 'Nível':
              iconName = faRulerVertical
            default:
              iconName = faRulerVertical;
              break;
          }
    
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />
        },
      })}
        tabBarOptions={{
        activeTintColor: '#FAA8A2',
        activeBackgroundColor: '#F0F0F0',
        inactiveTintColor: '#47566A',
        showLabel: true,
        style: {
          backgroundColor: '#f0f0f0',
          height: 55,
        }
      }}
    >
      <BottomTab.Screen name="Temperatura" component={B2_Temperature}/>
      <BottomTab.Screen name="Fluxo" component={B2_Flow}/>
      <BottomTab.Screen name="Umidade" component={B2_Humidity}/>
      <BottomTab.Screen name="Nível" component={B2_Level}/>
    </BottomTab.Navigator>
  );
}

function NFT() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
    
          switch (route.name) {
            case 'Temperatura':
              iconName = faThermometerEmpty
              break
            case 'Nível':
              iconName = faRulerVertical
            default:
              iconName = faRulerVertical;
              break
          }
    
          return <FontAwesomeIcon icon={iconName} size={25} color={color} />
        },
      })}
        tabBarOptions={{
        activeTintColor: '#FAA8A2',
        activeBackgroundColor: '#F0F0F0',
        inactiveTintColor: '#47566A',
        showLabel: true,
        style: {
          backgroundColor: '#f0f0f0',
          height: 55,
        }
      }}
    >
      <BottomTab.Screen name="Temperatura" component={NFT_Temperature}/>
      <BottomTab.Screen name="Nível" component={NFT_Level}/>
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ marginTop: Constants.statusBarHeight }}/>
      <TopTab.Navigator
        tabBarOptions={{
          activeTintColor: "#FAA8A2",
          activeBackgroundColor: '#F0F0F0',
          inactiveTintColor: '#47566A',
          style: {
            backgroundColor: "#f0f0f0",
          }
        }}
      >
        <TopTab.Screen name="Home" component={Home} />
        <TopTab.Screen name="A" component={GroupA} />
        <TopTab.Screen name="B" component={GroupB} />
        <TopTab.Screen name="NFT" component={NFT} />
        <TopTab.Screen name="Plot" component={ListPlot} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}


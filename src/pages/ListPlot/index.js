import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import styles from './styles'
import Statistics from '../../assets/icons/Statistics'
import { vw } from 'react-native-expo-viewport-units'

import A2_ListPlot from '../A2_ListPlot'
import B2_ListPlot from '../B2_ListPlot'
import NFT_ListPlot from '../NFT_ListPlot'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Stack = createStackNavigator()

function ListPlotMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>
        <Text style={styles.titleMenu}>Gráficos</Text>
        
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate("A2_ListPlot")}
        >
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Substrato | Aberto</Text>
              <Text style={styles.thinText}>Vazão, nível, umidade, temperatura</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate("B2_ListPlot")}
        >
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Substrato | Fechado</Text>
              <Text style={styles.thinText}>Vazão, nível, umidade, temperatura</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate("NFT_ListPlot")}
        >
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>NFT</Text>
              <Text style={styles.thinText}>Nível, temperatura da solução</Text>
            </View>
          </View>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default function ListPlot() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="ListPlotMenu" 
        component={ListPlotMenu} 
      />
      <Stack.Screen name="A2_ListPlot" component={A2_ListPlot}/>
      <Stack.Screen name="B2_ListPlot" component={B2_ListPlot}/>
      <Stack.Screen name="NFT_ListPlot" component={NFT_ListPlot}/>
    </Stack.Navigator>
  )
}
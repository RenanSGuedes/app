import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import NFT_TemperaturePlot from '../NFT_TemperaturePlot'
import NFT_FlowPlot from '../NFT_FlowPlot'

import styles from './styles'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function NFT_ListPlotMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>
        <View style={styles.header}>
          <Text style={styles.boldText}>NFT</Text>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.boldText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('NFT_FlowPlot')}
        >
          <View>
            <Text style={styles.normalText}>Vazão</Text>
            <Text style={styles.thinText}>Consulte o gráfico da vazão em função do tempo</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('NFT_TemperaturePlot')}
        >
          <View>
            <Text style={styles.normalText}>Temperatura da solução</Text>
            <Text style={styles.thinText}>Consulte o gráfico da temperatura em função do tempo</Text>
          </View>
        </TouchableOpacity> 

      </View>
    </View>
  )
}

export default function NFT_ListPlot() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NFT_ListPlotMenu" component={NFT_ListPlotMenu} />
      <Stack.Screen name="NFT_FlowPlot" component={NFT_FlowPlot} />
      <Stack.Screen name="NFT_TemperaturePlot" component={NFT_TemperaturePlot} />
    </Stack.Navigator>
  )
}
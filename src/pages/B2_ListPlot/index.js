import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import B2_LevelPlot from '../B2_LevelPlot'
import B2_FlowPlot from '../B2_FlowPlot'
import B2_HumidityPlot from '../B2_HumidityPlot'
import B2_TemperaturePlot from '../B2_TemperaturePlot'

import styles from './styles'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function B2_ListPlotMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>
        <View style={styles.header}>
          <Text style={styles.boldText}>Substrato | Aberto</Text>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.boldText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('B2_FlowPlot')}
        >
          <View>
            <Text style={styles.normalText}>Vazão</Text>
            <Text style={styles.thinText}>Consulte o gráfico da vazão em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('B2_LevelPlot')}
        >
          <View>
            <Text style={styles.normalText}>Nível do reservatório</Text>
            <Text style={styles.thinText}>Consulte o gráfico do nível em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('B2_HumidityPlot')}
        >
          <View>
            <Text style={styles.normalText}>Umidade do solo</Text>
            <Text style={styles.thinText}>Consulte o gráfico da umidade em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('B2_TemperaturePlot')}
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

export default function B2_ListPlot() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="B2_ListPlotMenu" component={B2_ListPlotMenu} />
      <Stack.Screen name="B2_FlowPlot" component={B2_FlowPlot} />
      <Stack.Screen name="B2_LevelPlot" component={B2_LevelPlot} />
      <Stack.Screen name="B2_HumidityPlot" component={B2_HumidityPlot} />
      <Stack.Screen name="B2_TemperaturePlot" component={B2_TemperaturePlot} />
    </Stack.Navigator>
  )
}
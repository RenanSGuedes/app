import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import B2_LevelPlot from '../B2_LevelPlot'
import A2_FlowPlot from '../A2_FlowPlot'
import A2_HumidityPlot from '../A2_HumidityPlot'
import A2_TemperaturePlot from '../A2_TemperaturePlot'

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
          onPress={() => navigation.navigate('A2_FlowPlot')}
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
          onPress={() => navigation.navigate('A2_HumidityPlot')}
        >
          <View>
            <Text style={styles.normalText}>Umidade do solo</Text>
            <Text style={styles.thinText}>Consulte o gráfico da umidade em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}
          onPress={() => navigation.navigate('A2_TemperaturePlot')}
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
      <Stack.Screen name="A2_FlowPlot" component={A2_FlowPlot} />
      <Stack.Screen name="B2_LevelPlot" component={B2_LevelPlot} />
      <Stack.Screen name="A2_HumidityPlot" component={A2_HumidityPlot} />
      <Stack.Screen name="A2_TemperaturePlot" component={A2_TemperaturePlot} />
    </Stack.Navigator>
  )
}
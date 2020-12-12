import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { vw } from 'react-native-expo-viewport-units'

import {
  LineChart,
} from "react-native-chart-kit";

export default function A2_TemperaturePlot({ navigation }) {
  const maxValue = 30

  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>  

        <View style={styles.header}>
        <Text style={styles.boldText}>Substrato | Fechado <Text style={{ color: 'rgba(71, 86, 106, .3)'}}>{'>'}</Text> Temperatura</Text>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.boldText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{
          alignItems: 'center'
        }}>

          <LineChart
            data={{
              labels: ["18:30", "18:35", "19:00", "19:15", "19:30", "19:45", "20:00"],
              datasets: [
                {
                  data: [
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue,
                    Math.random() * maxValue
                  ]
                }
              ],
              legend: ['Temperatura']
            }}
            width={vw(90)} // from react-native
            height={vw(55)}
            yAxisSuffix="°C"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#DAEBFF",
              backgroundGradientFrom: "#DAEBFE",
              backgroundGradientTo: "#DAEBFE",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(250, 168, 162, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(71, 86, 106, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: `${vw(1.5)}`,
                strokeWidth: "1",
                stroke: "#FF3501"
              },
              propsForBackgroundLines: {
                strokeWidth: .5,
                stroke: "rgba(255, 53, 1, .7)"
              },
              propsForHorizontalLabels: {
                fontSize: vw(3)
              },
              propsForVerticalLabels: {
                fontSize: `${vw(3)}`
              }
            }}
            bezier
            style={{
              marginVertical: 0,
              borderRadius: vw(5),
            }}
          />
        </View>

        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View>
              <Text style={styles.normalText}>Gerar arquivo</Text>
              <Text style={styles.thinText}>Arquivos em pdf e xls (Dados obtidos num maior período)</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}
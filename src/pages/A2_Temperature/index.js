import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import ProgressCircle from 'react-native-progress-circle'
import { Circle } from 'react-native-svg'
import SemiCircleProgress from '../../assets/Components/SemiCircleProgress'
import StatisticsTheme from '../../assets/icons/StatisticsTheme'
//import Pointer from '../../assets/svg_components/Pointer'
//import Temperature from '../../assets/icons/Temperature'
//import Flow from '../../assets/icons/Flow'
//import Humidity from '../../assets/icons/Humidity'
//import SolutionHeight from '../../assets/icons/SolutionHeight'
import { vh, vw, vmax } from 'react-native-expo-viewport-units'
import BackgroundTheme from '../../assets/icons/BackgroundTheme'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
//import { currentTemperature } from './styles'

export default function A2_Temperature() {
  const randomNumber = Math.floor(Math.random() * 90)

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Fechado</Text>
        <Text style={styles.normalText}>Temperatura da solução</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <SemiCircleProgress
          percentage={randomNumber}
          progressColor={"#FAA8A2"}
        >
          <Text style={{ fontSize: vw(10), color: "#47566A" }}>{randomNumber}°C</Text>
        </SemiCircleProgress>
      </View>
    </View>
  )
}
import * as React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import ProgressCircle from 'react-native-progress-circle'
//import Pointer from '../../assets/svg_components/Pointer'
//import Temperature from '../../assets/icons/Temperature'
//import Flow from '../../assets/icons/Flow'
//import Humidity from '../../assets/icons/Humidity'
//import SolutionHeight from '../../assets/icons/SolutionHeight'
import { vw } from 'react-native-expo-viewport-units'
import { color } from 'react-native-reanimated'
//import { currentTemperature } from './styles'

export default function A2_Temperature() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Fechado</Text>
        <Text style={styles.normalText}>Temperatura da solução</Text>
      </View>
      
      <View style={styles.pointerBackground}>

        <ProgressCircle
          percent={90}
          radius={vw(30)}
          borderWidth={vw(5)}
          color="#FAA8A2"
          shadowColor="#f0f0f0"
          bgColor="#f0f0f0"
        >
          <Text style={{ fontSize: 18 }}>{'90%'}</Text>
        </ProgressCircle>
      </View>
    </View>
  )
}
import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import SemiCircleProgress from '../../assets/Components/SemiCircleProgress'
import handlePointer from '../../utils/handlePointer'

export default function B2_Temperature() {
  const currentValue = 21

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Aberto</Text>
        <Text style={styles.normalText}>Temperatura da solução</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <SemiCircleProgress
          percentage={handlePointer(-20, 40, currentValue)}
          progressColor={"#FAA8A2"}
        >
          <Text style={styles.currentValue}>{currentValue}°C</Text>
        </SemiCircleProgress>
      </View>
    </View>
  )
}
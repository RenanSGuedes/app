import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import SemiCircleProgress from '../../assets/Components/SemiCircleProgress'
import handlePointer from '../../utils/handlePointer'

export default function B2_Humidity() {
  const currentValue = 33

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Aberto</Text>
        <Text style={styles.normalText}>Umidade do solo</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <SemiCircleProgress
          percentage={handlePointer(0, 100, currentValue)}
          progressColor={"#FFFFFF"}
        >
          <Text style={styles.currentValue}>{currentValue}%</Text>
        </SemiCircleProgress>
      </View>
    </View>
  )
}
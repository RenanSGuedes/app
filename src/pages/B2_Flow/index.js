import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import SemiCircleProgress from '../../assets/Components/SemiCircleProgress'
import handlePointer from '../../utils/handlePointer'

export default function B2_Flow() {
  const currentValue = 6.12

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Aberto</Text>
        <Text style={styles.normalText}>Vazão</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <SemiCircleProgress
          percentage={handlePointer(0, 10, currentValue)}
          progressColor={"#47566A"}
        >
          <Text style={styles.currentValue}>{currentValue}L/h</Text>
        </SemiCircleProgress>
      </View>
    </View>
  )
}
import * as React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import SemiCircleProgress from '../../assets/Components/SemiCircleProgress'
import handlePointer from '../../utils/handlePointer'

export default function NFT_Level() {
  const currentValue = 28

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>NFT</Text>
        <Text style={styles.normalText}>Nível do reservatório</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <SemiCircleProgress
          percentage={handlePointer(0, 30, currentValue)}
          progressColor={"#5EAC24"}
        >
          <Text style={styles.currentValue}>{currentValue}cm</Text>
        </SemiCircleProgress>
      </View>
    </View>
  )
}
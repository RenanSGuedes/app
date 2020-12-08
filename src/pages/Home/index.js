import * as React from 'react'
import { View, Text, Image } from 'react-native'
import Tomato from '../../assets/icons/Tomato'
import Status from '../../assets/icons/Status'
import styles from './styles'
import TomatoBackground from '../../assets/images/TomatoBackground.png'
import Pump from '../../assets/icons/Pump'
import { vw } from 'react-native-expo-viewport-units'

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image source={TomatoBackground} style={styles.tomatoBackground}/>
      
      <View style={styles.infoMenu}>   
        <Tomato style={styles.tomato} width={vw(35)}/> 
        <View style={styles.status}>
          <Status />
          <Text style={styles.titleMenu}>Status</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba NFT</Text>
              <Text style={styles.thinText}>Desligado</Text>
            </View>
          </View>
          <View style={styles.NFTpumpStatusIndicator}/>
        </View>

        <View style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba | Substrato - Aberto</Text>
              <Text style={styles.thinText}>Ligado</Text>
            </View>
          </View>
          <View style={styles.pumpStatusIndicatorB}/>
        </View>

        <View style={styles.block}>

          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba | Substrato - Fechado</Text>
              <Text style={styles.thinText}>Ligado</Text>
            </View>
          </View>
          <View style={styles.pumpStatusIndicatorA}/>
        </View>
      </View>
    </View>
  )
}
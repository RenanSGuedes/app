import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function B2_ListPlot({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>
        <View style={styles.header}>
          <Text style={styles.boldText}>Substrato | Fechado</Text>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.boldText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.block}>
          <View>
            <Text style={styles.normalText}>Vazão</Text>
            <Text style={styles.thinText}>Consulte o gráfico da vazão em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <View>
            <Text style={styles.normalText}>Nível do reservatório</Text>
            <Text style={styles.thinText}>Consulte o gráfico do nível em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <View>
            <Text style={styles.normalText}>Umidade do solo</Text>
            <Text style={styles.thinText}>Consulte o gráfico da umidade em função do tempo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.block}>
          <View>
            <Text style={styles.normalText}>Temperatura da solução</Text>
            <Text style={styles.thinText}>Consulte o gráfico da temperatura em função do tempo</Text>
          </View>
        </TouchableOpacity> 
      </View>
    </View>
  )
}
import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units';
import Constants from 'expo-constants'
//import handlePointer from '../../utils/handlePointer'

export const currentTemperature = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  header: {
    padding: vw(3),
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: vw(3.7),
    color: '#47566A',
  },
  normalText: {
    fontSize: vw(3.6),
    color: '#47566A'
  },
  pointerContainer: {
    flex: 6,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pointerBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: vw(8),
    color: '#47566A',
  },
})

export default styles
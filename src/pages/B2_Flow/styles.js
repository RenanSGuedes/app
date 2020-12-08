import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  header: {
    padding: vw(3),
  },
  boldText: {
    color: '#47566A',
    fontSize: vw(4),
    fontWeight: 'bold'
  },
  normalText: {
    fontSize: vw(3.6),
    color: '#47566A'
  },
  pointerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  currentValue: {
    fontSize: vw(10), 
    color: "#47566A"
  }
})

export default styles
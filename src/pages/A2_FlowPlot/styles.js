import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoMenu: {
    backgroundColor: '#F0F0F0',
    padding: vw(5)
  },
  layoutInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vw(5)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Constants.statusBarHeight/2
  },
  block: {
    marginBottom: vw(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoMenu: {
    backgroundColor: '#F0F0F0',
    padding: vw(5)
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
  thinText: {
    fontSize: vw(3.1),
    color: '#47566A'
  },
})


export default styles
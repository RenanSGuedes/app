import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  block: {
    marginBottom: vw(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundStatisticsIcon: {
    backgroundColor: '#DAEBFF',
    padding: vw(2),
    borderRadius: vw(11/2),
    marginRight: vw(2)
  },
  layoutInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  normalText: {
    fontSize: vw(3.6),
    color: '#47566A'
  },
  thinText: {
    fontWeight: 'normal',
    fontSize: vw(3.2),
    color: '#47566A'
  },
  titleMenu: {
    color: '#47566A',
    fontSize: vw(4.6),
    paddingBottom: vw(8)
  },
  infoMenu: {
    flex: 7.5,
    backgroundColor: '#F0F0F0',
    padding: vw(3)
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'magenta',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
  },
  touchable: {
    width: vw(15),
    height: vw(15),
    borderRadius: vw(15)/2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAEBFF'
  },
  text: {
    fontSize: vw(8),
    color: '#47566A',
  },
})

export default styles
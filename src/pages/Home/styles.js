import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  tomatoBackground: {
    flex: 2,
    opacity: .5
  },
  tomato: {
    marginTop: -vw(20),
    alignSelf: 'center',
  },
  infoMenu: {
    flex: 5,
    backgroundColor: '#F0F0F0',
    padding: vw(3)
  },
  block: {
    marginBottom: vw(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleMenu: {
    color: '#47566A',
    fontSize: vw(4.6),
    paddingBottom: vw(8)
  },
  backgroundPumpIcon: {
    backgroundColor: '#DAEBFF',
    padding: vw(2),
    borderRadius: vw(11/2),
    marginRight: vw(2)
  },
  layoutInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  NFTpumpStatusIndicator: {
    width: vw(14),
    height: vw(7),
    backgroundColor: '#FAA8A2',
    borderRadius: vw(7/2)
  },
  pumpStatusIndicatorA: {
    width: vw(14),
    height: vw(7),
    backgroundColor: '#DAEBFF',
    borderRadius: vw(7/2)
  },
  pumpStatusIndicatorB: {
    width: vw(14),
    height: vw(7),
    backgroundColor: '#DAEBFF',
    borderRadius: vw(7/2)
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'red'
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
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../helper/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 30,
    width: '85%',
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    elevation: 4, //just android device
    shadowColor: '#000', // color - IOS
    shadowOffset: { width: 2, height: 2 }, // like box-shadow first 2 parameters
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

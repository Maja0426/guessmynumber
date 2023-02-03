import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../helper/colors'

const List = ({ children }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listContainer: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 12,
    backgroundColor: Colors.yellow,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: 22,
  },
})

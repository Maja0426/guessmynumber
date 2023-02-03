import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../helper/colors'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    width: '85%',
  },
})

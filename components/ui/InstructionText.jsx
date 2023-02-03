import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../helper/colors'

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.yellow,
    fontSize: 24,
    marginBottom: 20,
  },
})

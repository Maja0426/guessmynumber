import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../helper/colors'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    width: '85%',
    borderColor: Colors.yellow,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  numberText: {
    fontSize: 36,
    color: Colors.yellow,
    fontWeight: 'bold',
  },
})

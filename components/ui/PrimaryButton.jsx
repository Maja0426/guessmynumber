import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Colors } from '../../helper/colors'

const PrimaryButton = ({ children, confirm, pressBtn }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressBtn}
        android_ripple={{ color: Colors.plum }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 4,
  },
  pressed: {
    opacity: 0.75,
  },
})

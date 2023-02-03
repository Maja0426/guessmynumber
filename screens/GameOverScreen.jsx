import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors } from '../helper/colors'
import PrimaryButton from '../components/ui/PrimaryButton'
import List from '../components/ui/List'
import InstructionText from '../components/ui/InstructionText'
const GameOverScreen = ({ newGame, counter }) => {
  let badgeImage

  function newGameHandler() {
    newGame(0)
  }

  if (counter <= 2) {
    badgeImage = (
      <Image
        source={require('../assets/images/rank1.png')}
        style={styles.badge}
      />
    )
  } else if (counter > 2 && counter <= 5) {
    badgeImage = (
      <Image
        source={require('../assets/images/rank2.png')}
        style={styles.badge}
      />
    )
  } else if (counter > 5 && counter <= 8) {
    badgeImage = (
      <Image
        source={require('../assets/images/rank3.png')}
        style={styles.badge}
      />
    )
  } else {
    badgeImage = (
      <Image
        source={require('../assets/images/rank4.png')}
        style={styles.badge}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/over3.png')}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <List>Steps number: {counter}</List>
          <View style={styles.rank}>
            <InstructionText>Your Rank is:</InstructionText>
          </View>
        </View>
        {badgeImage}
      </View>
      <PrimaryButton pressBtn={newGameHandler}>New game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 34,
    alignItems: 'center',
    marginVertical: 24,
    marginTop: 10,
  },
  text: {
    fontSize: 32,
    color: Colors.yellow,
  },
  rank: {
    margin: 20,
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 190,
    marginBottom: 30,
  },
  titleContainer: {
    height: 100,
    maxHeight: 200,
    alignItems: 'center',
  },
  badge: {
    width: 200,
    height: 200,
    marginVertical: 30,
  },
})

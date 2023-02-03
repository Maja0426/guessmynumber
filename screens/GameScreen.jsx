import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import { Colors } from '../helper/colors'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import List from '../components/ui/List'

let minBound = 1
let maxBound = 99

const GameScreen = ({ userNumber, onGameOver, stepCount }) => {
  const initialGuess = generateRandomBetween(1, 99, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [list, setList] = useState([])
  const [step, setStep] = useState(0)
  console.log(userNumber)
  console.log('STEP: ', step)

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude)
    } else {
      return rndNum
    }
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      stepCount(step)
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      maxBound = currentGuess
    } else {
      minBound = currentGuess
    }
    const newRndNumber = generateRandomBetween(minBound, maxBound, currentGuess)
    setList((currentList) => [
      ...currentList,
      {
        min: minBound,
        max: maxBound,
        current: currentGuess,
        id: Math.random().toString(),
      },
    ])
    setStep(list.length + 1)
    console.log(minBound, maxBound)
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressBtn={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressBtn={nextGuessHandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listItem}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <List>
                {itemData.item.min} - {itemData.item.max}
              </List>
            )
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listItem: {
    flex: 2,
    width: '85%',
    marginVertical: 15,
  },
})

import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import { Colors } from './helper/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState(0)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [step, setStep] = useState(0)

  function stepCounter(stepNumber) {
    setStep(stepNumber)
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function newGame() {
    setUserNumber(0)
    setGameIsOver(false)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        stepCount={stepCounter}
      />
    )
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen newGame={newGame} counter={step} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.plum500, Colors.yellow]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})

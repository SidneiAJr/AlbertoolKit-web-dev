import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fundo = () => {
  return (
    <View style={styles.Fundo}>
    </View>
  )
}

export default Fundo

const styles = StyleSheet.create({
    Fundo:{
        backgroundColor: 'black',
        color: 'white',
        width: 400,
        height: 400,
    }
})
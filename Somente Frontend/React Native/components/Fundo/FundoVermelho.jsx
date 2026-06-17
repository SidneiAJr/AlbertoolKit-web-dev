import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FundoVermelho = () => {
  return (
    <View style={styles.Fundo}>
    </View>
  )
}

export default FundoVermelho

const styles = StyleSheet.create({
    Fundo:{
        backgroundColor: 'red',
        color: 'white',
        width: 400,
        height: 400,
    }
})
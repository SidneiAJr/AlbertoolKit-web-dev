import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Cardprop{
    tamanho:number
    fundo:string
    sombra?:number
    titulo:string
    style?: any
}



const cardteste = ({tamanho,fundo,sombra,titulo,style}:Cardprop) => {
  return (
    <View style={[styles.card,{width:tamanho,backgroundColor:fundo,elevation: sombra??0},style]}>
     <Text style={styles.titulo}>{titulo}</Text>
    </View>
  )
}

export default cardteste

const styles = StyleSheet.create({
   card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

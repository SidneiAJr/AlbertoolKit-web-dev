import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

interface Botaotri{
  title:string
  onPress?: () => void
  fundo?: string,
  textoTamanho?: number
  textoColor?: string
  style?: any 
}

const botao = ({title,onPress,fundo,textoTamanho,textoColor,style}:Botaotri) => {
  return (
    <TouchableOpacity style={[styles.botao,{backgroundColor: fundo},style]}onPress={onPress}>
       <Text style={[styles.texto,{color:textoColor},textoTamanho ? {fontSize:textoTamanho}: undefined]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default botao

const styles = StyleSheet.create({})

import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

interface Imagemprops{
    tamanho:number
    borda?:number
    isActive?:boolean
    source?: string        // url da imagem
    iniciais?: string      // fallback se não tiver imagem
}

const imgreu = ({tamanho,borda,isActive,source, iniciais}:Imagemprops) => {
  return (
    <View style={[
      styles.container,
      {
        width: tamanho,
        height: tamanho,
        borderRadius: tamanho / 2,
        borderWidth: isActive ? 3 : borda ?? 0,
        borderColor: isActive ? 'blue' : 'transparent',
      },
    ]}>
      {source ? (
        <Image
          source={{ uri: source }}
          style={{ width: tamanho, height: tamanho, borderRadius: tamanho / 2 }}
        />
      ) : (
        // fallback com iniciais se não tiver imagem
        <View style={[styles.fallback, { width: tamanho, height: tamanho, borderRadius: tamanho / 2 }]}>
          <Text style={[styles.iniciais, { fontSize: tamanho / 3 }]}>
            {iniciais ?? '?'}
          </Text>
        </View>
      )}
    </View>
  )
}

export default imgreu

const styles = StyleSheet.create({
    container: {
    overflow: 'hidden',
  },
  fallback: {
    backgroundColor: '#004080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iniciais: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

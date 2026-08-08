import { StyleSheet, View, FlatList, Text } from 'react-native'
import React from 'react'

interface ListaProps<T> {
  dados: T[]
  keyExtractor: (item: T) => string
  renderItem: (item: T) => React.ReactElement
  titulo?: string
  vazio?: string
  style?: any
}

const Lista = <T,>({ dados, keyExtractor, renderItem, titulo, vazio = 'Nenhum item encontrado', style }: ListaProps<T>) => {
  return (
    <View style={[styles.container, style]}>
      {titulo && <Text style={styles.titulo}>{titulo}</Text>}
      <FlatList
        data={dados}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={<Text style={styles.vazio}>{vazio}</Text>}
      />
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({
  container: { flex: 1 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  vazio: { textAlign: 'center', color: '#999', marginTop: 40 },
})

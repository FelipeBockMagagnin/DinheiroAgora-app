import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { GetAllCoins } from '../../services/awesomeApiCoins'

export default function Home() {
  const [coins, setCoins] = useState()

  useEffect(() => {
    GetAllCoins().then(data => {
      setCoins(Object.values(data.data))
    })
  }, [])

  if (coins === undefined) {
    return <Text>Loading</Text>
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Listagem de moedas.
      </Text>
      </View>

      <FlatList
        data={coins}
        style={styles.coinList}
        keyExtractor={coins => String(coins.id)}
        //onEndReached={loadcoins}
        onEndReachedThreshold={0.2}
        renderItem={({ item: coin }) => (
          <View style={styles.coin}>
            <Text style={styles.coinProperty}>Moeda:</Text>
            <Text style={styles.coinValue}>{coin.name}</Text>

            <Text style={styles.coinProperty}>Valor:</Text>
            <Text style={styles.coinValue}>{Number(coin.bid).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>

          </View>
        )}
      />
    </View>

  )
}
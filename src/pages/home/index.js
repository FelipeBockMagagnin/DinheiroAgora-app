import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
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
      <FlatList
        data={coins}
        keyExtractor={coins => String(coins.id)}
        numColumns={2}        
        //onEndReached={loadcoins}
        onEndReachedThreshold={0.2}
        renderItem={({ item: coin }) => (
          <View style={styles.coin}>
            <Feather style={{textAlign: 'center'}} name='dollar-sign' size={16} color='#00c853' />
            <Text style={styles.coinProperty}>{coin.name}</Text>
            <Text style={styles.coinValue}>{'R$' + Number(coin.bid).toFixed(2).toString().replace('.', ',')}</Text>
          </View>
        )}
      />
    </View>

  )
}
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { GetAllCoins } from '../../services/awesomeApiCoins'
import CoinIcon from '../../components/coinIcon';
import Loading from '../../components/loading'

export default function Home({ navigation }) {
  const [coins, setCoins] = useState()

  useEffect(() => {
    GetAllCoins().then(data => {
      setCoins(Object.values(data.data))
    })
  }, [])

  if (coins === undefined) {
    return <Loading></Loading>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coins}
        keyExtractor={coins => String(coins.id)}
        numColumns={2} 
        renderItem={({ item: coin }) => (
          <View style={styles.coin} onTouchEnd={() => navigation.navigate('Money', {code: coin.code })}>
            <CoinIcon style={{textAlign: 'center'}} name={coin.code} size={16} color='#00c853'  ></CoinIcon>
            <Text style={styles.coinProperty}>{coin.name}</Text>
            <Text style={styles.coinValue}>{'R$' + Number(coin.bid).toString().replace('.', ',')}</Text>
          </View>
        )}
      />
    </View>

  )
}
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker, Button } from 'react-native'
import styles from './styles';
import Loading from '../../components/loading'
import { GetAllCoins } from '../../services/awesomeApiCoins'

export default function Convert() {
  const [coins, setCoins] = useState()
  const [selectedValue, setSelectedValue] = useState('USD');
  const [selectedTargetValue, setSelectedTargetValue] = useState('USD');
  const [result, setResult] = useState('0,00')
  const [inputValue, setInputvalue] = useState('1,00')

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
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Convert</Text>

      <View style={styles.innerContainer}>
        <TextInput value={inputValue} onChangeText={(value) => setInputvalue(value)} style={styles.input}></TextInput>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={styles.input}>
          {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
        </Picker>
      </View>

      <Text>In</Text>

      <View style={styles.innerContainer}>
        <Picker
          selectedValue={selectedTargetValue}
          onValueChange={(itemValue, itemIndex) => setSelectedTargetValue(itemValue)}
          style={styles.input}>
          {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
        </Picker>
      </View>

      <View style={styles.innerContainer}>
        <Button title='Converter' onPress={() => {
          const fromCoin = coins.find(element => element.code == selectedValue).bid;
          const toCoin = coins.find(element => element.code == selectedTargetValue).bid;

          const conversionRate = fromCoin/toCoin;
          setResult(conversionRate * inputValue);
        }} />
      </View>

      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Resultado</Text>
        <Text style={{ textAlign: 'center' }} >{result}</Text>
      </View>
    </View>
  )
}
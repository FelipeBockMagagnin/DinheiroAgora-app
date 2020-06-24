import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker, Button } from 'react-native'
import styles from './styles';
import Loading from '../../components/loading'
import { GetAllCoins } from '../../services/awesomeApiCoins'

export default function Convert() {
  const [coins, setCoins] = useState()
  const [selectedValue, setSelectedValue] = useState('USD');
  const [selectedTargetValue, setSelectedTargetValue] = useState('USD');
  const [inputValue, setInputvalue] = useState('1,00')
  const [inputTargetValue, setInputTargetValue] = useState('1,00')

  useEffect(() => {
    GetAllCoins().then(data => {
      setCoins(Object.values(data.data))
    })
  }, [])

  if (coins === undefined) {
    return <Loading></Loading>
  }
  
  function calculateConversion() {
    if(inputTargetValue === undefined || inputValue === undefined){
      alert('Por favor, insira valores nos campos')
      return
    }

    const fromCoin = coins.find(element => element.code == selectedValue).bid;
    const toCoin = coins.find(element => element.code == selectedTargetValue).bid;

    const conversionRateTo = fromCoin / toCoin;
    const conversionRateFrom = toCoin / fromCoin;

    //alert(conversionRateFrom +  conversionRateTo)
    setInputvalue(conversionRateTo * Number(inputTargetValue));
    setInputTargetValue(conversionRateFrom * Number(inputValue));
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 1 }}>Converter</Text>

      <View style={styles.innerContainer}>
        <TextInput
          value={inputValue}
          onChangeText={(value) => setInputvalue(value)}
          style={styles.textInput}
        />
        <View style={styles.pickerInput}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => { setSelectedValue(itemValue); calculateConversion() }}>
            {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
          </Picker>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <TextInput
          value={inputTargetValue}
          onChangeText={(value) => setInputTargetValue(value)}
          style={styles.textInput}
        />

        <View style={styles.pickerInput}>
          <Picker
            selectedValue={selectedTargetValue}
            onValueChange={(itemValue, itemIndex) => { setSelectedTargetValue(itemValue); calculateConversion() }}>
            {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
          </Picker>
        </View>
      </View>
    </View>
  )
}


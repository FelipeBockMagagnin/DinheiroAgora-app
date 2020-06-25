import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker, Button } from 'react-native'
import styles from './styles';
import Loading from '../../components/loading'
import { GetAllCoins } from '../../services/awesomeApiCoins'

export default function Convert() {
  const [coins, setCoins] = useState()

  const [selectedValue, setSelectedValue] = useState('USD');
  const [selectedTargetValue, setSelectedTargetValue] = useState('USD');

  const [inputValue, setInputValue] = useState('1.00')
  const [inputTargetValue, setInputTargetValue] = useState('1.00')

  useEffect(() => {
    GetAllCoins().then(data => {
      setCoins(Object.values(data.data))
    });
  }, [])

  if (coins === undefined) {
    return <Loading></Loading>
  }
  
  function calculateFromValue() {
    if(inputTargetValue === undefined || inputValue === undefined){
      alert('Por favor, insira valores nos campos')
      return
    }

    const fromCoin = coins.find(element => element.code == selectedValue).bid;
    const toCoin = coins.find(element => element.code == selectedTargetValue).bid;

    const conversionRateTo = fromCoin / toCoin;    
    const fromValue = parseFloat(conversionRateTo) * parseFloat(inputTargetValue);

    setInputValue(fromValue.toFixed(4).toString());
  }
  
  function calculateToValue(){
    const fromCoin = coins.find(element => element.code == selectedValue).bid;
    const toCoin = coins.find(element => element.code == selectedTargetValue).bid;

    const conversionRateFrom = toCoin / fromCoin;
    const toValue = parseFloat(conversionRateFrom) * parseFloat(inputValue);
    setInputTargetValue(toValue.toFixed(4).toString());
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 1 }}>Converter</Text>

      <View style={styles.innerContainer}>
        <TextInput
          value={inputValue}
          onChangeText={(value) => { setInputValue(value); calculateToValue() }}
          style={styles.textInput}
        />

        <View style={styles.pickerInput}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => { setSelectedValue(itemValue); calculateToValue() }}>
            {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
          </Picker>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <TextInput
          value={inputTargetValue}
          onChangeText={(value) => { setInputTargetValue(value); calculateFromValue() }}
          style={styles.textInput}
        />

        <View style={styles.pickerInput}>
          <Picker
            selectedValue={selectedTargetValue}
            onValueChange={(itemValue, itemIndex) => { setSelectedTargetValue(itemValue); calculateFromValue() }}>
            {coins.map(coin => <Picker.Item label={coin.name} value={coin.code} />)}
          </Picker>
        </View>
      </View>
    </View>
  )
}


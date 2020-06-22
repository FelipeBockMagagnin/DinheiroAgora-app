import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import styles from './styles'
import { GetCoinHistoryDays } from '../../services/awesomeApiCoins'
import Loading from '../../components/loading'
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { TimestampToDayMounth } from '../../utils/dateFunctions'

export default function Money({ route, navigation }) {
  const { code } = route.params;

  console.log('Iniciando analise da moeda: ' + code);

  const [coin, setCoin] = useState()

  useEffect(() => {
    GetCoinHistoryDays(code, 15).then(data => {
      setCoin(Object.values(data.data))
    })
  }, [])

  if (coin === undefined) {
    return <Loading></Loading>
  }

  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(0, 200, 83, ${opacity})`, // optional
      }
    ],
  };

  var coinReverse = [...coin];
  
  coinReverse.reverse().map(obj => {
    try{
      data.labels.push(TimestampToDayMounth(obj.timestamp).getDate())
      data.datasets[0].data.push(Number(obj.bid))
    }
    catch{

    }    
  })


  const chartConfig = {
    backgroundGradientFrom: '#f2f2f2',
    backgroundGradientTo: '#f2f2f2',
    useShadowColorFromDataset: true,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    style: {
      borderRadius: 16,
    },
  };


  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: 10}}>{coin[0].name}</Text>
      <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 20}}>Hoje o {coin[0].name} vale <Text style={{fontWeight: 'bold'}}>R${coin[0].bid}</Text></Text>
      <LineChart
        data={data}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  )
}


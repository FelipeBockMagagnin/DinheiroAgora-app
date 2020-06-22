import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {Text} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CoinIcon(props) {
  console.log(props);

  const style = {
    fontSize: props.size, 
    color:props.color,
    fontWeight: 'bold',
    textAlign: 'center'
  }

  switch (props.name) {
    case 'USD': return <Text style={style} >{'\u0024'}</Text>
    case 'EUR': return <Text style={style} >{'\u20ac'}</Text>
    case 'BTC': return <MaterialCommunityIcons name="bitcoin" style={{textAlign: 'center'}} size={props.size} color={props.color}/>
    case 'AUD': return <Text style={style} >{'\u0024'}</Text>
    case 'JPY': return <Text style={style} >{'\u00a5'}</Text>
    case 'CNY': return <Text style={style} >{'\u00a5'}</Text>
    case 'GBP': return <Text style={style} >{'\u00a3'}</Text>
    case 'ARS': return <Text style={style} >{'\u0024'}</Text>
    case 'CAD': return <Text style={style} >{'\u0024'}</Text>
    case 'LTC': return <MaterialCommunityIcons name="litecoin" style={{textAlign: 'center'}} size={props.size} color={props.color}/>
    case 'ARS': return <Text style={style} >{'\u0024'}</Text>
    case 'ILS': return <Text style={style} >{'\u20aa'}</Text>
    case 'CHF': return <Text style={style} >{'\u0043'}{'\u0048'}{'\u0046'}</Text>
    case 'ETH': return <MaterialCommunityIcons name="ethereum" style={{textAlign: 'center'}} size={props.size} color={props.color}/>
    default: return <Text style={style} >{'\u0024'}</Text>
  }
}
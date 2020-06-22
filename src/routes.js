import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import { Feather } from '@expo/vector-icons';
import Convert from './pages/convert';
import { createStackNavigator } from '@react-navigation/stack';
import Money from './pages/money/index'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Listar') {
            iconName = 'dollar-sign';
          } else if (route.name === 'Converter') {
            iconName = 'shuffle';
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#00c853',
        inactiveTintColor: '#1b1b1b'
      }}
    >
      <Tab.Screen name="Listar" component={Home} />
      <Tab.Screen name="Converter" component={Convert} />
    </Tab.Navigator>
  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" options={{headerShown: false}} component={TabNavigator} />
        <Stack.Screen name="Money" options={{ title: 'Informações' }} component={Money} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

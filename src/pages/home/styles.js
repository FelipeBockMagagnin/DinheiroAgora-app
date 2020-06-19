import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
  },

  coin: {
    flex: 1,
    padding: 8,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },

  coinProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center'
  },

  coinValue: {
    marginTop: 2,
    fontSize: 15,
    color: '#737380',
    textAlign: 'center'
  }
});
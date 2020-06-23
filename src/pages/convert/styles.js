import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  innerContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },

  input: {
     width: 150,
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1,
     textAlign: 'center'
  },  
});
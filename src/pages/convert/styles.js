import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
  },

  innerContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    width: 150,
    textAlign: 'left',
    padding: 10,
    borderColor: '#00c853',
    borderWidth: 2,
    height: 60,
    borderRadius: 10
  },

  pickerInput: {
    width: 150,
    height: 60,
    borderColor: '#00c853',
    borderWidth: 2,
    textAlign: 'center',
    margin: 20,
    borderRadius: 10
  }
});
'use strict'

//import React from 'react';
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
  },
  calContainer: {
    flex: 1,
  },
  displayContainer: {
      flex: 2,
      backgroundColor: '#193441',
  },
  inputContainer: {
      flex: 8,
      backgroundColor: '#3E606F',
  },
  nav: {
    flex: 1,
  },
  searchInput: {
    flex: 1,
    height: 20,
    paddingRight: 5,
    paddingLeft: 5,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',    
  },
  image: {
    width: 217,
    height: 138,
  },
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D'
  },
  inputButtonText: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white'
  },
  inputRow: {
      flex: 1,
      flexDirection: 'row'
  }
});

export default Style;
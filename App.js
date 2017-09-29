'use strict'

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, NavigatorIOS } from 'react-native';

import MyScene from './components/MyScene.js';
import Calculator from './components/Calculator.js';
import Style from './assets/Style.js';

export default class App extends React.Component {

  render() {
    return (
      
      <View style={Style.container}>
        
        <NavigatorIOS initialRoute={{ component: MyScene, title: 'My Initial Scene', }} style={Style.nav} />
        
        <Calculator></Calculator>
        
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          testID="test-01">
        </Button>
        
        <TextInput
          style={Style.searchInput}
          placeholder='Search bar'
        />

        <Button
          onPress={onPressGo}
          color='#48BBEC'
          title='Go'
        />

        <Image source={require('./assets/icecream.jpg')} style={Style.image}/>
      
      </View>
    );

    function onPressLearnMore(){
      console.log('LearnMore Pressed!');
    }
    function onPressGo(){
      console.log('Go Pressed!');
    }
  }
}
'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, NavigatorIOS } from 'react-native';

import MyScene from './components/MyScene.js';

const REQUEST_URL = 'https://thisisatestsitefromgabrielma.com/wp-json/wp/v2/posts/';
const fetchedData = fetch(REQUEST_URL);

export default class App extends React.Component {

  render() {
    return (
      
      <View style={styles.container}>
        
        <NavigatorIOS initialRoute={{ component: MyScene, title: 'My Initial Scene', }} style={styles.nav} />
        
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          testID="test-01">
        </Button>
        
        <TextInput
          style={styles.searchInput}
          placeholder='Search bar'
        />

        <Button
          onPress={onPressGo}
          color='#48BBEC'
          title='Go'
        />

        <Image source={require('./assets/icecream.jpg')} style={styles.image}/>
      
      </View>
    );

    function onPressLearnMore(){
      console.log('LearnMore Pressed!');
    }
    function onPressGo(){
      
      console.log('Go Pressed!');
      console.log(fetchedData);
      
    }
  }
}

const styles = StyleSheet.create({
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
  }
});

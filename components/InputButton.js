import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class InputButton extends Component {
    
    render() {
        return (
            <View>
                <Text>{this.props.value}</Text>
            </View>
        )
    }
    
}
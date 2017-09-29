'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import InputButton from './InputButton.js';
import Style from '../assets/Style.js';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class Calculator extends Component {
  	render() {
	    return (
	        <View style={Style.calContainer}> 
    			<View style={Style.displayContainer}></View>
    			<View style={Style.inputContainer}>
    				{this.renderInputButtons()}
    			</View>
	        </View>
	    );
  	}
    
	renderInputButtons() {
        
        const views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            const row = inputButtons[r];

            const inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                const input = row[i];

                inputRow.push(
                    <InputButton 
                    	value={input}
                    	onPress={this.onInputButtonPressed.bind(this, input)}
                    	key={r + "-" + i} />
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    onInputButtonPressed(input) {
    	console.log(input);
    }
}
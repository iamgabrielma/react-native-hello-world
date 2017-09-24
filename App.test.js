import React from 'react';
import App from './App';
import { Button } from 'react-native';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  	const rendered = renderer.create(<App />).toJSON();
  	expect(rendered).toBeTruthy();
});

it('This is a test, button should be present', () => {
	const rendered = renderer.create(<Button
		onPress={ () => onPressLearnMore() }
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        testID="test-001"/>);
	expect(rendered).toBeTruthy();
});
import React from 'react';
import App from './App';
import { Button } from 'react-native';

import renderer from 'react-test-renderer';

//import TestUtils from 'react-addons-test-utils';
//import { spyOnComponentMethod } from 'sinon-spy-react';

//import sinon from 'sinon';

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

// it('WP REST API connection should work ', () => {
// 	const onPress = sinon.spy();
//     const wrapper = shallow(<Button onPress={onPressGo} />);
//     wrapper.find('button').simulate('click');
//     expect(onPress.calledOnce).to.equal(true);
// });
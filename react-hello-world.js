import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class HelloWorldApp extends Component {
	render() {
		return (
			<Text>Hello world!</Text>
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);

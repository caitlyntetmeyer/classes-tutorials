/*

React Native - Udemy Course - https://www.udemy.com/react-native-the-practical-guide

Library that lets you build apps w/React that run on a native device (are installed through an app store)

"Learn once, write everywhere" --> Build real mobile apps by using JS and React (Native)

It's a JS + React Native app, compiled to native code

---

Behind the Scenes:

	React + React Native App:
		---
		class App extends Component {
			render() {
				return (
					<View>
						<Text>Hello there!</Text>
					</View>
				);
			}
		}
		---

	Compiled to --> Real Native App

---

Ways of Wrapping Content:

1. React for the Web
	a. <div> (sth only the browser understands)
	b. <input>
2. Native Component (Android)
	a. android.view (base component that Android understands)
	b. EditText
3. Native Component (iOS)
	a. UIView
	b. UITextField
4. React Native
	a. <View>
	b. <TextInput>
	(The above two lines would be compiled into the corresponding options in #2 and #3)

---

What about the JavaScript Part / Our Logic?

The UI is compiled to components exposed by React Native.
The logic is written by us in JS - it becomes a JS thread hosted by React Native app (similar to NodeJS, where the code runs w/o a browser). 

**Our logic remains JavaScript.

---

Creating Our First React Native App
https://www.udemy.com/react-native-the-practical-guide/learn/v4/t/lecture/8567784?start=0

(We spun up our app)

---

React Native Apps Are Hard Work!
Learn once, write everywhere (NOT write once, run everywhere).

	No or very little cross-platform styling of components --> Style components on your own or use 3rd-party libraries.

	Only a basic set of pre-built components --> Build components on your own or use 3rd-party libraries.

	Tools to create responsive designs but no responsiveness out of the box --> Create responsive designs on your own (check for device size and OS).

	React Native is a Fast-Moving Target:
		New versions monthly
		Breaking changes do happen
		High dependency on 3rd-party packages that also change
		There are bugs because it's still under active development
		...but we have tools to overcome these challenges!

------

I took a detour: https://facebook.github.io/react-native/docs/tutorial.html

Hello World React Native App:
	import React, { Component } from 'react';
	import { AppRegistry, Text } from 'react-native';

	export default class HelloWorldApp extends Component {
	  render() {
	    return (
	      <Text>Hello world!</Text>
	    );
	  }
	}

These are some ES2015 (AKA ES6) features:
	import
	from
	class
	extends
	() => 

When you're building a React Native app, you'll be making new components a lot. 
Anything you see on the screen is some sort of component. 
A component can be pretty simple - the only thing that's required is a render function which returns some JSX to render.

--

props - parameters for customizing components when they're created

Ex: One basic React Native component is the Image.
When you create an image, you can use a prop named "source" to control WHAT image it shows.

	import React, { Component } from 'react';
	import { AppRegistry, Image } from 'react-native';

	export default class Bananas extends Component {
	  render() {
	    let pic = {
	      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
	    };
	    return (
	      // Here it is:
	      <Image source={pic} style={{width: 193, height: 110}}/>
	    );
	  }
	}

You can put any JavaScript expression inside braces in JSX.

--

State
https://facebook.github.io/react-native/docs/state.html




------

*/







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
The logic is written by us in JS - it becomes a JS thread hosted by React Native app (similar to NodeJS, where the code runs w/o a browser). **Our logic remains JavaScript.

---

Creating Our First React Native App
https://www.udemy.com/react-native-the-practical-guide/learn/v4/t/lecture/8567784?start=0



*/







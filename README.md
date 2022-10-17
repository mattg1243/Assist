# Assist-app
An iOS app that helps users order things that they use frequently from Amazon. Alerts are sent when the user may be running low on something based on a provided usage interval and purchasing is quick and easy, directly in app.
# Code Overview
If you aren't familiar with React Native, you may not know that lots of this code in the repo is boilerplate generated from running npx react-native init.
The entry point of the application is App.js in the root of the project and the components can be found in the /components directory.
A custom native module is necessary for working with Amazon's "Login with Amazon" SDK as there are known security vulnerabilites when using the JavaScript web SDK
in a React Native setting.
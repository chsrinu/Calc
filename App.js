/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //import reducers from './src/reducers';
 /*const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' +
     'Cmd+D or shake for dev menu',
   android: 'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });*/

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainPage from './src/components/MainPage';
import reducers from './src/reducers';

//type Props = {};
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MainPage />
      </Provider>
    );
  }
}

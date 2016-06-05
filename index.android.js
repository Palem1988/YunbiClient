/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var App = require('./src/containers/App');

class YunbiClient extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('YunbiClient', () => YunbiClient);

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore'
import Base from './Base'

const store = configureStore()

class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Base />
            </Provider>
        );
    }
};

module.exports = App;
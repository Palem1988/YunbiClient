'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var BiDetail = require('./BiDetail');

var App = React.createClass({
    componentDidMount() {    
    },
    
    render:function () {
        return (
            <View style={styles.container}>
                <BiDetail/>
            </View>
        );
    }
    
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F25',
  },
});

module.exports = App;
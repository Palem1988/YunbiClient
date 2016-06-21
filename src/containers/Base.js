'use strict';

import React, { Component } from 'react';
import {
  View,
  Navigator
} from 'react-native';

import MarketList from './MarketList';


export default class Base extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
    
    render() {
        let defaultName = 'MarketList';
        let defaultComponent = MarketList;
        return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
        );
    }
};
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class TradeBody extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
    
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.setTradeContainer}>
                    <Text>Body</Text>
                </View>

                <View style={styles.orderBookContainer}>
                    <Text>orderBookContainer</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        height: 300,
        alignItems:'stretch',
    },
    setTradeContainer:{
        flex: 1,
        backgroundColor:'green',
        alignItems: 'stretch',
        justifyContent:'center',
    },
    orderBookContainer:{
        flex: 1,
        backgroundColor:'#ffff00',
        alignItems: 'center',
        justifyContent:'center',
    },   
})
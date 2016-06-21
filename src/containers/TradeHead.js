'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class TradeHead extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
    
    render() {
        const { market } = this.props;
        const marketName = market.slice(0, -3).toUpperCase()
        return (
            <View style={styles.Container}>
                <View style={styles.CoinName}>
                        <Text style={styles.CoinNameText}>{marketName}</Text>
                </View>
                
                <View style={styles.CoinHistory}>
                    <Text>CoinHistory</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        height: 40,
        alignItems:'stretch'
    },
    CoinName:{
        flex: 1,
        justifyContent:'center',
        marginLeft: 30,
    },
    CoinNameText:{
        color:'black'
    },
    CoinHistory:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },    
})
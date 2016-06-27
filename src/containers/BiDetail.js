'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import Trade from './Trade'

export default class BiDetail extends Component{
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {    
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Trade',
                component: Trade,
                params: {
                    market: this.props.market
                }
            })
        }
    }
    
    render() {
        const mName = this.props.market.slice(0, -3).toUpperCase()
        let price = this.props.last;
        let intLen = parseInt(price).toString().length
        if(intLen < price.length)
        {
            price = parseFloat(price).toFixed(7 - intLen);
        }
        let strVol = parseInt(this.props.vol).toString()
        if( strVol.length > 9)
        {
            strVol = strVol.slice(0, -9) + '亿'
        }
        else if(strVol.length > 5)
        {
            strVol = strVol.slice(0, -5) + '万'
        }
        let intLenVol = parseInt(this.props.vol).toString().length
        return (
            <View style={styles.BiContainer}>
                <TouchableOpacity onPress={this._pressButton.bind(this)} style={styles.BiContainer}>
                    <View style={styles.biNameContainer}>
                        <Text style={styles.biName}>{mName}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.biPrice}>￥{price}</Text>
                    </View>
                    <View style={styles.volumeContainers}>
                        <View style={styles.volumeContainer}>
                            <Text style={styles.volumeText}>高</Text>
                            <Text style={styles.volumeValue}>{this.props.high}</Text>
                        </View>
                        <View style={styles.volumeContainer}>
                            <Text style={styles.volumeText}>低</Text>
                            <Text style={styles.volumeValue}>{this.props.low}</Text>
                        </View>
                        <View style={styles.volumeContainer}>
                            <Text style={styles.volumeText}>量</Text>
                            <Text style={styles.volumeValue}>{strVol}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    BiContainer:{
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#262B31',
        borderBottomWidth: 1,
    },
    biNameContainer:{
        width: 88.8,
        height: 100,
        flex: 1,
        marginLeft: 12,
        marginRight: 16,
        /*backgroundColor : 'red',*/
        justifyContent: 'center',
    },
    biName:{
        color:'white',
        fontSize: 30,
    },
    priceContainer:{
        width: 112,
        height: 100,        
        flex: 2,
        marginRight: 12,
        /*backgroundColor : 'green',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    biPrice: {
        color:'white',
        fontSize: 18,
    },
    volumeContainers:{
        width: 100,
        height: 100,
        flex : 2,
        /*backgroundColor : 'blue',*/
        alignItems:'flex-start',
        justifyContent: 'center',
    },
    volumeContainer:{
        flexDirection: 'row',
        marginLeft: 10
    },
    volumeText:{
        color:'#61666C',
        marginRight: 5,
        fontSize: 15,
    },
    volumeValue:{
        color:'white',
        fontSize: 15,
    },
});
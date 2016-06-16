'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BiDetail extends Component{
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {    
    }
    
    render() {
        const mName = this.props.market.slice(0, -3).toUpperCase()
        return (
            <View style={styles.BiContainer}>
                <View style={styles.biNameContainer}>
                    <Text style={styles.biName}>{mName}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.biPrice}>{this.props.last}</Text>
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
                        <Text style={styles.volumeValue}>{this.props.vol}</Text>
                    </View>
                </View>                
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    BiContainer:{
        flexDirection: 'row',
        borderBottomColor: '#262B31',
        borderBottomWidth: 1,
    },
    biNameContainer:{
        width: 296,
        height: 160,
        flex: 2,
        marginLeft: 24,
        marginRight: 16,
        /*backgroundColor : 'red',*/
        justifyContent: 'center',
    },
    biName:{
        color:'white',
        fontSize: 30,
    },
    priceContainer:{
        width: 320,
        height: 160,        
        flex: 2,
        marginRight: 48,
        /*backgroundColor : 'green',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    biPrice: {
        color:'white',
        fontSize: 20,
    },
    volumeContainers:{
        width: 160,
        height: 160,
        flex : 2,
        /*backgroundColor : 'blue',*/
        alignItems:'center',
        justifyContent: 'center',
    },
    volumeContainer:{
        flexDirection: 'row',
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
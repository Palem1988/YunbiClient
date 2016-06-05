'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var REQUEST_URL = 'https://yunbi.com:443//api/v2/tickers/ethcny.json';
var BiDetail = React.createClass({
    componentDidMount() {    
        setInterval(() => {
            this.fetchData()
        }, 5000);
    },
    
    fetchData(){
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
                
            let date = new Date(responseData.at*1000);
    
            let year = date.getFullYear();
            let month = date.getMonth()+1; 
            let date1 = date.getDate(); 
            let hour = date.getHours(); 
            let minutes = date.getMinutes(); 
            let second = date.getSeconds();
            let timeString = year + '年' + month + '月' + date1 + '日' + hour + '时' + minutes + '分' + second + '秒';
            
            console.log(timeString);
        })
        .done();                
    },
    
    render:function () {
        return (
            <View style={styles.BiContainer}>
                <View style={styles.biNameContainer}>
                    <Text style={styles.biName}>BTC</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.biPrice}>￥1788.025</Text>
                </View>
                <View style={styles.volumeContainers}>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>高</Text>
                        <Text style={styles.volumeValue}>1899.33</Text>
                    </View>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>低</Text>
                        <Text style={styles.volumeValue}>1869.33</Text>
                    </View>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>量</Text>
                        <Text style={styles.volumeValue}>1899.33</Text>
                    </View>
                </View>                
            </View>
        );
    }
    
});

const styles = StyleSheet.create({
    BiContainer:{
        flexDirection: 'row',
        borderBottomColor: '#262B31',
        borderBottomWidth: 1,
    },
    biNameContainer:{
        width: 370,
        height: 160,
        flex: 2,
        marginLeft: 30,
        marginRight: 20,
        /*backgroundColor : 'red',*/
        justifyContent: 'center',
    },
    biName:{
        color:'white',
        fontSize: 60,
    },
    priceContainer:{
        width: 400,
        height: 160,        
        flex: 2,
        marginRight: 60,
        /*backgroundColor : 'green',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    biPrice: {
        color:'white',
        fontSize: 40,
    },
    volumeContainers:{
        width: 200,
        height: 160,
        flex : 1,
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
        fontSize: 20,
    },
    volumeValue:{
        color:'white',
        fontSize: 20,
    },
});

module.exports = BiDetail;
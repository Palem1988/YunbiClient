'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import yunbiApp from '../reducers'
import {updateBit} from '../action'

var BiDetail = require('./BiDetail');


let store = createStore(yunbiApp)
console.log(store);
console.log(store.getState());
store.dispatch(updateBit('ethcny', {ticker:1}));
console.log(store.getState());

var REQUEST_URL = 'https://yunbi.com:443//api/v2/tickers/ethcny.json';
class App extends Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    
    componentDidMount() {
        setInterval(() => {
            this.fetchData()
        }, 5000);
    }
    
    fetchData (){
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
            store.dispatch(updateBit('ethcny', responseData.ticker));
            console.log(timeString);
            console.log(store.getState());
        })
        .done();                
    }
    
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <BiDetail/>
                </View>
            </Provider>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F25',
  },
});

module.exports = App;
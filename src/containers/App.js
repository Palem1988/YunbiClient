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

import BiDetail from './BiDetail';

let store = createStore(yunbiApp)

var TICKER_BASEURL = 'https://yunbi.com//api/v2/tickers/';
class App extends Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    
    componentDidMount() {
        setInterval(() => {
            this.fetchData()
        }, 20*1000);
    }
    
    async fetchData (){
        let bitUrls = [];
        for(let bit of store.getState().bitList){
            bitUrls.push(TICKER_BASEURL + bit + '.json');
        }
        let promises = bitUrls.map((url) => fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
        );
        
        try{
            let results = await Promise.all(promises);
            for (let result of results) {
                console.log(result);
            }
        }catch(err){
            console.log(err);
        }
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
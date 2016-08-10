'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ListView
} from 'react-native';
import OrderBookItem from './OrderBookItem'

export default class TradeBody extends Component{
    constructor(props){
        super(props);
        var dsAsks = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dsAsks = dsAsks.cloneWithRows(['row 1', 'row 2'])
        var dsBids = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dsBids = dsBids.cloneWithRows(['row 1', 'row 2'])        
    }
    
    componentDidMount() {
    }
    
    render() {
        const { market, orderList } = this.props;
        let orders = orderList[market];
        let asks = []
        let bids = []
        if(orders)
        {
            asks = orders['asks'].reverse();
            bids = orders['bids'];
        }    
        if(asks.length<=0 || bids.length<=0)
            return null
        this.dsAsks = this.dsAsks.cloneWithRows(asks);
        this.dsBids = this.dsBids.cloneWithRows(bids);
        
        return (
            <View style={styles.Container}>
                <View style={styles.setTradeContainer}>
                    <Text>买入价格</Text>
                    <View style={styles.textinputContainer}>
                        <TextInput keyboardType='numeric' underlineColorAndroid='transparent'></TextInput>
                    </View>
                    <Text>数量</Text>
                    <View style={styles.textinputContainer}>
                        <TextInput keyboardType='numeric' underlineColorAndroid='transparent'></TextInput>
                    </View>
                    <View style={styles.amountContainer}>
                        <TouchableOpacity style={styles.amountButton}>
                            <Text>1/3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.amountButton}>
                            <Text>1/2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.amountButton}>
                            <Text>全部</Text>
                        </TouchableOpacity>                                                
                    </View>
                    
                    <TouchableOpacity style={styles.buyButton}>
                        <Text>买入</Text>
                    </TouchableOpacity>                    
                </View>

                <View style={styles.orderBookContainer}>
                    <ListView contentContainerStyle={styles.orderBookView}
                        enableEmptySections = {true}
                        dataSource={this.dsAsks}
                        renderRow={(rowData, sectionID, rowID) => <OrderBookItem  rowData={rowData} sectionID={sectionID} rowID={rowID} type='SELL'/>}
                    />
                    <ListView contentContainerStyle={styles.orderBookView}
                        enableEmptySections = {true}
                        dataSource={this.dsBids}
                        renderRow={(rowData, sectionID, rowID) => <OrderBookItem  rowData={rowData} sectionID={sectionID} rowID={rowID} type='BUY'/>}
                    />                    
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
        borderLeftWidth: 4, 
        borderRightWidth: 4,
        borderColor: 'transparent'
    },
    orderBookContainer:{
        flex: 1,
        /*backgroundColor:'#ffff00',*/
        alignItems: 'center',
        justifyContent:'center',
    },
    orderBookView :{
        flex: 1,
        justifyContent:'center',
    },
    textinputContainer:{
        borderColor: '#000000', 
        borderWidth: 1, 
        height : 30,
        marginTop : 5,
        marginBottom : 5,
    },
    amountContainer:{
        flexDirection: 'row',
    },
    amountButton:{
        flex : 1,
        borderColor : 'black',
        borderWidth : 1,
        marginLeft : 5,
        marginRight : 5,
        alignItems: 'center',
        justifyContent:'center',
    },
    buyButton:{
        borderColor : 'black',
        borderWidth : 1,
        alignItems: 'center',
        justifyContent:'center',
        height : 30,
        marginTop : 10,
        marginBottom: 10,
        backgroundColor : 'green'
    }
})
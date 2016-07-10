'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TradeHead from './TradeHead'
import TradeBody from './TradeBody'
import TradeBottom from './TradeBottom'
import * as actions from '../actions'

export default class Trade extends Component{
    constructor(props){
        super(props);
        setInterval(this.updateOrderBook.bind(this), 3 * 1000);
    }
    
    componentDidMount() {
        this.updateOrderBook()
    }
    
    updateOrderBook(){
        const { actions } = this.props
        const { market } = this.props;
        actions.fetchMarketOrderBook(market)
    }    
    
    render() {
        let defaultName = 'TradeView';
        const {market} = this.props;
        //let defaultComponent = MarketList;
        return (
            <View>
                <TouchableOpacity>
                    <Text>这里是{ market }交易界面</Text>
                </TouchableOpacity>
                <TradeHead  {...this.props}/>
                <TradeBody {...this.props}/>
                <TradeBottom />
            </View>
        );
    }
};

function mapStateToProps(state) {
  return {
    orderList: state.market.orderBook
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trade)
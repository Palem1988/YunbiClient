'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

export default class Trade extends Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
    }
    
    render() {
        let defaultName = 'MarketList';
        const { market } = this.props;
        //let defaultComponent = MarketList;
        return (
            <View>
                <TouchableOpacity>
                    <Text>这里是{ market }交易界面</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
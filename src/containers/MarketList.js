'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import yunbiApp from '../reducers'
import * as actions from '../actions'

import BiDetail from './BiDetail';

class MarketList extends Component{
    constructor(props){
        super(props);
        setInterval(this.updateMarket.bind(this), 20 * 1000);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.ds = ds.cloneWithRows(['row 1', 'row 2'])
    }
    
    updateMarket(){
        const { actions } = this.props
        actions.fetchMarketsDetail(['ethcny',  'sccny', 'daocny', 'btccny'])
    }
    componentDidMount() {
        this.updateMarket()
    }
    
    render() {
        const { marketDetail, navigator } = this.props;
        let dsData = [];
        Object.keys(marketDetail).map(detail =>{
            dsData.push(marketDetail[detail])
        })
        this.ds = this.ds.cloneWithRows(dsData)
        
        return (
                <View style={styles.container}>
                    <ListView
                        dataSource={this.ds}
                        renderRow={(rowData) => <BiDetail {...rowData} navigator={navigator}/>}
                    />
                </View>
        );
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F25',
  },
});

function mapStateToProps(state) {
  return {
    marketDetail: state.market.detail
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
)(MarketList)
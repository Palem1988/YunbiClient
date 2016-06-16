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


class Base extends Component{
    constructor(props){
        super(props);
        console.log('Base constructor')
        setInterval(this.updateMarket.bind(this), 30 * 1000);
/*        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          ds
        };*/
    }
    
    updateMarket(){
        const { actions } = this.props
        actions.fetchMarketsDetail(['btccny', 'ethcny', 'daocny', 'sccny'])
    }
    componentDidMount() {
        this.updateMarket()
    }
    
    render() {
        const { marketDetail } = this.props;
/*        let dsData = [];
        Object.keys(marketDetail).map(detail =>{
          dsData.concat(marketDetail[detail])
        })
        this.setState({
          ds: this.state.ds.cloneWithRows(dsData)
        });*/
        //this.ds = this.ds.cloneWithRows(dsData);
        return (
            <View style={styles.container}>
              <BiDetail/>
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
)(Base)
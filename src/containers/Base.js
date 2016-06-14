'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import yunbiApp from '../reducers'
import * as actions from '../actions'

import BiDetail from './BiDetail';


class Base extends Component{
    constructor(props){
        super(props);
        setInterval(this.updateMarket.bind(this), 30 * 1000);
    }
    
    updateMarket(){
        const { actions } = this.props
        actions.fetchMarketsDetail(['btccny', 'ethcny', 'daocny', 'sccny'])
    }
    componentDidMount() {
        this.updateMarket()
    }
    
    render() {
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
    market: state.market
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
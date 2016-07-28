import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from './../util';

class About extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.text}>如果问题,请联系: wlhmyit@126.com</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:3
  }
});

module.exports = About;